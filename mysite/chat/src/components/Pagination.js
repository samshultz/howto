import React, { Component } from 'react'
import { Pagination } from 'react-materialize'

class Paginate extends Component {
  selected(pageNum) {
    this.props.getSteps(pageNum)
  }

  render() {
    const { totalItems } = this.props
    const page_size = window.django.page_size
    const quo = totalItems / page_size
    let numPages = totalItems % page_size !== 0 ? Math.floor(quo) + 1 : Math.floor(quo)

    return (
      <Pagination
        items={numPages}
        maxButtons={numPages}
        onSelect={(pageNum)=>this.selected(pageNum)}
      />
    )
  }
}

export default Paginate

