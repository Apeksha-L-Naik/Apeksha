import React, { useState, useEffect } from 'react';

const CountDownTimer = ({ timeDifference }) => {
  const [timeRemaining, setTimeRemaining] = useState(timeDifference);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(intervalId);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeDifference]);

  const formatTime = (time) => {
    const formattedTime = time < 10 ? `0${time}` : time;
    return formattedTime;
  };

  const days = Math.floor(timeRemaining / (24 * 60 * 60));
  const hours = days<1?Math.floor(timeRemaining/3600):Math.floor((timeRemaining % (24 * 60 * 60)) / (60 * 60));
  const minutes = days<1?Math.floor(hours*60):Math.floor((timeRemaining % (60 * 60)) / 60);
  const seconds = timeRemaining%60;

  return (
    <div className='con'>
      {days<1&&(
        <div>{formatTime(minutes)}min:{formatTime(seconds)}sec</div>
      )}
      {days>=1&&(
        <div>{formatTime(days)} Days:{formatTime(hours)}hr:{formatTime(minutes)}min:{formatTime(seconds)}sec</div>
      )}
    </div>
  );
};

export default CountDownTimer;