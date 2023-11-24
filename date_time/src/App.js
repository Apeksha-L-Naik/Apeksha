import React, { useState } from 'react';
import './App.css'
import CountdownTimer from './CountDownTimer';

const App = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [timeDifference, setTimeDifference] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const startTime = new Date(startDate).getTime();
    const endTime = new Date(endDate).getTime();

    if ((!startTime) || (!endTime) || startTime >= endTime) {
      alert('Please enter valid start and end dates.');
    } else {
      const differenceInSeconds = Math.floor((endTime - startTime) / 1000);
      setTimeDifference(differenceInSeconds);
    }
    
    }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <label>
          <h3>Start Date:</h3>
          <input type="datetime-local" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </label>
        <br />
        <label>
          <h3>End Date:</h3>
          <input type="datetime-local" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </label>
        <br />
        <br/>
        <button type="submit">Submit</button>
      </form>
      {timeDifference > 0 && <CountdownTimer timeDifference={timeDifference} />}
    </div>
  );
};

export default App;
