import React from 'react'

function AuthWrap({children}) {
    console.log("hello");
  return (
    <div>
        {children}
    </div>
  )
}

export default AuthWrap;