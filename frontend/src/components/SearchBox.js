import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
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
        placeholder='Search Products...'
        className='form'
      ></Form.Control>

      <button type='submit' className='button'>
        <i class='fas fa-search fa-lg'></i>
      </button>
    </Form>
  )
}

export default SearchBox

// .form-inline {
//   width: 100%;
// }

// .form-group {
//   width: 90%;
// }

// .input-group {
//   width: 90% !important;
// }

// .form-control {
//   width: 50% !important;
// }

// span.input-group-addon {
//   width: 50px !important;
// }
