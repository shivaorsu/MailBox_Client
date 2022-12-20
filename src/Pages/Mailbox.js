import React from 'react'
import { Nav, NavItem } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Mailbox = () => {
  return (
    <div>
      <Nav className='sidebar d-md-block bg-dark'>
        <NavItem>
            <NavLink to='/compose'>Compose</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to='/compose'>Inbox</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to='/sentmail'>SentBox</NavLink>
        </NavItem>
      </Nav>
    </div>
  )
}

export default Mailbox