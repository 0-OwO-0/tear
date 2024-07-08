import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Timer = ({ startDate }) => {
  const [timePassed, setTimePassed] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
    milliseconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const start = new Date(startDate);
      const diff = now - start;

      const milliseconds = Math.floor((diff % 1000) / 10);
      const seconds = Math.floor((diff / 1000) % 60);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      setTimePassed({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
        milliseconds: String(milliseconds).padStart(2, "0"),
      });
    }, 10);

    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-900 text-white">
      <div className="text-center space-y-4">
        <p className="text-violet-400 text-xl font-medium">
          <span className="text-2xl font-bold"> Time passed since</span> I held
          you close
        </p>

        <div className="text-6xl font-bold">
          <span className="text-pink-400">{timePassed.days} days,</span>
          <span className="text-green-400">{timePassed.hours} hours,</span>
          <span className="text-blue-400">{timePassed.minutes} minutes,</span>
          <span className="text-teal-400">{timePassed.seconds} seconds,</span>
          <br />
          <span className="text-purple-400 ml-[1%]">
            {timePassed.milliseconds} milliseconds
          </span>
        </div>
        <br />
        <p className="text-violet-400 text-2xl font-semibold mt-8 text-center leading-relaxed">
          Still, with every passing millisecond, I am loving you{" "}
          <span className="text-red-400  animate-pulse">
            a million times more
          </span>{" "}
          💖
        </p>
      </div>
      <footer className="absolute bottom-0 w-full py-4 bg-slate-800 text-center text-white">
        <p className="text-xl">A lovelope for Ananya from Arnab.</p>
      </footer>
    </div>
  );
};

Timer.propTypes = {
  startDate: PropTypes.string.isRequired,
};

export default Timer;
