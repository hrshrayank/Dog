import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import '../index.css'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} className='containers'>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Dog breed...'
        className='form'
      ></Form.Control>

      <button type='submit' className='button'>
        <i class='fas fa-search fa-lg'></i>
      </button>
    </Form>
  )
}

export default SearchBox
