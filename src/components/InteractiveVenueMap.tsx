'use client';

import React from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

interface InteractiveVenueMapProps {
  svgUrl: string;
}

const InteractiveVenueMap: React.FC<InteractiveVenueMapProps> = ({
  svgUrl,
}) => {
  return (
    <div className="w-full h-[70vh] border border-gray-300 rounded-lg overflow-hidden">
      <TransformWrapper
        initialScale={1}
        initialPositionX={0}
        initialPositionY={0}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <div className="absolute top-2 left-2 z-10 space-x-2">
              <button
                onClick={() => zoomIn()}
                className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-md"
              >
                +
              </button>
              <button
                onClick={() => zoomOut()}
                className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-md"
              >
                -
              </button>
              <button
                onClick={() => resetTransform()}
                className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-md"
              >
                Reset
              </button>
            </div>
            <TransformComponent>
              <img
                src={svgUrl}
                alt="Mapa del Venue"
                className="w-full h-full"
              />
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
};

export default InteractiveVenueMap;
