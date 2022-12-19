import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

const ChallengeInfo = () => {
  return (
    <div className="w-full mt-12 mb-24">
      <h2 className="text-2xl lg:text-3xl px-10 lg:px-20 mb-10 font-bold">나의 Do Green</h2>
      <div className="challenge_wrapper max-w-6xl flex px-5 items-center justify-around h-64 mx-10 lg:mx-20 bg-garden4/80">
        <div className="flex-col w-96 justify-evenly items-center">
          <h2 className="text-2xl text-center text-white leading-10 font-bold">나의 활동 기록</h2>
          <h2 className="text-xl text-center text-white font-bold">상위 60%</h2>
        </div>
        <div className="show_status flex items-center mt-8 w-96 ">
          <CalendarHeatmap
            startDate={new Date('2022-09-01')}
            endDate={new Date('2022-12-31')}
            values={[
              { date: '2022-09-10', count: 4 },
              { date: '2022-10-22', count: 2 },
              { date: '2022-12-01', count: 3 },
              { date: '2022-12-02', count: 1 },
              { date: '2022-12-03', count: 2 },
              { date: '2022-11-01', count: 2 },
              { date: '2022-11-21', count: 1 },
              { date: '2022-10-11', count: 4 },
              { date: '2022-10-12', count: 3 },
            ]}
            showWeekdayLabels={true}
            classForValue={(value) => {
              if (!value) {
                return 'color-empty';
              }
              return `color-github-${value.count}`;
            }}
            // titleForValue={(value) => {
            //   console.log(value);
            //   if (!value) {
            //     return;
            //   } else {
            //     console.log(`Date is ${value.date}`);
            //   }
            // }}
            // onMouseOver={(value) => {
            //   if (!value) {
            //     return;
            //   } else {
            //     console.log(`Date is ${value.date}`);
            //   }
            // }}
            tooltipDataAttrs={(value: any) => {
              const d1 = new Date(value.date);
              if (value) {
                return {
                  'data-tip': `${d1.toISOString().slice(0, 10)} has count: ${value.count}`,
                };
              }
            }}
            onClick={(value) => {
              if (value) alert(`참여하신 날짜는 ${value.date} 입니다`);
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default ChallengeInfo;
