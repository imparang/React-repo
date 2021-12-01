import React, { useState } from 'react'
import axios from 'axios'

const ProxyTest = () => {
  const [getData, setGetData] = useState('')
  const [getJson, setGetJson] = useState({})
  const [getJsonPost, setGetJsonPost] = useState({})
  const [data, setData] = useState('')

  const getApiUsers = () => {
    axios.get('/users')
      .then(
        res => {
          console.log(res)
          setGetData(res.data)
        }
      )
      .catch(
        error => {
          console.log(error)
        }
      )
  }

  const getApiUsersJson = () => {
    axios.get('/users/json')
    .then(
      res => {
        console.log(res)
        setGetJson(res.data)
      }
    )
    .catch(
      error => {
        console.log(error)
      }
    )
  }

  const getApiUsersJsonPost = () => {
    axios.post('/users/Post')
    .then(
      res => {
        console.log(res)
        setGetJsonPost(res.data)
      }
    )
    .catch(
      error => {
        console.log(error)
      }
    )
  }

  const getApiUsersJsonPostSend = () => {
    axios.post('/users/sendJson?type=login', {
      userId: 'Root',
      password: 'admin1234'
    })
    .then(
      res => {
        console.log(res)
        setGetJsonPost(res.data)
      }
    )
    .catch(
      error => {
        console.log(error)
      }
    )
  }

  return (
    <div>
      <div>
        <h2>Local server에서 GET 방식으로 호출하기</h2>
        <div>{getData}</div>
        <button onClick={getApiUsers}>가져왓</button>
      </div>

      <div>
        <h2>Local server에서 GET 방식으로 JSON data 받기</h2>
        <div>{JSON.stringify(getJson)}</div>
        <div>{getJson.message}</div>
        <button onClick={getApiUsersJson}>가져왓</button>
      </div>

      <div>
        <h2>Local server에서 POST 방식으로 JSON data 받기</h2>
        <div>{JSON.stringify(getJsonPost)}</div>
        <div>{getJsonPost.message}</div>
        <button onClick={getApiUsersJsonPost}>가져왓</button>
      </div>

      <div>
        <h2>Local server에서 POST 방식으로 JSON data 보내기</h2>
        <div>{data}</div>
        <button onClick={getApiUsersJsonPostSend}>보내버렷</button>
      </div>
    </div>
  )
}

export default ProxyTest
