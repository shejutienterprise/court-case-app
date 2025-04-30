import Ret from 'react'
import Link from 'next/link'

const registration = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 sm:p-8 font-sans">
  <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-xl shadow-md">
    <div className="text-center mb-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-1">Advocate Diary</h1>
      <p className="text-gray-600">Register Your Diary</p>
    </div>

    <form className="space-y-4">
      <div className="grid gap-4">
        {/* Firm Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Firm Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Enter law firm name"
            required
          />
        </div>

        {/* Lawyer Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Lawyer Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Enter lawyer name"
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            type="tel"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Enter phone number"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Enter email address"
            required
          />
        </div>

        {/* Firm Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Firm Address</label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition min-h-[100px]"
            placeholder="Enter firm address"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            placeholder="Enter password"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 mt-2"
      >
        Register
      </button>
    </form>

    <p className="text-center text-gray-600 mt-4 text-sm">
      Have a diary?{' '}
      <Link 
        href="/" 
        className="text-blue-600 hover:text-blue-800 font-medium hover:underline transition"
      >
        Login
      </Link>
    </p>
  </div>
</div>
  )
}
export default registration;