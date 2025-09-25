import React from 'react';
import { Star, Mail, User } from 'lucide-react';

const FeedbackList = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="text-center py-12">
        <User className="w-12 h-12 text-gray-300 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          No feedback available
        </h3>
        <p className="text-gray-500">
          Feedback will appear here once submitted.
        </p>
      </div>
    );
  }

  const renderStars = (rating) => (
    <div className="flex items-center space-x-1 mt-1">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
        />
      ))}
      <span className="ml-2 text-sm text-gray-700">{rating}/5</span>
    </div>
  );

  return (
    <div className="space-y-4">
      {data.map((feedback) => (
        <div
          key={feedback.id}
          className="flex flex-col md:flex-row overflow-hidden justify-between bg-white border border-gray-200 rounded-lg shadow-sm p-4 hover:shadow-md transition"
        >
          {/* Left Side: Name, Email, Rating */}
          <div className="flex flex-col space-y-1 md:w-1/3">
            <div className="text-sm font-semibold text-gray-900 flex items-center space-x-2">
              <User className="w-5 h-5 text-indigo-600" />
              <span>{feedback.userName}</span>
            </div>
            <div className="text-xs text-gray-500 flex items-center space-x-1">
              <Mail className="w-3 h-3" />
              <span>{feedback.userEmail}</span>
            </div>
            {renderStars(feedback.rating)}
          </div>

          {/* Right Side: Feedback Message */}
          <div className="mt-3 md:mt-0 md:w-2/3 overflow-hidden text-gray-800 text-sm text-wrap">
            <p>{feedback.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedbackList;
