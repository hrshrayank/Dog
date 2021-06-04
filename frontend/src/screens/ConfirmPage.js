import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function ConfirmPage() {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  return (
    <Col md={5} className='m-auto'>
      <Row>
        <h3>Thanks for choosing DogShop, {userInfo.name}</h3>
        <p class='lead'>Please check your email for order details</p>

        <p>
          Having trouble to find the mail ?{' '}
          <a href='mailto:hrshrayank77@gmail.com'>Contact us</a>
        </p>
        <p class='lead'>
          <a class='btn ' href='/' role='button'>
            Continue to homepage
          </a>
        </p>
      </Row>
    </Col>
  )
}

export default ConfirmPage
