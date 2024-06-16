import moment from "moment";
import { useState, useEffect } from "react";

function Forcast({ forecastCard }) {
  const [days, setDays] = useState("7");
  //console.log(forecastCard.forecast);

  let [forecastData, setForecastData] = useState(
    forecastCard.forecast.slice(1, 7)
  );

  useEffect(() => {
    if (days === "10") {
      setForecastData(forecastCard.forecast.slice(1, 10));
    } else if (days === "14") {
      setForecastData(forecastCard.forecast.slice(1, 14));
    } else {
      setForecastData(forecastCard.forecast.slice(1, 7));
    }
  }, [days, forecastCard.forecast]);
  const valueDate = {
    seven: "7",
    ten: "10",
    fourteen: "14",
  };

  const setDaysHandle = (e) => {
    setDays(e.target.value);
  };

  return (
    <>
      <div className="   h-96   w-full lg:w-3/5 rounded-2xl  ">
        <div className="h-16 w-full rounded-2xl capitalize flex flex-row justify-between items-center">
          <div className="">forecast</div>
          <div className="bg_user_background  rounded-3xl px-2 py-1">
            <select
              className="  bg-inherit    outline-none"
              value={days}
              onChange={setDaysHandle}
            >
              <option
                className="bg-neutral-900 font-sans"
                value={valueDate.seven}
              >
                7 Days
              </option>
              <option
                className="bg-neutral-900 font-sans"
                value={valueDate.ten}
              >
                10 Days
              </option>
              <option
                className="bg-neutral-900 font-sans"
                value={valueDate.fourteen}
              >
                14 Days
              </option>
            </select>
          </div>
        </div>

        <div className="   bg_user_background  h-80 w-full rounded-2xl  ">
          <div
            className="    h-full w-full rounded-2xl flex flex-col px-2 py-3 overflow-y-auto   scroll-hidden scroll-bar-none overscroll-auto"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              scrollbarColor: "transparent transparent",
            }}
          >
            {forecastData.map((item, key) => (
              <div className="flex justify-around items-center gap-1" key={key}>
                <div className=" w-1/6 px-1 py-2">
                  <img
                    src={item.value.day.condition.icon}
                    alt=""
                    className="w-10 h-10"
                  />
                </div>
                <div className="flex flex-row justify-start items-baseline   w-2/5   py-2 mr-1">
                  <span className="text-md">
                    {" "}
                    {item.value.day.max_temp.value}
                    °/{""}
                  </span>
                  <span className="text-xs text-neutral-50 opacity-80">
                    {""}
                    {item.value.day.min_temp.value}
                    {"° "}
                  </span>
                  <span className="text-xs text-neutral-50 opacity-80 ">
                    {" "}
                    {item.value.day.min_temp.unit}{" "}
                  </span>
                </div>
                <div className="w-1/5  text-xs text-neutral-50 opacity-80 truncate px-1   py-2">
                  {" "}
                  {moment(item.value.date).format("MMM Do")}
                </div>
                <div className="w-1/5  text-xs text-neutral-50 opacity-80 truncate px-1 py-2">
                  {" "}
                  {moment(item.value.date).format("dddd")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Forcast;
