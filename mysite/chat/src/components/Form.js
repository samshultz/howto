import React, { Component } from 'react'
import cookie from 'react-cookies'
import 'whatwg-fetch'
import FormInline from './containers/FormInline'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      title: null,
      content: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleEditorChange = this.handleEditorChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    let data = this.state

    this.createStep(data)
  }

  createStep(data) {
    const csrfToken = cookie.load('csrftoken')
    if (csrfToken) {
      let lookupOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken
        },
        body: JSON.stringify(data)

      }

      fetch('/api/steps/', lookupOptions)
        .then(()=> this.props.history.push('/'))
        .catch(function (error) {
          console.log('error', error)
        })
    }
  }

  handleEditorChange(event) {
    this.setState({ content: event.editor.getData() })
  }

  handleChange(event) {
    event.preventDefault()
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <FormInline
        submit={this.handleSubmit}
        change={this.handleChange}
        editorChange={this.handleEditorChange}
        editorContent={this.state.content}
      />
    )
  }
}

export default Form
