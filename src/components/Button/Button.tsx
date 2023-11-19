import React, { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

interface IParentComponentProps {
  children: ReactNode
  path: string
}
const Button: React.FC<IParentComponentProps> = ({ children, path }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive, isPending }) =>
        `flex items-center justify-center p-2 ${
          isActive
            ? 'rounded-3xl bg-additional-color text-gray-100'
            : isPending
              ? 'pending'
              : 'text-gray-500'
        }`
      }
    >
      {children}
    </NavLink>
  )
}

export default Button
