import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap'
import { getBoardList } from '../redux/reducers/board'

const SearchForm = () => {
  const [searchData, setSearchData] = useState('')

  const onChangeSearchData = useCallback(e => {
    setSearchData(e.target.value)
  }, [])

  const dispatch = useDispatch()

  const onSubmit = useCallback(
    e => {
      e.preventDefault()
      dispatch(getBoardList(searchData))
    },
    [searchData]
  )
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup row>
        <Label for="exampleSearch">Search</Label>
        <Col xs={10}>
          <Input
            id="exampleSearch"
            name="search"
            placeholder="search placeholder"
            type="search"
            value={searchData}
            onChange={onChangeSearchData}
          />
        </Col>
        <Col xs={2}>
          <Button block>검색</Button>
        </Col>
      </FormGroup>
    </Form>
  )
}

export default SearchForm
