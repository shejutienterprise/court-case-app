import React from 'react'

const addCase = () => {
  return (
    // Main container
    <div className="flex flex-col items-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-md p-6 sm:p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Add Case Details</h1>
          <p className="mt-2 text-gray-600">Fill in all required case information</p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Case Type */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Case Type*</label>
              <input
                type="text"
                placeholder="E.g., Civil, Criminal, Family"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                required
              />
            </div>

            {/* Case No */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Case No*</label>
              <input
                type="text"
                placeholder="Enter case number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                required
              />
            </div>

            {/* Under Section */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Under Section</label>
              <input
                type="text"
                placeholder="E.g., IPC 420"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            {/* Filing Date */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Filing Date*</label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                required
              />
            </div>

            {/* Plaintiff's Name */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Plaintiff's Name*</label>
              <input
                type="text"
                placeholder="Enter plaintiff's full name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                required
              />
            </div>

            {/* Defendant's Name */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Defendant's Name*</label>
              <input
                type="text"
                placeholder="Enter defendant's full name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                required
              />
            </div>

            {/* File No */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">File No</label>
              <input
                type="text"
                placeholder="Enter file number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            {/* Client's Contact No */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Client's Contact No*</label>
              <input
                type="tel"
                placeholder="Enter phone number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                required
              />
            </div>
          </div>

          {/* Note - Full width */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Case Notes</label>
            <textarea
              placeholder="Enter important case details, observations, or reminders"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition min-h-[120px]"
              rows={4}
            />
          </div>

          {/* Form Actions */}
          <div className="flex justify-center gap-4 pt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200 shadow-sm hover:shadow-md"
            >
              Save Case
            </button>
            <button
              type="button"
              className="px-6 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-lg transition duration-200"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default addCase