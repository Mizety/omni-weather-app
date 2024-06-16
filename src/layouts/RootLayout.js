import { Outlet } from "react-router-dom";

function RootLayout() {
  if (!localStorage["metricSystem"]) {
    //localStorage.setItem("measure_system", JSON.stringify([...new Set()]));
    localStorage.setItem(
      "metricSystem",
      JSON.stringify({ system: "metric", unit: "C" })
    );
  }
  return (
    <>
      <main className="  bg-black bg-opacity-95  text-white  min-h-screen font-mono">
        <div className="       text-white mx-auto py-8 lg:p-10    ">
          <div className=" relative    rounded-md  ">
            <div className="flex justify-between items-baseline px-3 lg:hidden ">
              <h1 className=" font-bold font-mono  pb-5 text-2xl">
                {" "}
                MonSoon Weather App
              </h1>
              <h3 className="text-neutral-400 text-xs text-end">
                Powered by{" "}
                <a
                  href="https://www.weatherapi.com/"
                  title="Free Weather API"
                  className="text-neutral-300 hover:text-neutral-100"
                >
                  WeatherAPI.com
                </a>
              </h3>
            </div>

            <div className="flex flex-col md:flex-row gap-10 relative    mx-2">
              <Outlet />
            </div>
            <div className="absolute hidden lg:block lg:-bottom-10 right-5 text-xs text-neutral-400">
              Powered by{" "}
              <a
                href="https://www.weatherapi.com/"
                title="Free Weather API"
                className="text-neutral-300 hover:text-neutral-100"
              >
                WeatherAPI.com
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default RootLayout;
