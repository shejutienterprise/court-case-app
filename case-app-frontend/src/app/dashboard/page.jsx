import React from "react";
import Link from "next/link";
import {
  FilePlus2,
  Folders,
  CalendarDays,
  LucideFilePlus2,
} from "lucide-react";

const dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 p-6 sm:p-12 font-sans">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8 sm:p-12 text-center">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
            Firm Name
          </h1>
          <h3 className="text-xl sm:text-2xl text-blue-600 font-medium">
            Lawyer Name
          </h3>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {/* Add New Case */}
          <Link
            href="/add-case"
            className="group flex flex-col items-center justify-center p-6 rounded-xl bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-200 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <div className="relative">
              <LucideFilePlus2
                size={48}
                className="text-blue-600 group-hover:text-blue-700 transition-colors"
              />
              {/* <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium text-gray-600 mt-2">
            Add new case
          </span> */}
            </div>
            <span className="mt-8 text-lg font-medium text-gray-700">
              Add Case
            </span>
          </Link>

          {/* View Case List */}
          <Link
            href="/case-list"
            className="group flex flex-col items-center justify-center p-6 rounded-xl bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-200 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <div className="relative">
              <Folders
                size={48}
                className="text-blue-600 group-hover:text-blue-700 transition-colors"
              />
              {/* <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium text-gray-600 mt-2">
            View case list
          </span> */}
            </div>
            <span className="mt-8 text-lg font-medium text-gray-700">
              Case List
            </span>
          </Link>

          {/* Upcoming Hearings */}
          <div className="group flex flex-col items-center justify-center p-6 rounded-xl bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-200 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer">
            <div className="relative">
              <CalendarDays
                size={48}
                className="text-blue-600 group-hover:text-blue-700 transition-colors"
              />
              {/* <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium text-gray-600 mt-2">
            Upcoming hearings
          </span> */}
            </div>
            <span className="mt-8 text-lg font-medium text-gray-700">
              Hearings
            </span>
          </div>

          {/* Add assistant */}
        <Link
          href="/add-assistant"
          className="group flex flex-col items-center justify-center p-6 rounded-xl bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-200 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          <div className="relative">
            <Folders
              size={48}
              className="text-blue-600 group-hover:text-blue-700 transition-colors"
            />
            {/* <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium text-gray-600 mt-2">
            View case list
          </span> */}
          </div>
          <span className="mt-8 text-lg font-medium text-gray-700">
            Add Assistant
          </span>
        </Link>

        {/* Add Court */}
        <Link
          href="/case-list"
          className="group flex flex-col items-center justify-center p-6 rounded-xl bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-200 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          <div className="relative">
            <Folders
              size={48}
              className="text-blue-600 group-hover:text-blue-700 transition-colors"
            />
            {/* <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium text-gray-600 mt-2">
            View case list
          </span> */}
          </div>
          <span className="mt-8 text-lg font-medium text-gray-700">
            Add Court
          </span>
        </Link>

        </div>

        

        {/* Additional Content Area (optional) */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <p className="text-gray-500">
            Welcome back to your legal practice dashboard
          </p>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
