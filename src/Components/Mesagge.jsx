import React from 'react'

export const Mesagge = ({msg, bgColor}) => {

  let styles = {
    padding: "1em",
    margin: "1em",
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    backgroundColor: {bgColor}
  }

  return (
    <div style={styles}>
      <h2>{msg}</h2>
    </div>
  )
}
