import React from "react"
import { AiOutlineStar, AiFillStar } from "react-icons/ai"

export function Card() {
  return (
    <div className="min-h-screen bg-gray-300 mb-8">
      <div className="mx-4 mb-8">
        <div className="md:flex md:w-1/2 mt-4 md:bg-white">
          <div>
          <img className="w-full rounded-lg" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=500&q=80" alt= "img" />
          </div>
          <div className="relative bg-white md:bg-transparent shadow-lg rounded-lg -mt-2 mx-2 p-2">
            <h2 className="text-gray-900 text-xl tracking-tight font-semibold uppercase md:text-lg">hamburguesa con queso</h2>
            <p p className="text-gray-700 leading-snug">Hamburguesa con queso y aderezo chipotle</p>
            <div className="mt-2 font-semibold text-sm text-gray-700">3.99 USD$</div>
            <div className="flex flex-row mt-2 text-xs text-yellow-700"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/> / 36 reseñas</div>
          </div>
        </div>
      </div>
    </div>
  )
}