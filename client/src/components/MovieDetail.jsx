import React from 'react'

export const MovieDetail = (props) => {
  if(!props.movie) return null
  return(
  <div>
    <h3>
      {props.movie.show_title}
    </h3>
  </div>
  )
}
