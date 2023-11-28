import React from 'react'
import Button from './Button'

export default function ButtonList() {

  const list = ['All', 'New for you', 'Songs', 'Live', 'News', 'Cooking']

  return (
    <div className='flex'>
      {list.map(d => {
        return <Button name={d} key={d} />
      })}
    </div>
  )
}
