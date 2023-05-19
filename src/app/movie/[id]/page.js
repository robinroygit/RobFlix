import Image from "next/image";
import React from "react";

const page = async ({ params }) => {
  const id = params.id;

  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "197786d157msh266fd5b655cdaedp12872djsn784ced5bbd7c",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const mainData = data[0].details;

  return (
    <>
      <div className=" relative flex w-screen h-screen border border-black overflow-hidden">
        <div className=" w-full h-full bg-black/50 blur-md">
          <Image
            src={mainData.backgroundImage.url}
            width={1000}
            height={1000}
            alt={mainData.title}
            className="w-full h-full object-cover flex flex-col justify-center items-center top-0 left-0 right-0 bottom-0 opacity-50"
          />
        </div>

        <div className=" absolute sm:top-10 sm:left-10 m-8 flex flex-col">
        <h2 className="text-4xl py-4 font-bold bg-black/50 w-max px-8  text-white">
            Netflix \ <span className="text-red-500">{mainData.type}</span>{" "}
          </h2>
          <div className="card-section flex flex-col justify-center ">
            <div className="b">
              <Image
                src={mainData.backgroundImage.url}
                alt={mainData.title}
                width={700}
                height={600}
                className="z-50"
              />
            </div>
            <div className="info space-y-4 z-50 font-bold flex flex-col bg-black/50 p-4 my-12 py-10">
              <h2 className="text-4xl capitalize text-white">{mainData.title}</h2>
              <p className="text-lg text-gray-200">{mainData.synopsis}</p>
            </div>
          </div>

        </div>

      </div>
    </>
  );
};

export default page;
