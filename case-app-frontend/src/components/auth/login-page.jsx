import React from 'react'
import Link from 'next/link'

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-8 sm:gap-16 sm:p-20 font-sans bg-gray-50">
  <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
    <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Advocate Diary</h1>
    <p className="text-gray-600 text-center mb-6">Login to your Diary</p>
    
    <div className="space-y-4">
      <label className="block">
        <span className="text-gray-700">Phone No</span>
        <input 
          type="text" 
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
          placeholder="Enter Phone Number" 
        />
      </label>
      
      <label className="block">
        <span className="text-gray-700">Password</span>
        <input 
          type="password" 
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
          placeholder="Enter password" 
        />
      </label>
    </div>
    
    <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out">
      Login
    </button>
    
    <p className="mt-4 text-center text-gray-600">
      Want to register a diary?{' '}
      <Link href="/registration" className="text-blue-600 hover:text-blue-800 hover:underline">
        Register
      </Link>
    </p>
  </div>
</div>
  )
}

export default LoginPage