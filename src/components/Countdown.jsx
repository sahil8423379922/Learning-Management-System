import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  // Set the target date and time for the event
  const targetDate = new Date("2024-4-19 T23:59:59");

  // Calculate the initial time remaining
  const calculateTimeRemaining = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    } else {
      // Event has already passed
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining);

  useEffect(() => {
    // Update time remaining every second
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining);
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const formatTime = (value) => (value < 10 ? `0${value}` : value);

  return (
    <div>
      {timeRemaining.days > 0 && (
        <p>
          {`${formatTime(timeRemaining.days)}d : ${formatTime(
            timeRemaining.hours
          )}h : ${formatTime(timeRemaining.minutes)}m : ${formatTime(
            timeRemaining.seconds
          )}s`}
        </p>
      )}
      {timeRemaining.days === 0 &&
        timeRemaining.hours === 0 &&
        timeRemaining.seconds === 0 &&
        timeRemaining.minutes === 0 && <p>Event has already passed!</p>}
    </div>
  );
};

export default CountdownTimer;
