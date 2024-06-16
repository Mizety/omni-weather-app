import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";

function MobNavBar({ setMetricSystem }) {
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
    <nav className="fixed left-1/2 -translate-x-1/2 bottom-5 flex flex-row justify-around items-center    lg:hidden   w-4/5 bg_user_background opacity-90 border border-gray-600 rounded-2xl">
      <div className="flex flex-row justify-center items-center    gap-2 w-full ">
        <div className="    mx-2 opacity-50"></div>
        <ul className="flex   flex-row justify-center items-center mx-auto w-full  text-white gap-4 text-4xl">
          <li
            className=" flex px-2   py-1
            justify-center 
            items-center 
            opacity-75 
            rounded-t-xl  
            rounded-b-sm  cursor-pointer
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
            className=" flex px-2  py-1
            justify-center 
            items-center 
            opacity-75 
            rounded-t-xl  
            rounded-b-sm  cursor-pointer
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
            className=" flex px-2  py-1
          justify-center 
          items-center 
          opacity-75 
          rounded-t-xl  
          rounded-b-sm  cursor-pointer
          hover:opacity-100
          hover:animate-spin
         
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
      <div className="self-center   py-3  pr-5">
        {" "}
        <div className="bg-neutral-900 hover:animate-pulse  bg-opacity-60 hover:bg-opacity-90 p-3  cursor-pointer   rounded-full  ">
          <button className="font-bold px-2 " onClick={switchSystem}>
            {measure_system_local.unit}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default MobNavBar;
