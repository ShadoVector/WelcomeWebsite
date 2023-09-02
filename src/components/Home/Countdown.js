import React, { useState, useEffect, useRef } from "react";

function Countdown() {
  const refInstance = useRef(null);
  const [counter, setCountdown] = useState("00:00:00:00");

  const getCounter = (e) => {
    let all = Date.parse(e) - Date.parse(new Date());
    let s = Math.floor((all / 1000) % 60);
    let m = Math.floor((all / 1000 / 60) % 60);
    let h = Math.floor((all / 1000 / 60 / 60) % 24);
    let d = Math.floor(all / 1000 / 60 / 60 / 24);
    return {
      all,
      s,
      m,
      h,
      d,
    };
  };

  const startCountdown = (e) => {
    let { all, d, h, m, s } = getCounter(e);
    if (all >= 0) {
      setCountdown(
        (d > 9 ? d : "0" + d) +
          ":" +
          (h > 9 ? h : "0" + h) +
          ":" +
          (m > 9 ? m : "0" + m) +
          ":" +
          (s > 9 ? s : "0" + s)
      );
    } else {
      setCountdown("00:00:00:00");
      clearInterval(refInstance.current);
    }
  };

  const targetDate = new Date("2023-12-31T23:59:59"); // December 31, 2023, at 23:59:59

  useEffect(() => {
    startCountdown(targetDate);
    let id = setInterval(() => {
      startCountdown(targetDate);
    }, 1000);
    refInstance.current = id;
  }, [targetDate]);

  return (
    <>
      <h1 className="text-4xl font-semibold justify-center">{counter}</h1>
      <div className="d-grid"></div>
    </>
  );
}

export default Countdown;
