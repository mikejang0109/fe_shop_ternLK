import React, { Component } from "react";
import fb from '../../assets/footer/facebook-f.svg';
import twit from '../../assets/footer/twitter.svg';
import yt from '../../assets/footer/youtube.svg';
import dribble from '../../assets/footer/dribble.svg';
import email from '../../assets/footer/letter.svg';
import phone from '../../assets/footer/phone-call.svg';
import clock from '../../assets/footer/clock.svg';

class Footer extends Component {
  render() {
    return (
      <>
      <div className="overflow-hidden">
        <section className="bg-black 
        handphone:px-[10px] 
        handphone:py-[10px] 
        handphone:gap-1
        handphone:grid
        handphone:w-[100vw]
        handphone:justify-center
        handphone:text-center
        tablet:grid
        tablet:px-[50px]
        tablet:py-[50px]
        tablet:justify-center
        tablet:items-center 
        tablet:text-center
        laptop:px-[6.5vw] 
        laptop:py-[9vh] 
        laptop:flex 
        laptop:gap-1 
        laptop:max-w-screen">
          <div className="basis-1/2 text-white pr-[170px]
          handphone:grid 
          handphone:grid-rows-2 
          handphone:pr-[0]
          handphone:items-center
          tablet:grid
          tablet:items-center
          tablet:justify-center
          tablet:pr-[0]
          laptop:basis-1/2
          laptop:pr-[0]">
            <p className="text-title pb-[20px] font-700
          handphone:text-mid handphone:pb-[10px] 
          handphone:">RAZ</p>
            <p className="handphone:text-small handphone:">Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo.</p>
            <div className="flex gap-5 mt-[40px]
          handphone:gap-2 
          handphone:mt-[0]
          handphone:justify-center 
          tablet:justify-center">
              <div className="h-10 w-10 rounded-full border my-[10px] 
          handphone:w-[30px] handphone:h-[30px]"><img className="pl-[12px] pt-[5px] cursor-pointer 
          handphone:w-[30px] handphone:pt-[3px] handphone:pl-[8px] handphone:cursor-pointer
          handphone:pr-[8px]" src={fb} alt="" /></div>
              <div className="h-10 w-10 rounded-full border my-[10px] 
          handphone:w-[30px] handphone:h-[30px]"><img className="pl-[7px] pt-[8px] cursor-pointer
          handphone:w-[30px] handphone:pt-[6px] handphone:pl-[3px] handphone:cursor-pointer
          handphone:pr-[3px]" src={twit} alt="" /></div>
              <div className="h-10 w-10 rounded-full border my-[10px] 
          handphone:w-[30px] handphone:h-[30px]"><img className="pl-[7px] pt-[10px] cursor-pointer
          handphone:w-[30px] handphone:pt-[8px] handphone:pl-[7px] handphone:cursor-pointer
          handphone:pr-[7px] " src={yt} alt="" /></div>
              <div className="h-10 w-10 rounded-full border my-[10px] 
          handphone:w-[30px] handphone:h-[30px]"><img className="pl-[7px] pt-[7px] cursor-pointer
          handphone:w-[30px] handphone:pt-[5px] handphone:pl-[5px] handphone:cursor-pointer
          handphone:pr-[5px]" src={dribble} alt="" /></div>
            </div>
          </div>
          <div className="flex gap-10 
          handphone:gap-10 
          handphone:mt-[5vh] 
          handphone:mb-[3vh]
          handphone:justify-center
          handphone:flex
          handphone:flex-wrap
          tablet:flex
          tablet:flex-wrap
          tablet:justify-center
          tablet:mt-[5vh]
          tablet:mb-[3vh]
          laptop:grid 
          laptop:grid-cols-3">
              <div className="flex-initial text-white
              handphone:flex-initial w-60 
              laptop:flex-initial w-52">
                <p className="pb-[20px] font-700">COMPANY</p>
                <ul className="grid gap-5">
                  <li>ABOUT US</li>
                  <li>HELP CENTER</li>
                  <li>LICENSES</li>
                  <li>MARKET API</li>
                  <li>SITE MAP</li>
                </ul>
              </div>
              <div className="flex-initial text-white
              handphone:flex-initial w-60  
              laptop:flex-initial w-52">
                <p className="pb-[20px] font-700">USERFUL</p>
                <ul className="grid gap-5">
                  <li>THE COLLECTIONS</li>
                  <li>SIZE GUIDE</li>
                  <li>LOOKBOOK</li>
                  <li>INSTAGRAM SHOP</li>
                </ul>
              </div>
              <div className="flex-initial text-white
              handphone:flex-initial w-60
              handphone:justify-center
              laptop:flex-initial w-52">
                  <p className="pb-[20px] font-700">CONTACT US</p>
                  <ul className="grid gap-1">
                    <li className="flex gap-3"><div class="h-10 w-10 rounded-full border my-[25px]">
                      <img className="pl-[7px] pt-[8px] cursor-pointer 
                      handphone:cursor-pointer" src={email} alt="" /></div><p className="py-[30px] px-[7px]">info@la-studioweb.com</p></li>
                    <li className="flex gap-3"><div class="h-10 w-10 rounded-full border my-[25px]">
                      <img className="pl-[7px] pt-[8px] cursor-pointer 
                      handphone:cursor-pointer" src={phone} alt="" /></div><p className="py-[30px] px-[7px]">+44.954.954.86</p></li>
                    <li className="flex gap-3"><div class="h-10 w-10 rounded-full border my-[25px]">
                      <img className="pl-[7px] pt-[7px] cursor-pointer 
                      handphone:cursor-pointer" src={clock} alt="" /></div><p className="py-[20px] px-[7px]">9:00am - 19:00pm <br></br> Monday - Sunday</p></li>
                  </ul>
              </div>
          </div>
        </section>
        </div>
      </>
    )
  }
}

export default Footer;