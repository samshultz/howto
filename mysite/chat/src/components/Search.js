import React, { Component } from 'react'
import StepsListInline from './containers/StepsListInline'
import Paginate from './Pagination'
import 'whatwg-fetch'
import NoSteps from './Errors/NoSteps'


class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      itemCount: null
    }
    this.getSteps = this.getSteps.bind(this)
  }

  getSteps() {
    let searchTerm = this.props.match.params.query
    fetch(`/api/steps/?search=${searchTerm}`)
      .then(results=>results.json())
      .then(results=>this.setState({ items: results.results, itemCount: results.count }))
  }

  componentDidMount() {
    this.getSteps()
  }

  render() {
    return (
      <div>
        {this.state.items.length >= 1 ?
          <div>
            <StepsListInline 
              steps={this.state.items}
              header={`Search results for ${this.props.match.params.query}`}/>
            <Paginate
              totalItems={this.state.itemCount}
              getSteps={this.getSteps}
              numResults={ this.state.items.length }
            />
          </div>
          :
          <NoSteps />
        }
      </div>
    )
  }
}

export default Search
