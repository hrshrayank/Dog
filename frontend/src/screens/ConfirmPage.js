import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function ConfirmPage() {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  return (
    <Col>
      <Row>
        <h3>
          Thanks for choosing DogShop, {userInfo.name} Here are your order
          details
        </h3>
        <p class='lead'>
          <strong>Please check your email</strong> for further instructions on
          how to complete your account setup.
        </p>

        <p>
          Having trouble? <a href='mailto:hrshrayank77@gmail.com'>Contact us</a>
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
