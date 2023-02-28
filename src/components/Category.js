import React from 'react'

const Category = ({logo,title,css}) => {
  return (
    <div className={`cursor-pointer flex items-center gap-2 ` }>
    <button className={`flex items-center gap-2  ${css}`}>
        {logo}
     <p className='font-semibold'>{title}</p>
    </button>
     

    </div>
  )
}

export default Category
