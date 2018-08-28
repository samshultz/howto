import React from 'react'
import CKEditor from 'react-ckeditor-component'
import { Row, Col, Input } from 'react-materialize'

const FormInline = (props)=> {
  const { submit, change, editorChange, editorContent } = props
  return (
    <div style={ { marginTop: 20 + 'px' } }>
      <h4>Add a new Step by Step Guide to doing something</h4>
      <Row>
        <Col s={12}>
          <form onSubmit={(event)=>submit(event)}>
            <Row>
              <Col className='input-field' s={6}>
                <Input id='username' type='text'
                  name='name'
                  label='Your Name'
                  className='validate'
                  onChange={(event)=>change(event)} />
              </Col>
              <Col className='input-field' s={6}>
                <Input id='title' type='text'
                  name='title'
                  label='Article Title'
                  className='validate'
                  onChange={(event)=>change(event)} />
              </Col>
            </Row>
            <Row>
              <Col className='input-field' s={12}>
                <CKEditor
                  activeClass='materialize-textarea'
                  content={editorContent}
                  scriptUrl={window.django.ckeditor.ckeditor}
                  events={{
                    change: editorChange
                  }}
                />
              </Col>
            </Row>
            <Input type='submit'
              className='waves-effect waves-light btn-small right'
              defaultValue='Save' />
          </form>
        </Col>
      </Row>
    </div>
  )
}
export default FormInline
