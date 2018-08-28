import React from 'react'
import { Link } from 'react-router-dom'
import { Collection, CollectionItem, Icon } from 'react-materialize'

const StepsListInline = (props)=> {
  return (
    <Collection header={props.header ? props.header : 'All'}>
      {props.steps.map((step, index) =>
        (<CollectionItem key={index}>{step.title}
          <Link to={`/detail/${step.id}`} className='secondary-content'>
            <Icon>send</Icon>
          </Link>
        </CollectionItem>
        )
      )}
    </Collection>
  )
}

export default StepsListInline
