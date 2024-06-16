import { useState } from "react";
function WeatherCondition({ weatherData }) {
  //console.log(weatherData);
  const valueCalender = {
    now: "now",
    twelve: "12",
    twentyfour: "24",
  };

  const handleCalenderChange = (e) => {
    setCalender(e.target.value);
  };

  const [calendar, setCalender] = useState(valueCalender.now);

  return (
    <>
      <div className="    h-96  w-full  rounded-2xl   ">
        <div className="h-16 w-full rounded-2xl flex flex-row justify-between items-center">
          <h1>Weather Condition</h1>
          <div className="bg_user_background  rounded-3xl px-2 py-1">
            <select
              className=" bg-inherit    outline-none"
              value={calendar}
              onChange={handleCalenderChange}
            >
              <option
                className="bg-neutral-900 font-sans"
                value={valueCalender.now}
              >
                Now
              </option>
              <option
                className="bg-neutral-900 font-sans"
                value={valueCalender.twelve}
              >
                12 hr
              </option>
              <option
                className="bg-neutral-900 font-sans"
                value={valueCalender.twentyfour}
              >
                24 hr
              </option>
            </select>
          </div>
        </div>
        {/* {dropDown && (
          <div
            className={
              "block absolute top-14 right-5 bg-neutral-900 rounded-xl text-sm px-2 mx-1 py-2"
            }
          >
            <select value={calendar} onChange={handleCalenderChange}>
              <option value={valueCalender.now}>now</option>
              <option value={valueCalender.twelve}>12 hr</option>
              <option value={valueCalender.twentyfour}>24 hr</option>
            </select>
          </div>
        )} */}

        <div className="    bg_user_background h-80 w-full rounded-2xl  ">
          <iframe
            width="100%"
            height="100%"
            title="windyMaps"
            className="rounded-2xl"
            src={`https://embed.windy.com/embed2.html?lat=${weatherData.lat}&lon=${weatherData.lon}&detailLat=${weatherData.lat}&detailLon=${weatherData.lon}&zoom=7&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=true&calendar=${calendar}&pressure=true&type=map&location=coordinates&detail=&metricWind=${weatherData.speed}&metricTemp=${weatherData.temp}&radarRange=-1`}
            frameBorder="0"
          ></iframe>
        </div>
      </div>
      <div className="my-7 lg:hidden"></div>
    </>
  );
}

//<iframe width="650" height="450" src="https://embed.windy.com/embed2.html?lat=15.391&lon=73.820&detailLat=15.391&detailLon=73.820&width=650&height=450&zoom=6&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=true&calendar=now&pressure=true&type=map&location=coordinates&detail=&metricWind=default&metricTemp=%C2%B0C&radarRange=-1" frameborder="0"></iframe>
//<iframe width="650" height="450" src="https://embed.windy.com/embed2.html?lat=15.391&lon=73.820&detailLat=15.391&detailLon=73.820&width=650&height=450&zoom=6&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=true&calendar=now&pressure=true&type=map&location=coordinates&detail=&metricWind=default&metricTemp=%C2%B0F&radarRange=-1" frameborder="0"></iframe>
//<iframe width="650" height="450" src="https://embed.windy.com/embed2.html?lat=15.391&lon=73.820&detailLat=15.391&detailLon=73.820&width=650&height=450&zoom=6&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=true&calendar=now&pressure=true&type=map&location=coordinates&detail=&metricWind=km%2Fh&metricTemp=%C2%B0F&radarRange=-1" frameborder="0"></iframe>
//<iframe width="650" height="450" src="https://embed.windy.com/embed2.html?lat=15.391&lon=73.820&detailLat=15.391&detailLon=73.820&width=650&height=450&zoom=6&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=true&calendar=now&pressure=true&type=map&location=coordinates&detail=&metricWind=mph&metricTemp=%C2%B0F&radarRange=-1" frameborder="0"></iframe>
//<iframe width="650" height="450" src="https://embed.windy.com/embed2.html?lat=15.391&lon=73.820&detailLat=15.391&detailLon=73.820&width=650&height=450&zoom=6&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=true&{calendar=24}&pressure=true&type=map&location=coordinates&detail=&metricWind=mph&metricTemp=%C2%B0F&radarRange=-1" frameborder="0"></iframe>
export default WeatherCondition;
