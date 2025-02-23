import React from 'react'

function Logo(props) {
  return (
    <div>
        <img src={props.img} alt="Logo" className="rounded-circle" style={{ width: '70px', height: '70px' }} />
    </div>
  )
}

export default Logo