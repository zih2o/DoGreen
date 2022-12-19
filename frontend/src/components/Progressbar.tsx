import React from 'react';
import { ImageType, ProgressbarType } from './common/theme';
interface IProgressInfo {
  value: number;
}
const TotalProgressBar = ({ value }: IProgressInfo) => {
  return (
    <div className={ProgressbarType.wrapper}>
      <div style={{ width: value + 3 + '%' }}>
        <img className={ImageType.progressbarImg} src="/src/assets/profile.png" alt="profile" />
      </div>
      <div className={ProgressbarType.filledbar} style={{ width: value + '%' }}></div>
      <div className={ProgressbarType.unfilledbar} style={{ width: 100 - value + '%' }}></div>
    </div>
  );
};
export default TotalProgressBar;
