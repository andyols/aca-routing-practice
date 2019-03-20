import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import './index.css'
import App from './App'
import Header from './components/Header'

const Complete = () => (
  <BrowserRouter>
    <Header />
    <Router />
  </BrowserRouter>
)

ReactDOM.render(<Complete />, document.getElementById('root'))
