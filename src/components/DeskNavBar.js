import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";

function DeskNavBar({ setMetricSystem }) {
  let measure_system_local = JSON.parse(localStorage["metricSystem"]);
  //console.log(measure_system_local.unit);
  // This is a state variable

  const switchSystem = () => {
    console.log("Switch system clicked");

    if (JSON.parse(localStorage["metricSystem"]).system === "metric") {
      // localStorage.setItem("measure_system", ["imperial"]);
      localStorage.setItem(
        "metricSystem",
        JSON.stringify({ system: "imperial", unit: "F" })
      );
      setMetricSystem(JSON.parse(localStorage["metricSystem"]));
    } else {
      // localStorage.setItem("measure_system", ["metric"]);
      localStorage.setItem(
        "metricSystem",
        JSON.stringify({ system: "metric", unit: "C" })
      );
      setMetricSystem(JSON.parse(localStorage["metricSystem"]));
    }
  };
  const specialEasterEgg = () => {
    prompt("Try looking around in console or take a guess?");
    console.log("Not Here! SHUUUH");
  };

  return (
    <nav className="flex flex-col mx-auto justify-around h-full">
      <div className="flex flex-col justify-start mx-auto w-full gap-3    h-full ">
        <Link
          to=".."
          title="Free Weather checking application"
          className="px-1 mt-6 rounded-md    cursor-pointer"
        >
          <img
            className="  rounded-full mx-auto hover:animate-pulse "
            src="/msa_trans.png"
            alt="Weather data by WeatherAPI.com"
            border="0"
          />
        </Link>
        <div className="border-b-2 border-gray-200 mx-2 opacity-50"></div>
        <ul className="flex flex-col justify-center items-center mx-auto w-full  text-white gap-4 text-4xl">
          <li
            className=" flex  py-2 
          justify-center 
          items-center 
          opacity-75 
          rounded-r-xl  
          rounded-l-sm
          hover:opacity-100 
          transition-transform duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
         "
          >
            <Link to="/search">
              {" "}
              <SearchOutlinedIcon fontSize="inherit" />
            </Link>
          </li>

          <li
            className=" flex  py-2 
          justify-center 
          items-center 
          opacity-75 
          rounded-r-xl   cursor-pointer
          rounded-l-sm
          hover:opacity-100 
          transition-transform duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
         "
          >
            {" "}
            <Link to="/">
              {" "}
              <LocationOnOutlinedIcon fontSize="inherit" />
            </Link>
          </li>
          <li
            className=" flex py-2 
          justify-center 
          items-center 
          opacity-75 
          rounded-r-xl  
          rounded-l-sm  cursor-pointer
          hover:animate-spin
          hover:opacity-100 
          
         "
          >
            {" "}
            <SettingsOutlinedIcon
              fontSize="inherit"
              onClick={specialEasterEgg}
            />
          </li>
        </ul>
        <div className="border-b-2 border-gray-200 mx-2 opacity-50"></div>
      </div>
      <div className="self-center py-5 mb-2">
        {" "}
        <div className="bg-neutral-900 hover:animate-pulse  bg-opacity-60 hover:bg-opacity-90 p-3   cursor-pointer   rounded-full  ">
          <button className="font-bold px-2 " onClick={switchSystem}>
            {measure_system_local.unit}
          </button>
        </div>
      </div>
      {/* <div className="  self-center py-5 mb-2  cursor-pointer">
        <img
          className="h-12 w-12 rounded-full"
          src="https://ui-avatars.com/api/?name=M&amp;color=7F9CF5&amp;background=EBF4FF"
          alt=""
        />
      </div> */}
    </nav>
  );
}

export default DeskNavBar;
