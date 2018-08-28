import React from 'react'
import { Row, Col } from 'react-materialize'

const NoSteps = ()=> {
  return (
    <div style={ { marginTop: 20 + 'px' } }>    
      <Row>
        <Col s={6} className='offset-s3'>
          <h4 className='center'>There are no articles found</h4>
          <p className='center'>
            Sorry there are not posts yet. Try again!!!
          </p>
        </Col>
      </Row>
    </div>
  )
}
export default NoSteps
