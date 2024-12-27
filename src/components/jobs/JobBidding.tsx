import React from 'react';
import { DollarSign, Clock } from 'lucide-react';

type Bid = {
  id: string;
  freelancer: {
    name: string;
    avatar: string;
    rating: number;
  };
  amount: string;
  duration: string;
  proposal: string;
};

const demoBids: Bid[] = [
  {
    id: '1',
    freelancer: {
      name: 'Alice Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      rating: 4.8,
    },
    amount: '$1500',
    duration: '4 weeks',
    proposal: 'I have extensive experience with similar projects...',
  },
];

export function JobBidding() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">Project Bids</h3>
      
      <div className="space-y-6">
        {demoBids.map((bid) => (
          <div key={bid.id} className="border-b pb-6 last:border-b-0 last:pb-0">
            <div className="flex items-start gap-4">
              <img
                src={bid.freelancer.avatar}
                alt={bid.freelancer.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">{bid.freelancer.name}</h4>
                    <div className="flex items-center mt-1">
                      <span className="text-yellow-400">★</span>
                      <span className="ml-1 text-sm text-gray-600">
                        {bid.freelancer.rating}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-gray-600">
                      <DollarSign className="h-4 w-4" />
                      <span>{bid.amount}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mt-1">
                      <Clock className="h-4 w-4" />
                      <span className="ml-1 text-sm">{bid.duration}</span>
                    </div>
                  </div>
                </div>
                <p className="mt-2 text-gray-600">{bid.proposal}</p>
                <div className="mt-4 flex gap-2">
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                    Accept Bid
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50">
                    Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}