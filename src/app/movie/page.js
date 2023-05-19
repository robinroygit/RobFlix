
import { resolve } from "styled-jsx/css";
import MovieCard from "../components/MovieCard";

const Movie = async () => {

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
    <>
      <section className="sm:w-4/5 w-full m-auto bg-black/60 ">
        <h1 className="text-center font-bold sm:mt-20 mt-4 pt-8 text-4xl sm:text-6xl text-white">Movies & Series</h1>
        <div className="grid sm:grid-cols-4 gap-12 mt-12 p-8 ">
      {mainData.map((curElem,index)=>(
        <MovieCard key={curElem.jawSummary.id} {...curElem} />
      ))}
        </div>
      </section>
    </>
  )
}

export default Movie