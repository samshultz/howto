import React, { Component } from 'react'
import 'whatwg-fetch'
import Highlight from 'react-highlight'


class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: []
    }
  }

  getStepDetail() {
    fetch(`/api/steps/${this.props.match.params.id}`)
      .then(results=>results.json())
      .then(results => this.setState({ item: results }))
  }
  
  componentDidMount() {
    this.getStepDetail()
  }

  render() {
    return (
      <div>
        
        <h2>{this.state.item.title}</h2>
        <Highlight innerHTML={true}>
          {this.state.item.content }
        </Highlight>
      </div>
    )
  }
}
export default Detail
