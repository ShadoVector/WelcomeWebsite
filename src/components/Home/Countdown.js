import React, { useState, useEffect, useRef, reset} from "react";

function Countdown() {
  const refInstance = useRef(null);
  const [counter, setCountdown] = useState("00:00:00:00"); // Added days

  const getCounter = (e) => {
    let all = Date.parse(e) - Date.parse(new Date());
    let s = Math.floor((all / 1000) % 60);
    let m = Math.floor((all / 1000 / 60) % 60);
    let h = Math.floor((all / 1000 / 60 / 60) % 24);
    let d = Math.floor(all / 1000 / 60 / 60 / 24); // Calculate days
    return {
      all,
      s,
      m,
      h,
      d,
    };
  };

  const initCounter = (e) => {
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

  const reset = (e) => {
    setCountdown("00:00:00:00"); // Reset to include days
    if (refInstance.current) clearInterval(refInstance.current);
    let id = setInterval(() => {
      initCounter(e);
    }, 1000);
    refInstance.current = id;
  };

  const voidTime = () => {
    let voidZone = new Date();
    voidZone.setMonth(6); // Corrected the setMonth method
    voidZone.setHours(0, 0, 0, 0); // Set time to midnight
    return voidZone;
  };

  useEffect(() => {
    reset(voidTime());
  }, [voidTime]);

  return (
    <>
      <h1 className="text-4xl font-semibold justify-center">{counter}</h1>
      <div className="d-grid"></div>
    </>
  );
}

export default Countdown;
