import React from 'react'

export default function Button({name}) {

  return (
    <div className='p-4'>
      <button className='px-5 py-1 bg-gray-300 rounded-lg'>{name}</button>
    </div>
  )
}

