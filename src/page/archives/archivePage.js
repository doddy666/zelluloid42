import React from 'react';
import './archivePage.css';

const archiveData = [

  {
    title: 'September 2024',
    imageUrl: '/images/PDome3.jpg',
  },
  {
    title: 'August 2024',
    imageUrl: '/images/PDome2.jpg',
  },
  {
    title: 'July 2024',
    imageUrl: '/images/PDome1.jpg',
  },
];

const ArchivePage = () => {
  return (
    <div className="archive-container">
      {archiveData.map((item, index) => (
        <div key={index} className="archive-item">
          <img src={item.imageUrl} alt={item.title} className="archive-image" />
          <h3 className="archive-title">{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default ArchivePage;
