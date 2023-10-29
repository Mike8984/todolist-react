import React from 'react'

const Header = ({ heading, setOpen }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <h1 className="title">{heading}</h1>
          <button className="open-modal" onClick={() => setOpen(true)}>
            Add Todo
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
