import React from 'react'

export function Banner(){
    return(
      <div>
      <div className="h-56 md:h-80 md: w-full bg-cover bg-bottom">
        <img className="h-full w-full object-cover object-center bg-bottom" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80" alt="img"/>
      </div>
      </div>
    )
}