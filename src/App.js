import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from 'reactstrap'
import BoardList from './components/BoardList'
import SearchForm from './components/SearchForm'
import { getBoardList } from './redux/reducers/board'
// import ProxyTest from './components/ProxyTest';

function App() {
  const board = useSelector(state => state.board)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBoardList())
  }, [dispatch])

  return (
    <Container>
      <SearchForm />
      <BoardList data={board.data} />
    </Container>
  )
}

export default App
