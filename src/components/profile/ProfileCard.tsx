import React from 'react';
import { Star, MapPin, Link as LinkIcon } from 'lucide-react';

type ProfileCardProps = {
  name: string;
  title: string;
  rating: number;
  location: string;
  hourlyRate: string;
  skills: string[];
  bio: string;
  avatar: string;
};

export function ProfileCard({
  name,
  title,
  rating,
  location,
  hourlyRate,
  skills,
  bio,
  avatar,
}: ProfileCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-start gap-4">
          <img
            src={avatar}
            alt={name}
            className="w-20 h-20 rounded-full object-cover"
          />
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
            <p className="text-gray-600">{title}</p>
            <div className="flex items-center mt-2">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="ml-1 text-gray-600">{rating.toFixed(1)}</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-gray-900">{hourlyRate}</p>
            <p className="text-sm text-gray-500">per hour</p>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-2" />
            {location}
          </div>
        </div>

        <p className="mt-4 text-gray-600">{bio}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-2">
          <button className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700">
            Contact
          </button>
          <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
}