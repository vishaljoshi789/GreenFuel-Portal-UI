import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-blue-500"></div>
        <p className="mt-4 text-xl text-gray-600">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
