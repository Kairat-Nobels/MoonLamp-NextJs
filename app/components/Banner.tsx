"use client";
import { useEffect, useState } from "react";
import SuccessMessage from './UI/SuccessMessage/SuccessMessage';

const Banner = () => {
  const [data, setData] = useState('')
  const [error, setError] = useState(false)
  const [mess, setMess] = useState(false)

  const subscribeHandler = () => {
    const emailReg = /^[a-zA-Z0-9_.-]+[A-Za-z0-9]+@[a-z]+\.(com|ru)$/;
    if (emailReg.test(data) && (data.length > 0)) {
      setError(false)
      setMess(true)
      setData('')
    }
    else {
      setError(true)
    }
  }
  useEffect(() => {
    if (!mess) document.body.style.overflow = ''
  }, [mess])
  return (
    <div className="flex items-center justify-center h-96 bg-fixed bg-parallax bg-cover flex-col">
      <h1 className="text-4xl font-bold text-white uppercase text-center drop-shadow-2xl">
        {" "}
        SUBSCRIBE TO OUR NEWSLETTER
      </h1>
      <div className="bg-white py-2 px-4 flex items-center justify-between border border-gray-200 rounded-[10px] mb-[49px] mt-10 w-[89%] m-auto max-w-[500px]">
        <input value={data} onChange={e => setData(e.target.value)} className="outline-none ml-5 w-[200px] md:w-[400px]" type="email" placeholder="Enter you mail .." />
        <div>
          <button onClick={subscribeHandler} className="flex items-center py-[5px] px-[10px] md:py-[10px] md:px-[26px] rounded-[8px] font-semibold text-md md:text-lg text-white bg-[#778da9]  w-fit gap-5">
            Subscribe
          </button>
        </div>
      </div>
      {
        error && <p className="text-red-600 py-2 px-4 rounded-[15px] bg-gray-200">Not valid email</p>
      }
      {
        mess && <SuccessMessage setClose={setMess} />
      }
    </div>
  );
};

export default Banner;
