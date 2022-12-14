import React from 'react';
import './MyPage.css';

type progressInfo = {
  value: number;
};
const TotalProgressBar = ({ value }: progressInfo) => {
  console.log(value);
  return (
    <div>
      <div className="progress-bar">
        <div className="value">
          <div style={{ color: 'green', width: value + 3 + '%' }}>
            <img className="w-20 h-20 float-right text-center" src="./src/assets/profile.png" alt="profile" />
          </div>
        </div>
        <div className="bar">
          <div style={{ backgroundColor: 'green', width: value + '%' }}></div>
          <div style={{ backgroundColor: '#d3d3d3', width: 100 - value + '%' }}></div>
        </div>
      </div>
    </div>
  );
};
export default TotalProgressBar;
