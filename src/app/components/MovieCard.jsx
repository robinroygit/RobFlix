import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const MovieCard = (curElem) => {
    const {id,type,title,synopsis} = curElem.jawSummary;
  return (
    <>
        <div className="card border border-black grid place-items-center gap-2 p-4 rounded-lg bg-slate-50/20">
            <div className="card-image w-full h-full">
            <Link href={`/movie/${id}`}>
                <Image src={curElem.jawSummary.backgroundImage.url} alt=" " width={450} height={400} className='aspect-video' />
            </Link>
            </div>

            <div className='card-data flex flex-col gap-4 '>
                <h2 className='text-xl capitalize text-white font-bold '>{title.substring(0,18)}</h2>
                <p className='text-sm text-gray-300'>{`${synopsis.substring(0,66)}...`}</p>

                <Link href={`/movie/${id}`} className=' border w-3/4 text-center border-black rounded-2xl py-1 px-4 bg-gray-800 text-white'>
                    <button>Read More </button>
                </Link>

            </div>
        </div>
    </>
  )
}

export default MovieCard