import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Steps from './components/Steps'
import Detail from './components/Detail'
import Form from './components/Form'
import Search from './components/Search'
import NotFound from './components/Errors/PageNotFound'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'



class App extends Component {
  componentDidMount() {
    M.AutoInit()
  }
  render() {
    return (
      <div>
        <Header/>
        <div className='App container'>
          <Switch>
            <Route path='/steps/add' component={Form} />
            <Route path='/detail/:id' component={Detail} />
            <Route exact path='/' component={Steps} />
            <Route path='/search/:query' component={Search} />
            <Route component={NotFound}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
