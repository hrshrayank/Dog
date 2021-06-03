import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import LandingScreen from './screens/LandingScreen'
import SingleProduct from './screens/SingleProduct'
import CartScreen from './screens/CartScreen'
import LoginPage from './screens/LoginPage'
import NewUserPage from './screens/NewUserPage'

import AddressPage from './screens/AddressPage'

import ShippingPage from './screens/ShippingPage'
import ConfirmPage from './screens/ConfirmPage'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/confirm' component={ConfirmPage} />
          <Route path='/shipping' component={AddressPage} />

          <Route path='/placeorder' component={ShippingPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={NewUserPage} />

          <Route path='/product/:id' component={SingleProduct} />
          <Route path='/cart/:id?' component={CartScreen} />

          <Route path='/search/:keyword' component={LandingScreen} exact />
          <Route path='/page/:pageNumber' component={LandingScreen} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={LandingScreen}
            exact
          />
          <Route path='/' component={LandingScreen} exact />
        </Container>
      </main>
    </Router>
  )
}

export default App
