import { useLoaderData } from "react-router-dom";
import WeatherCard from "../components/WeatherCard";
import HighLights from "../components/HightLights";
import Forcast from "../components/Forcast";
import WeatherCondition from "../components/WeatherCondition";
import { useEffect, useState } from "react";
import moment from "moment";
import MobNavBar from "../components/MobNavBar";

import DeskNavBar from "../components/DeskNavBar";
function Dashboard() {
  const { location, current, forecast } = useLoaderData();
  //console.log(location);

  const [metricSystem, setMetricSystem] = useState(
    JSON.parse(localStorage["metricSystem"])
  );

  const [weatherCard, setWeatherCard] = useState({
    location: location.name + ", " + location.region + ", " + location.country,
    temp: metricSystem.unit === "c" ? current.temp_c : current.temp_f,
    condition: current.condition.text,
    icon: current.condition.icon,
    unit: metricSystem.unit,
    type: metricSystem.system,
    localtime: location.localtime,
  });
  const unit = {
    speed_imperial: "mph",
    speed_metric: "km%2Fh",
    temp_imperial: "%C2%B0F",
    temp_metric: "%C2%B0C",
  };
  const [weatherCondition, setWeatherConditon] = useState({
    speed:
      metricSystem.system === "metric"
        ? unit.speed_metric
        : unit.speed_imperial,
    temp:
      metricSystem.system === "metric" ? unit.temp_metric : unit.temp_imperial,
    lat: location.lat,
    lon: location.lon,
    location: {
      name: location.name,
      region: location.region,
      country: location.country,
    },
  });

  const [forecastCard, setForecastCard] = useState({
    forecast: forecast.forecastday.map((data) => {
      return {
        value: {
          date: data.date,
          day: {
            max_temp:
              metricSystem.system === "metric"
                ? { value: data.day.maxtemp_c, unit: "C" }
                : { value: data.day.maxtemp_f, unit: "F" },

            min_temp:
              metricSystem.system === "metric"
                ? { value: data.day.mintemp_c, unit: "C" }
                : { value: data.day.mintemp_f, unit: "F" },
            avg_temp:
              metricSystem.system === "metric"
                ? { value: data.day.avgtemp_c, unit: "C" }
                : { value: data.day.avgtemp_f, unit: "F" },

            condition: {
              text: data.day.condition.text,
              icon: data.day.condition.icon,
            },
          },
        },
      };
    }),
  });
  //  console.log(forecastCard);

  const [highLight, setHighLight] = useState({
    feelslike:
      metricSystem.system === "metric"
        ? { value: current.feelslike_c, unit: "C" }
        : { value: current.feelslike_f, unit: "F" },

    is_day: current.is_day,
    humidity: current.humidity,
    uv: current.uv,
    visibility:
      metricSystem.system === "metric"
        ? { value: current.vis_km, unit: "kms" }
        : { value: current.vis_miles, unit: "miles" },
    wind_speed:
      metricSystem.system === "metric"
        ? { value: current.wind_kph, unit: "Km/h" }
        : { value: current.wind_mph, unit: "Miles/h" },

    localtime: moment(location.localtime).format("LT"),
    wind_dir: current.wind_dir,
    pressure_mb:
      metricSystem.system === "metric"
        ? { value: current.pressure_in, unit: "In" }
        : { value: current.pressure_mb, unit: "Mb" },
    precip_in:
      metricSystem.system === "metric"
        ? { value: current.precip_in, unit: "In" }
        : { value: current.precip_mm, unit: "Mb" },
  });

  useEffect(() => {
    setWeatherCard({
      location:
        location.name + ", " + location.region + ", " + location.country,
      temp: metricSystem.unit === "C" ? current.temp_c : current.temp_f,
      condition: current.condition.text,
      icon: current.condition.icon,
      unit: metricSystem.unit,
      type: metricSystem.system,

      localtime: location.localtime,
    });

    setHighLight({
      feelslike:
        metricSystem.system === "metric"
          ? { value: current.feelslike_c, unit: "C" }
          : { value: current.feelslike_f, unit: "F" },

      is_day: current.is_day,
      humidity: current.humidity,
      uv: current.uv,
      visibility:
        metricSystem.system === "metric"
          ? { value: current.vis_km, unit: "kms" }
          : { value: current.vis_miles, unit: "miles" },
      wind_speed:
        metricSystem.system === "metric"
          ? { value: current.wind_kph, unit: "Km/h" }
          : { value: current.wind_mph, unit: "Miles/h" },

      localtime: moment(location.localtime).format("LT"),
      wind_dir: current.wind_dir,
      pressure_mb:
        metricSystem.system === "metric"
          ? { value: current.pressure_in, unit: "In" }
          : { value: current.pressure_mb, unit: "Mb" },
      precip_in:
        metricSystem.system === "metric"
          ? { value: current.precip_in, unit: "In" }
          : { value: current.precip_mm, unit: "Mb" },
    });

    setForecastCard({
      forecast: forecast.forecastday.map((data) => {
        return {
          value: {
            date: data.date,
            day: {
              max_temp:
                metricSystem.system === "metric"
                  ? { value: data.day.maxtemp_c, unit: "C" }
                  : { value: data.day.maxtemp_f, unit: "F" },

              min_temp:
                metricSystem.system === "metric"
                  ? { value: data.day.mintemp_c, unit: "C" }
                  : { value: data.day.mintemp_f, unit: "F" },
              avg_temp:
                metricSystem.system === "metric"
                  ? { value: data.day.avgtemp_c, unit: "C" }
                  : { value: data.day.avgtemp_f, unit: "F" },

              condition: {
                text: data.day.condition.text,
                icon: data.day.condition.icon,
              },
            },
          },
        };
      }),
    });

    setWeatherConditon({
      speed:
        metricSystem.system === "metric"
          ? unit.speed_metric
          : unit.speed_imperial,
      temp:
        metricSystem.system === "metric"
          ? unit.temp_metric
          : unit.temp_imperial,
      lat: location.lat,
      lon: location.lon,
      location: {
        name: location.name,
        region: location.region,
        country: location.country,
      },
    });
  }, [
    current.condition.icon,
    current.condition.text,
    current.feelslike_c,
    current.feelslike_f,
    current.humidity,
    current.is_day,
    current.precip_in,
    current.precip_mm,
    current.pressure_in,
    current.pressure_mb,
    current.temp_c,
    current.temp_f,
    current.uv,
    current.vis_km,
    current.vis_miles,
    current.wind_dir,
    current.wind_kph,
    current.wind_mph,
    forecast.forecastday,
    location.country,
    location.lat,
    location.localtime,
    location.lon,
    location.name,
    location.region,
    metricSystem,
    unit.speed_imperial,
    unit.speed_metric,
    unit.temp_imperial,
    unit.temp_metric,
  ]);
  const [astro, setAstro] = useState({
    is_moon_up: 0,
    is_sun_up: 0,
    moon_illumination: "27",
    moon_phase: "Waxing Crescent",
    moonrise: "10:12 AM",
    moonset: "11:37 PM",
    sunrise: "08:48 AM",
    sunset: "05:27 PM",
  });
  useEffect(() => {
    async function getData() {
      const astro = `https://api.weatherapi.com/v1/astronomy.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${location.name},${location.region},${location.country}`;

      const resAstro = await fetch(astro);
      if (!resAstro.ok) {
        const message = `An error occured: ${resAstro.status} while fetching data from api`;
        throw new Error(message);
      }
      const resAstrobody = await resAstro.json();
      setAstro(resAstrobody.astronomy);
    }
    getData();
  }, [location.country, location.name, location.region]);

  // console.log(weatherCard);

  return (
    <>
      {/* DeskNavBar */}

      <div className="lg:w-20  hidden lg:block     rounded-2xl bg_user_background select-none">
        <DeskNavBar setMetricSystem={setMetricSystem} />
      </div>
      {/* Main web Content */}
      <div
        className="w-full     rounded-2xl relative     "
        style={{ minHeight: "49.25rem" }}
      >
        <MobNavBar setMetricSystem={setMetricSystem} />

        <div className="grid  grid-flow-row gap-5 mx-auto  select-none">
          <div className="min-h-96 w-full">
            <div className="flex flex-col lg:flex-row gap-4  ">
              <div className="bg_user_background h-96  w-full lg:w-3/5 rounded-2xl  ">
                <div className="    h-full w-full rounded-2xl  ">
                  <WeatherCard weatherCardData={weatherCard} />
                </div>
              </div>
              <div className="   bg_user_background md:h-96  w-full  rounded-2xl  ">
                <div className="    h-full w-full rounded-2xl  ">
                  <HighLights highLight={highLight} astro={astro} />
                </div>
              </div>
            </div>
          </div>
          <div className="min-h-96 w-full">
            <div className="flex flex-col lg:flex-row gap-4  ">
              <Forcast forecastCard={forecastCard} />
              <WeatherCondition weatherData={weatherCondition} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

export async function loader({ params }) {
  let location = params.query;
  let url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${location}&days=14`;
  if (location === undefined) {
    function getPosition() {
      // Simple wrapper
      return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(res, rej);
      }).catch((err) => {
        console.log(err);
        throw new Error(
          "Code Error: " +
            err.code +
            " : " +
            err.message +
            " \n Please Enable your location!!"
        );
      });
    }
    location = await getPosition();

    url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${location.coords.latitude},${location.coords.longitude}&days=14`;
  }

  const res = await fetch(url);
  if (!res.ok) {
    const message = `An error occured: ${res.status} while fetching data from api`;
    throw new Error(message);
  }

  const resbody = res.json();
  return resbody;

  //console.log(res);
}
