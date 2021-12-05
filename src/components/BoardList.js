import React, { useCallback, useEffect, useState } from 'react'
import { Button, Table } from 'reactstrap'
import Board from './Board'
import PropTypes from 'prop-types'
import ModalComponent from './ModalComponent'

const BoardList = ({ data }) => {
  const [boards, setBoards] = useState([])
  const [isModal, setIsModal] = useState(false)

  const toggleModal = useCallback(() => {
    setIsModal(!isModal)
  }, [isModal])

  useEffect(() => {
    setBoards(data.data?.json)
  }, [data])

  const Boards = () => {
    return boards.map(board => <Board key={board.id} board={board} />)
  }
  return boards && boards.length ? (
    <>
      <Table hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Content</th>
            <th>Username</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <Boards />
        </tbody>
      </Table>
      <div style={{ position: 'relative' }}>
        <Button
          onClick={toggleModal}
          style={{ position: 'absolute', right: 0 }}
          color="primary"
        >
          추가
        </Button>
        <ModalComponent isModal={isModal} toggleModal={toggleModal} />
      </div>
    </>
  ) : (
    <div>게시글이 없습니다.</div>
  )
}

BoardList.propTypes = {
  data: PropTypes.object,
}

export default BoardList
