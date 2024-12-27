import React from 'react';
import { DollarSign, Clock, Briefcase } from 'lucide-react';

export function JobPostForm() {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Post a New Job</h2>
      
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Job Title</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-lg border border-gray-300 py-2 px-4 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="e.g., Senior React Developer"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Job Description</label>
          <textarea
            rows={4}
            className="mt-1 block w-full rounded-lg border border-gray-300 py-2 px-4 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Describe the project requirements..."
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Budget Range</label>
            <div className="mt-1 relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                className="pl-10 block w-full rounded-lg border border-gray-300 py-2 px-4 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="e.g., $1000-2000"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Duration</label>
            <div className="mt-1 relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                className="pl-10 block w-full rounded-lg border border-gray-300 py-2 px-4 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="e.g., 2 weeks"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Required Skills</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-lg border border-gray-300 py-2 px-4 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="e.g., React, Node.js, TypeScript"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Project Type</label>
          <div className="mt-1 relative">
            <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <select className="pl-10 block w-full rounded-lg border border-gray-300 py-2 px-4 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
              <option>Fixed Price</option>
              <option>Hourly Rate</option>
              <option>Long Term</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
        >
          Post Job
        </button>
      </form>
    </div>
  );
}