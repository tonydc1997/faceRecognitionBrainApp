import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputImage' alt='' src={imageUrl} width='300px' height='auto' className="br2"/>
        {
          boxes.map(box => {
            return <div key={box.topRow} className='bounding-box br3' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
          })
        }
      </div>
    </div>
  );
}

export default FaceRecognition;