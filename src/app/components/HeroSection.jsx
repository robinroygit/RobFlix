import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = async ({ title, title2, imageUrl, myVideo }) => {

  const url = process.env.RAPID_KEY;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '197786d157msh266fd5b655cdaedp12872djsn784ced5bbd7c',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };
  const res = await fetch(url,options);
  const data = await res.json();
  const mainData = data.titles;
  return (
    <main className="h-screen bg-radient-to-r  from-indigo-100 via-purple-200 to-pink-200 overflow-hidden ">
      <div className=" w-full h-full relative">
        <video
          src={myVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover absolute flex flex-col justify-center items-center top-0 left-0 right-0 bottom-0 z-0"
        />
        <div className=" grid sm:grid-cols-2 place-content-center h-max bg-radient-to-r from-indigo-100 via-purple-200 to-pink-200  ">

          <div className="left-section  z-10 sm:p-36 p-8 gap-4 sm:gap-8 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-white">
              {title} <br /> {title2}
            </h1>
            <p className="text-sm text-gray-100">
              From award-winning dramas to blockbusters action movies, we have
              got you covered. Browse our selection of the latest and greatest
              movies, And find your new favourite today
            </p>
            <Link href="/movie" className="">
              <button className=" bg-gray-300 border border-gray-700 w-1/2 px-4 py-1 rounded-3xl text-gray-900 hover:bg-gray-900 hover:text-white">
                {" "}
                Explore Movies
              </button>
            </Link>
          </div>

          <div className=" hidden z-10  right-section h-full sm:grid place-content-center items-center ">
            <Image
              src={mainData[6].jawSummary.backgroundImage.url}
              alt=""
              className="bg-center bg-cover rounded-md hover:scale-110 duration-300"
              width={400}
              height={400}
            />
          </div>

          <div className="flex gap-8 p-8 w-screen overflow-x-scroll bg-black/50 snap-x  absolute bottom-0 ">

          {
                mainData.map((curElem,index)=>(
                  <div key={index} className="flex-shrink-0 w-72 h-72 rounded-2xl">
                      <h2 className="text-gray-200  p-2 py-4 z-10 font-bold text-center">{curElem.jawSummary.title}</h2>
            <Link href={`/movie/${curElem.jawSummary.id}`}>

                        <img src={curElem.jawSummary.backgroundImage.url}  className=' object-cover rounded-2xl w-full h-full hover:scale-110 ease-in-out duration-300'  alt={curElem.title} />
            </Link>
                    </div>
            
                ))
            }
          </div>


        </div>
      </div>
    </main>
  );
};

export default HeroSection;
