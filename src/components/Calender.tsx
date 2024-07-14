import * as React from "react";
import moment from "moment";
import "./styles.css";

const Calender = () => {
  const monthMap = new Map([
    [1, "January"],
    [2, "February"],
    [3, "March"],
    [4, "April"],
    [5, "May"],
    [6, "June"],
    [7, "July"],
    [8, "August"],
    [9, "September"],
    [10, "October"],
    [11, "November"],
    [12, "December"],
  ]);
  const daysMap = new Map([
    [0, "Sun"],
    [1, "Mon"],
    [2, "Tue"],
    [3, "Wed"],
    [4, "Thu"],
    [5, "Fri"],
    [6, "Sat"],
  ]);
  const [currentYear, setCurrentYear] = React.useState(moment().year());
  const [currentMonth, setCurrentMonth] = React.useState(moment().month()+1);
  const [prevMonth, setPrevMonth] = React.useState(currentMonth - 1);
  const [nextMonth, setNextMonth] = React.useState(currentMonth + 1);

  const [currentDate, setCurrentDate] = React.useState(moment().date());

  const numberOfDaysInMonth = (year: number, month: number) => {
    return moment()
      .year(year)
      .month(month - 1)
      .daysInMonth();
  };

  const dayOfDate = (year: number, month: number, date: number) => {
    return moment()
      .year(year)
      .month(month - 1)
      .date(date)
      .day();
  };

  const prevMonthTotaldates = numberOfDaysInMonth(
    prevMonth === 12 ? currentYear - 1 : currentYear,
    prevMonth
  );

  const dates = Array.from(
    { length: numberOfDaysInMonth(currentYear, currentMonth) },
    (_, i) => i + 1
  );

  const extraPreviousMonthDate = dayOfDate(currentYear, currentMonth, 1);
  let copyPrevMOnthDates = prevMonthTotaldates;
  for (let i = 1; i <= extraPreviousMonthDate; i++) {
    dates.unshift(copyPrevMOnthDates--);
  }

  const extraNextMonthDate =
    7 -
    (dayOfDate(
      currentYear,
      currentMonth,
      numberOfDaysInMonth(currentYear, currentMonth)
    ) +
      1);

  for (let i = 1; i <= extraNextMonthDate; i++) {
    dates.push(i);
  }
  const handlePrevBtn = () => {
    setCurrentMonth(prevMonth);
    if (currentMonth === 1 && prevMonth === 12) {
      setCurrentYear((prev) => prev - 1);
    }
    if (prevMonth === 1) {
      setPrevMonth(12);
    } else {
      setPrevMonth((prev) => prev - 1);
    }
    if (currentMonth === 12) setNextMonth(12);
    else setNextMonth((prev) => prev - 1);
  };

  const handleNextBtn = () => {
    setCurrentMonth(nextMonth);

    if (currentMonth === 12 && nextMonth === 1) {
      setCurrentYear((prev) => prev + 1);
    }
    if (nextMonth === 12) {
      setNextMonth(1);
    } else {
      setNextMonth((prev) => prev + 1);
    }
    if (currentMonth === 1) setPrevMonth(1);
    else setPrevMonth((prev) => prev + 1);
  };

  const handleToday = () => {
    setCurrentYear(moment().year());
    setCurrentMonth(moment().month() + 1);
    setCurrentDate(moment().date());
    setPrevMonth(moment().month());
    setNextMonth(moment().month() + 2);
  };

  const days = Array.from({ length: 7 }, (_, i) => i);

  return (
    <div className="container">
      <div className="calenderHeader">
        <h4>{`${monthMap.get(currentMonth)} ${currentYear}`} </h4>
        <div>
          <button className="todayBtn" onClick={handleToday}>
            today
          </button>
          <button onClick={handlePrevBtn}>{`<`}</button>
          <button onClick={handleNextBtn}>{">"}</button>
        </div>
      </div>
      <div className="mainCalender">
        <div className="cellContainer">
          {days.map((day) => (
            <div className="cellHeader">{daysMap.get(day)}</div>
          ))}
        </div>
        <div className="cellContainer">
          {dates.map((date, index, arr) =>
            date === currentDate &&
            currentYear === moment().year() &&
            currentMonth === moment().month() + 1 ? (
              <div className=" cell">
                <span className="currentDateCell"> {date}</span>
              </div>
            ) : (
              <div
                className={`cell ${
                  index < extraPreviousMonthDate ||
                  index >= arr.length - extraNextMonthDate
                    ? "deamCell"
                    : ""
                }`}
              >
                <span>{date}</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Calender;
