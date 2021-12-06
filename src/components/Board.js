import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Card,
  CardBody,
  Collapse,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap'

import { useDispatch } from 'react-redux'
import { deleteBoard, getBoardList, updateBoard } from '../redux/reducers/board'

const Board = ({ board }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState(board.title)
  const [content, setContent] = useState(board.content)

  const onChangeTitle = useCallback(e => {
    setTitle(e.target.value)
  }, [])
  const onChangeContent = useCallback(e => {
    setContent(e.target.value)
  }, [])

  const dispatch = useDispatch()

  const onSubmit = useCallback(
    async e => {
      e.preventDefault()
      await dispatch(updateBoard({ id: board.id, title, content }))
      await dispatch(getBoardList())
    },
    [title, content]
  )

  const toggleCollapse = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const style = isOpen ? { display: 'table-row' } : { display: 'none' }

  const onRemove = useCallback(async () => {
    await dispatch(deleteBoard(board.id))
    await dispatch(getBoardList())
  }, [dispatch])
  return (
    <>
      <tr onClick={toggleCollapse}>
        <th scope="row">{board.id}</th>
        <td>{board.title}</td>
        <td>{board.content}</td>
        <td>{board.insert_user}</td>
        <td>{board.insert_date}</td>
        <td>
          <Button
            onClick={onRemove}
            color="danger"
            style={{ fontSize: '12px', padding: '8px' }}
          >
            삭제
          </Button>
        </td>
      </tr>
      <tr style={style}>
        <td colSpan="6">
          <Collapse isOpen={isOpen}>
            <Card>
              <CardBody>
                <Form onSubmit={onSubmit}>
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
                  <Button color="primary" type="submit">
                    수정
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Collapse>
        </td>
      </tr>
    </>
  )
}

Board.propTypes = {
  board: PropTypes.object.isRequired,
}

export default Board
