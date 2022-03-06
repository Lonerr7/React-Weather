import { useEffect, useState } from 'react';

const CurrentTime = (props) => {
  let [currentTime, serCurrentTime] = useState(
    new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      serCurrentTime(
        new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [currentTime]);

  return <p className={props.classItem}>Время: {currentTime}</p>;
};

export default CurrentTime;
