import React from 'react';

const mapData = {
  car: {
    title: 'Impact Analysis: Car Route',
    points: [
      'Directions API plots a 5km route.',
      'Live Traffic Layer shows heavy congestion (red areas).',
      'Places API highlights 15 fast-food restaurants.',
      'Conclusion: High stress, poor air quality, potential for impulse spending.'
    ]
  },
  bicycle: {
    title: 'Impact Analysis: Bicycle Route',
    points: [
      'Directions API (Bicycling Mode) plots a 7km route.',
      'Bicycling Layer highlights dedicated bike lanes.',
      'Map Polygons outline the green park area.',
      'Conclusion: Physical exercise, improved well-being, financial savings.'
    ]
  }
}

export default function GoogleMapsPlaceholder({ type }) {
  const data = mapData[type];
  if (!data) return null;

  return (
    <div className="mt-4 p-4 border-2 border-dashed border-cyan-500 rounded-lg bg-slate-900 text-left animate-fade-in">
      <h3 className="font-bold text-lg text-cyan-400">[Google Maps API Visualization]</h3>
      <p className="font-semibold text-white mt-2">{data.title}</p>
      <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
        {data.points.map((point, index) => <li key={index}>{point}</li>)}
      </ul>
    </div>
  )
}