import React from 'react';

interface IProgressInfo {
  value: number;
}
const TotalProgressBar = ({ value }: IProgressInfo) => {
  return (
    <div className="progressbar_wrapper mt-12 mb-24 px-10 lg:px-20 mx-auto">
      <div className="progress-bar">
        <div className="value">
          <div className="garden1" style={{ width: value + 3 + '%' }}>
            <img className="w-20 h-20 float-right text-center" src="/src/assets/profile.png" alt="profile" />
          </div>
        </div>
        <div className="bar">
          <div className="inline-block h-8 rounded-tl-md rounded-bl-md bg-garden1" style={{ width: value + '%' }}></div>
          <div
            className="inline-block h-8 rounded-tr-md rounded-br-md bg-slate-100"
            style={{ width: 100 - value + '%' }}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default TotalProgressBar;
