import React from 'react'

export const Header = () => {
  return (
    <div id='inicio' className=' p-6 bg-morado flex justify-between'>
        <a href='#' className='text-4xl text-left text-white font-bold' >Maternity +</a>
        <lord-icon
          src="https://cdn.lordicon.com/hrjifpbq.json"
          trigger="hover"
          colors="primary:#ffffff"
          style={{ width: 40, height: 40 }}
        ></lord-icon>
      </div>
  )
}

