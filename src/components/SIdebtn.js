import React from 'react'

const SIdebtn = ({title,icon}) => {
  return (
    <div className='text-gray-600 flex items-center gap-2 rounded-r-full bg-slate-200' >
        <p>{icon}</p>
      <p className='font-semibold'>{title}</p>
    </div>
  )
}

export default SIdebtn
