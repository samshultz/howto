import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Button, Modal, Icon, Input } from 'react-materialize'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: null
    }
  }

  handleSearch(event) {
    event.preventDefault()
    this.props.history.push(`/search/${this.state.search}`)
  }

  handleChange(event) {
    event.preventDefault()
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <nav className='light-blue lighten-1' role='navigation'>
        <div className='nav-wrapper container'>
          <Link to='/' id='logo-container' className='brand-logo'>Logo</Link>
          <ul className='right hide-on-med-and-down'>
            <li style={ { marginTop: 20 + 'px' } }>
              <Link to='/steps/add' className='waves-effect waves-light pulse btn right'>
                Add<Icon className='right'>add</Icon></Link>
            </li>
            <li>
              <Modal header='Search' trigger={<Button>Search</Button>}>
                <form onSubmit={(event) =>this.handleSearch(event) } >
                  <Input
                    placeholder='Type your search term here'
                    validate={true}
                    onChange={(event)=>this.handleChange(event)}
                    name='search'
                  >
                    <Icon className='right'>search</Icon>
                  </Input>
                  <Input type='submit'
                    className='waves-effect waves-light btn-small'
                    defaultValue='Search' />
                </form>
              </Modal>
            </li>
          </ul>

          <ul id='nav-mobile' className='sidenav'>

            <li style={ { marginTop: 20 + 'px' } }>
              <Link to='/steps/add' className='waves-effect waves-light btn right pulse'>
                Add new article<i className='material-icons right'>add</i></Link>
            </li>
            <li>
              <Modal header='Search' trigger={<Button>Search</Button>}>
                <form>
                  <Input
                    placeholder='Type your search term here' 
                    validate={true}
                    name='search'
                  >
                    <Icon className='right'>search</Icon>
                  </Input>
                  <Input type='submit'
                    className='waves-effect waves-light btn-small'
                    defaultValue='Search' />
                </form>
              </Modal>
            </li>
          </ul>
          <a href='#' data-target='nav-mobile' className='sidenav-trigger'>
            <i className='material-icons'>menu</i>
          </a>
        </div>
      </nav>
    )
  }
}

export default withRouter(Header)
