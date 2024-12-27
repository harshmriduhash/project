import React from 'react';
import { Clock, DollarSign, MapPin } from 'lucide-react';

const jobs = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "TechCorp AI",
    location: "Remote",
    salary: "$80-120k",
    type: "Contract",
    description: "Looking for an experienced developer to build AI-powered features...",
    skills: ["React", "Node.js", "Python", "AI/ML"],
    postedAt: "2 hours ago"
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Innovation Labs",
    location: "Remote",
    salary: "$60-90k",
    type: "Full-time",
    description: "Join our team to create beautiful and responsive web applications...",
    skills: ["React", "TypeScript", "Tailwind"],
    postedAt: "5 hours ago"
  },
];

export function FeaturedJobs() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Featured Opportunities</h2>
          <p className="mt-4 text-xl text-gray-600">Discover top projects matched to your skills</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                    <p className="text-gray-600 mt-1">{job.company}</p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    {job.type}
                  </span>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-gray-500">
                    <DollarSign className="h-4 w-4 mr-2" />
                    {job.salary}
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    {job.postedAt}
                  </div>
                </div>

                <p className="mt-4 text-gray-600 line-clamp-2">{job.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <button className="w-full bg-indigo-50 text-indigo-600 py-2 px-4 rounded-md hover:bg-indigo-100 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}