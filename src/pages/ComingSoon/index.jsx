import React from "react";
import CountdownTimer from "../../components/Footer/CountdownTimer";
import '../../css/ComingSoon.css';
import fb from '../../assets/footer/facebook-f.svg';
import twit from '../../assets/footer/twitter.svg';
import yt from '../../assets/footer/youtube.svg';
import dribble from '../../assets/footer/dribble.svg';

function ComingSoon() {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <>
      <section className="bg-black w-full h-full pb-[16px]">
        <p className="text-6xl text-white pt-[100px] pl-[140px] pr-[676px] pb-[100px]">We’re Building Something New</p>
        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
        <div className="flex">
          <p className="text-white pl-[140px] pt-[50px]">Your Email</p>
          <p className="text-white pl-[350px] pt-[50px]">Subscribe</p>
        </div>
        <div className='border-b-2 border-solid border-white w-[500px] pt-[15px] ml-[140px] mb-[50px]'></div>
        <div className="flex text-white gap-24 pl-[140px]">
          <div className="flex max-w-[650px] gap-3">
            <p className="text-5xl">RAZ</p>
            <p>Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo.</p>
          </div>
          <div className="flex gap-5 pl-[100px]">
            <div class="h-10 w-10 rounded-full border my-[10px]"><img className="pl-[12px] pt-[5px]" src={fb} alt="" /></div>
            <div class="h-10 w-10 rounded-full border my-[10px]"><img className="pl-[7px] pt-[8px]" src={twit} alt="" /></div>
            <div class="h-10 w-10 rounded-full border my-[10px]"><img className="pl-[7px] pt-[10px]" src={yt} alt="" /></div>
            <div class="h-10 w-10 rounded-full border my-[10px]"><img className="pl-[7px] pt-[7px]" src={dribble} alt="" /></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ComingSoon;
