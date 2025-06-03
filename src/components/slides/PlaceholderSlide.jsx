import React from 'react';
import Slide from '../Slide';

const PlaceholderSlide = ({ title, content }) => {
  return (
    <Slide className="bg-gray-100">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">{title}</h2>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <p className="text-lg text-gray-600 mb-4">This slide is being refactored.</p>
          <p className="text-sm text-gray-500">
            Original content: {content || 'Complex slide with charts and interactive elements'}
          </p>
        </div>
      </div>
    </Slide>
  );
};

export default PlaceholderSlide; 