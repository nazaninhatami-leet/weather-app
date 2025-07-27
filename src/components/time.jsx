import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { appContext } from '../App';

export function Time({}) {
  const { data } = useContext(appContext);

  const [time, setTime] = useState(() => {
    const now = new Date();
    now.setHours(now.getHours() + 1);
    return now;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        const newTime = new Date(prevTime);
        newTime.setSeconds(newTime.getSeconds() + 1);
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div className="time">{data ? time.toLocaleTimeString() : null}</div>;
}
