import React, { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { routes_list } from '../../routes/routesList'

interface IParentComponentProps {
  children: ReactNode
  path: string
}
const Button: React.FC<IParentComponentProps> = ({ children, path }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive, isPending }) =>
        `p-2 ${
          isActive
            ? 'bg-additional-color text-gray-100 rounded-3xl'
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
