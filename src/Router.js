import React from 'react'
import { Switch, Route } from 'react-router-dom'
import App from './App'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import MyWork from './components/MyWork'

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/mywork" component={MyWork} />
    </Switch>
  )
}

export default Router
