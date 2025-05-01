'use client'
import React from "react";

const addAssistant = () => {
  // Form state would be managed here in a real implementation
  // const [formData, setFormData] = useState({...});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Card Container */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-blue-600 p-6 text-center">
            <h1 className="text-2xl font-bold text-white">Add New Assistant</h1>
            <p className="text-blue-100 mt-1">
              Register your legal assistant details
            </p>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            {/* Assistant Name Field */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              />
            </div>

            {/* Contact Information Group */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Phone Number Field */}
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    id="phone"
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    placeholder="9876543210"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 pl-12"
                  />
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    +91
                  </span>
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                />
              </div>
            </div>

            {/* Role Field */}
            <div className="space-y-2">
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700"
              >
                Role/Position
              </label>
              <select
                id="role"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 bg-white"
              >
                <option value="">Select a role</option>
                <option value="senior">Senior Associate</option>
                <option value="junior">Junior Associate</option>
                <option value="paralegal">Paralegal</option>
                <option value="clerk">Law Clerk</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Additional Notes */}
            <div className="space-y-2">
              <label
                htmlFor="notes"
                className="block text-sm font-medium text-gray-700"
              >
                Additional Notes
              </label>
              <textarea
                id="notes"
                rows={3}
                placeholder="Any special responsibilities or details..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              />
            </div>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
              <button
                type="button"
                className="px-6 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm hover:shadow-md transition duration-200"
              >
                Save Assistant
              </button>
            </div>
          </form>
        </div>

        {/* Form Footer */}
        <p className="text-center text-gray-500 text-sm mt-6">
          All fields marked with <span className="text-red-500">*</span> are
          required
        </p>
      </div>
    </div>
  );
};

export default addAssistant;
