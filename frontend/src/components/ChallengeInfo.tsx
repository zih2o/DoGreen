import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
// import 'react-calendar-heatmap/dist/styles.css';
import './MyPage.css';

const ChallengeInfo = () => {
  return (
    <div className="mt-24 mb-24">
      <h2 className="text-3xl pl-20 mb-10 font-bold">참여하고 있는 챌린지</h2>
      <div className="challenge_wrapper flex items-center justify-around h-64 mx-20 bg-green-50">
        <h2 className="text-3xl text-center font-bold">플라스틱 줄이기 챌린지</h2>
        <h2 className="text-2xl  font-bold">
          참여율 <br></br>55%
        </h2>
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
