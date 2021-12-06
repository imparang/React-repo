import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap'
import { getBoardList, insertBoard } from '../redux/reducers/board'

const ModalComponent = ({ isModal, toggleModal }) => {
  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [username, setUsername] = useState('')

  const onChangeTitle = useCallback(e => {
    setTitle(e.target.value)
  }, [])
  const onChangeContent = useCallback(e => {
    setContent(e.target.value)
  }, [])
  const onChangeUsername = useCallback(e => {
    setUsername(e.target.value)
  }, [])
  const onSubmit = useCallback(
    async e => {
      e.preventDefault()
      await dispatch(insertBoard({ title, content, insert_user: username }))
      await dispatch(getBoardList())
      toggleModal()
      setTitle('')
      setContent('')
      setUsername('')
    },
    [title, content, username]
  )
  return (
    <Modal isOpen={isModal}>
      <ModalHeader>게시글 작성</ModalHeader>
      <Form onSubmit={onSubmit}>
        <ModalBody>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="제목을 적으세요"
              type="text"
              value={title}
              onChange={onChangeTitle}
            />
          </FormGroup>
          <FormGroup>
            <Label for="content">Content</Label>
            <Input
              id="content"
              name="content"
              placeholder="내용을 적으세요"
              type="textarea"
              value={content}
              onChange={onChangeContent}
            />
          </FormGroup>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              id="username"
              name="username"
              placeholder="이름을 적으세요"
              type="text"
              value={username}
              onChange={onChangeUsername}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit">
            게시글 추가
          </Button>{' '}
          <Button onClick={toggleModal}>취소</Button>
        </ModalFooter>
      </Form>
    </Modal>
  )
}

export default ModalComponent
