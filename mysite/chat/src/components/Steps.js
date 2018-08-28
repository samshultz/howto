import React, { Component } from 'react'
import StepsListInline from './containers/StepsListInline'
import Paginate from './Pagination'
import 'whatwg-fetch'
import { Row, Col, Preloader } from 'react-materialize'
import NoSteps from './Errors/NoSteps'


class Steps extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      itemCount: null,
      ready: false
    }
    this.getSteps = this.getSteps.bind(this)
  }

  getSteps(pageNum) {
    fetch(`/api/steps/?page=${pageNum}`)
      .then(results=>results.json())
      .then(results=>this.setState({ 
        items: results.results, 
        itemCount: results.count, 
        ready: true }))
  }

  componentDidMount() {
    this.getSteps(1)
  }

  render() {
    return (
      <div>
      {this.state.ready ?
      <div>
        
        {this.state.items ?
        <div>
          <StepsListInline steps={this.state.items}/>
          <Paginate
            totalItems={this.state.itemCount}
            getSteps={this.getSteps}
            numResults={ this.state.items.length }/>
        </div>
        :
        <NoSteps />
        }
        
      </div>
      :
      <div className='center' style={ { marginTop: 120 + 'px' } }>
        <Row>
          <Col s={12}>
            <Preloader size='big' />
          </Col>
          
        </Row>
      </div>
      }
      </div>
    )
  }
}

export default Steps
