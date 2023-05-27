import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { UseCountDown } from '../../hooks/UseCountdown';

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div id='countdwn' className="counter text-white flex flex-row font-bold text-2xl tablet:pt-[0px] laptop:pt-[0px] pt-[5vw] items-center pr-[5vw] no-underline gap-[3px]">
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
        <p className='pb-[20px] px-[10px] tablet:pb-[40px] laptop:pb-[60px] '>:</p>
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        <p className='pb-[20px] px-[10px] tablet:pb-[40px] laptop:pb-[60px] '>:</p>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <p className='pb-[20px] px-[10px] tablet:pb-[40px] laptop:pb-[60px] '>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false}/>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = UseCountDown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
