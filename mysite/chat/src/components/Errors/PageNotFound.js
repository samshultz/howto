import React from 'react'
import { Row, Col } from 'react-materialize'

const NotFound = ()=> {
  return (
    <div style={ { marginTop: 20 + 'px' } }>    
      <Row>
        <Col s={6} className='offset-s3'>
          <h4>404: Page Not Found</h4>
          <p>
            The page you're trying to access does not exist or have been moved
          </p>
        </Col>
      </Row>
    </div>
  )
}
export default NotFound
