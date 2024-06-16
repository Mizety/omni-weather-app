function HighLights({ highLight, astro }) {
  astro = astro.astro || {};
  return (
    <>
      <div className=" p-4 mt-1 ">
        <div> Today's HighLights</div>
        <div className="flex flex-col gap-4  ">
          <div className="grid grid-cols-2 md:grid-cols-3 justify-evenly    mt-2 gap-1 md:gap-3">
            <div className="w-full h-52 bg-black rounded-2xl p-2 bg-opacity-60">
              <div className="flex flex-col mt-2">
                <div className="text-xs capitalize font-bold ml-2">
                  {" "}
                  wind Status
                </div>
                <div className=" flex justify-center items-center text-4xl rounded-md h-24 w-full  mt-2">
                  <div className="  flex justify-center items-center rounded-full p-4 px-8 bg-black hover:animate-pulse  bg-opacity-20 hover:bg-opacity-40   ">
                    {" "}
                    {highLight.wind_dir}
                  </div>
                </div>
                <div className="flex flex-col py-3   justify-between items-end">
                  <div className="flex flex-row  items-baseline self-center gap-1">
                    <p className="text-md lg:text-2xl  ">
                      {highLight.wind_speed.value}
                    </p>
                    <p className="text-xs text-neutral-400 ">
                      {"  "}
                      {highLight.wind_speed.unit}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 ">
                      {highLight.localtime}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-52 bg-black  bg-opacity-60 rounded-2xl p-2">
              <div className="flex flex-col mt-2">
                <div className="text-xs capitalize font-bold ml-2">
                  {" "}
                  UV Index
                </div>
                <div className="  rounded-md h-24 w-full  mt-2  flex justify-center items-center">
                  <img
                    className="h-20 w-20"
                    src="https://imgur.com/WB0zpql.png"
                    alt=""
                  />
                </div>
                <div className="flex flex-col py-3   justify-between items-end">
                  <div className="flex flex-row  items-baseline self-center gap-1">
                    <p className="text-md lg:text-2xl  ">
                      {highLight.uv}
                      <small className="text-xs text-neutral-400 uppercase">
                        {" "}
                        {"uv"}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full hidden   md:h-52 bg-black  bg-opacity-60  rounded-2xl p-3 md:flex flex-col justify-center items-center gap-2">
              <div className="flex   flex-col  bg-black  bg-opacity-40  rounded-2xl   h-1/2 w-full py-2 px-3">
                <div className="p-2">
                  <div className="text-xs capitalize font-bold truncate">
                    {" "}
                    sunrise & sunset
                  </div>
                  <div className=" ">
                    <div
                      className="flex flex-row py-3 text-xs  justify-between   text-neutral-400 select-none capitalize overflow-scroll
                  "
                    >
                      <div>
                        <div className="text-gray-100 text-xs truncate">
                          sunrise
                        </div>
                        <div className="text-xs truncate"> {astro.sunrise}</div>
                      </div>
                      <div className="">
                        <div className="text-gray-100 text-xs  ml-2 truncate">
                          sunset
                        </div>
                        <div className="text-xs  ml-2 truncate">
                          {" "}
                          {astro.sunset}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="  bg-black bg-opacity-40  rounded-2xl    h-1/2 w-full py-2 px-3">
                <div className="p-2  flex   flex-col  align-middle ">
                  <div className="text-xs capitalize font-bold truncate">
                    {" "}
                    moonrise & moonset
                  </div>

                  <div className=" ">
                    <div className="flex flex-row py-3 text-xs  justify-between   text-neutral-400 overflow-scroll select-none capitalize">
                      <div>
                        <div className="text-gray-100 text-xs truncate">
                          moonrise
                        </div>
                        <div className="text-xs truncate">
                          {" "}
                          {astro.moonrise}
                        </div>
                      </div>
                      <div className="">
                        <div className="text-gray-100 text-xs ml-2 truncate">
                          moonset
                        </div>
                        <div className="truncate  ml-2 text-xs">
                          {" "}
                          {astro.moonset}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full  h-40  md:h-52 bg-black  bg-opacity-60  rounded-2xl p-3 flex md:hidden flex-col justify-center items-center gap-2">
              <div className="flex   flex-col     rounded-2xl   h-full justify-between w-full p-3 ">
                <div className="text-xs capitalize font-bold overflow-scroll">
                  {" "}
                  Sunrise & SunSet
                </div>
                <div className=" ">
                  <div
                    className="flex flex-row py-3 text-xs  justify-between   text-neutral-400 select-none capitalize overflow-scroll
                  "
                  >
                    <div>
                      <div className="text-gray-100 text-xs truncate">
                        Sunrise
                      </div>
                      <div className="text-xs truncate"> {astro.sunrise}</div>
                    </div>
                    <div className="">
                      <div className="text-gray-100 text-xs  ml-2 truncate">
                        Sunset
                      </div>
                      <div className="text-xs  ml-2 truncate">
                        {" "}
                        {astro.sunset}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full  h-40  md:h-52 bg-black  bg-opacity-60  rounded-2xl p-3 flex md:hidden flex-col justify-center items-center gap-2">
              <div className="flex   flex-col     rounded-2xl   h-full justify-between w-full p-3   ">
                <div className="text-xs capitalize font-bold overflow-scroll">
                  {" "}
                  Moonrise & Moonset
                </div>
                <div className=" ">
                  <div
                    className="flex flex-row py-3 text-xs  justify-between   text-neutral-400 select-none capitalize overflow-scroll
                  "
                  >
                    <div>
                      <div className="text-gray-100 text-xs truncate">
                        Moonrise
                      </div>
                      <div className="text-xs truncate"> {astro.moonrise}</div>
                    </div>
                    <div className="">
                      <div className="text-gray-100 text-xs  ml-2 truncate">
                        Moonset
                      </div>
                      <div className="text-xs  ml-2 truncate">
                        {" "}
                        {astro.moonset}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1 md:gap-3">
            <div className="w-full h-20 bg-black  bg-opacity-60 rounded-2xl p-2 flex ">
              <div className=" flex flex-col justify-center px-2">
                <p className="text-xs text-neutral-200">Humidity</p>
                <p className="text-md lg:text-2xl">
                  {highLight.humidity}
                  <small className="text-xs text-neutral-400">%</small>
                </p>
              </div>
            </div>
            <div className="w-full h-20 bg-black  bg-opacity-60 rounded-2xl p-2 flex ">
              <div className=" flex flex-col justify-center px-2">
                <p className="text-xs text-neutral-200 capitalize">feelslike</p>
                <p className="text-md lg:text-2xl">
                  {highLight.feelslike.value}°
                  <small className="text-md text-neutral-400">
                    {""}
                    {highLight.feelslike.unit}
                  </small>
                </p>
              </div>
            </div>
            <div className="w-full h-20 bg-black  bg-opacity-60 rounded-2xl p-2 flex ">
              <div className=" flex flex-col justify-center px-2">
                <p className="text-xs text-neutral-200 capitalize">
                  Visibility
                </p>
                <p className="text-md lg:text-2xl">
                  {highLight.visibility.value}
                  <small className="text-xs text-neutral-400 capitalize">
                    {" "}
                    {highLight.visibility.unit}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HighLights;
