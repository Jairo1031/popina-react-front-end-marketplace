import React from 'react'
import { Link } from 'react-router-dom'
import { HomeIcon, BuildingStorefrontIcon, UserIcon, UsersIcon } from '@heroicons/react/24/solid'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <Link to="/" className="flex items-center py-4 px-2">
              <span className="font-semibold text-gray-500 text-lg">Restaurant Marketplace</span>
            </Link>
          </div>
          <div className="flex items-center space-x-1">
            <Link to="/" className="py-4 px-2 text-gray-500 hover:text-green-500 transition duration-300">
              <HomeIcon className="h-6 w-6" />
            </Link>
            <Link to="/listings" className="py-4 px-2 text-gray-500 hover:text-green-500 transition duration-300">
              <BuildingStorefrontIcon className="h-6 w-6" />
            </Link>
            <Link to="/seller" className="py-4 px-2 text-gray-500 hover:text-green-500 transition duration-300">
              <UserIcon className="h-6 w-6" />
            </Link>
            <Link to="/broker" className="py-4 px-2 text-gray-500 hover:text-green-500 transition duration-300">
              <UsersIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
