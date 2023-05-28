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
        <section className="bg-black 
        laptop:px-[6.5vw] 
        laptop:py-[9vh] 
        laptop:flex 
        laptop:gap-1 
        laptop:max-w-screen
        handphone:max-tablet:px-[10px] 
        handphone:max-tablet:py-[10px] 
        handphone:max-tablet:gap-1
        handphone:max-tablet:grid
        handphone:max-tablet:w-[100vw]
        handphone:max-tablet:justify-center
        handphone:max-tablet:text-center
        tablet:max-laptop:grid
        tablet:max-laptop:px-[50px]
        tablet:max-laptop:py-[50px]
        tablet:max-laptop:justify-center
        tablet:max-laptop:items-center 
        tablet:max-laptop:text-center">
          <div className="basis-1/2 text-white pr-[170px]
          handphone:max-tablet:grid 
          handphone:max-tablet:grid-rows-2 
          handphone:max-tablet:pr-[0]
          handphone:max-tablet:items-center
          tablet:max-laptop:grid
          tablet:max-laptop:items-center
          tablet:max-laptop:justify-center
          tablet:max-laptop:pr-[0]
          laptop:basis-1/2
          laptop:pr-[0]">
            <p className="text-title pb-[20px] font-700
          handphone:max-tablet:text-mid handphone:max-tablet:pb-[10px] 
          handphone:max-tablet:">RAZ</p>
            <p className="handphone:max-tablet:text-small handphone:max-tablet:">Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo.</p>
            <div className="flex gap-5 mt-[40px]
          handphone:max-tablet:gap-2 
          handphone:max-tablet:mt-[0]
          handphone:max-tablet:justify-center 
          tablet:max-laptop:justify-center">
              <div class="h-10 w-10 rounded-full border my-[10px] 
          handphone:max-tablet:w-[30px] handphone:max-tablet:h-[30px]"><img className="pl-[12px] pt-[5px] cursor-pointer 
          handphone:max-tablet:w-[30px] handphone:max-tablet:pt-[3px] handphone:max-tablet:pl-[8px] handphone:max-tablet:cursor-pointer
          handphone:max-tablet:pr-[8px]" src={fb} alt="" /></div>
              <div class="h-10 w-10 rounded-full border my-[10px] 
          handphone:max-tablet:w-[30px] handphone:max-tablet:h-[30px]"><img className="pl-[7px] pt-[8px] cursor-pointer
          handphone:max-tablet:w-[30px] handphone:max-tablet:pt-[6px] handphone:max-tablet:pl-[3px] handphone:max-tablet:cursor-pointer
          handphone:max-tablet:pr-[3px]" src={twit} alt="" /></div>
              <div class="h-10 w-10 rounded-full border my-[10px] 
          handphone:max-tablet:w-[30px] handphone:max-tablet:h-[30px]"><img className="pl-[7px] pt-[10px] cursor-pointer
          handphone:max-tablet:w-[30px] handphone:max-tablet:pt-[8px] handphone:max-tablet:pl-[7px] handphone:max-tablet:cursor-pointer
          handphone:max-tablet:pr-[7px] " src={yt} alt="" /></div>
              <div class="h-10 w-10 rounded-full border my-[10px] 
          handphone:max-tablet:w-[30px] handphone:max-tablet:h-[30px]"><img className="pl-[7px] pt-[7px] cursor-pointer
          handphone:max-tablet:w-[30px] handphone:max-tablet:pt-[5px] handphone:max-tablet:pl-[5px] handphone:max-tablet:cursor-pointer
          handphone:max-tablet:pr-[5px]" src={dribble} alt="" /></div>
            </div>
          </div>
          <div className="flex gap-10 
          handphone:max-tablet:gap-10 
          handphone:max-tablet:mt-[5vh] 
          handphone:max-tablet:mb-[3vh]
          handphone:max-tablet:justify-center
          handphone:max-tablet:flex
          handphone:max-tablet:flex-wrap
          tablet:max-laptop:flex
          tablet:max-laptop:flex-wrap
          tablet:max-laptop:justify-center
          tablet:max-laptop:mt-[5vh]
          tablet:max-laptop:mb-[3vh]
          laptop:grid 
          laptop:grid-cols-3">
              <div className="flex-initial text-white pl-[50px] pr-[5vw]
              handphone:max-tablet:flex-initial w-60 
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
              handphone:max-tablet:flex-initial w-60  
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
              handphone:max-tablet:flex-initial w-60
              handphone:max-tablet:justify-center
              laptop:flex-initial w-52
              laptop:justify-center">
                  <p className="pb-[20px] font-700">CONTACT US</p>
                  <ul className="grid gap-1">
                    <li className="flex gap-3"><div class="h-10 w-10 rounded-full border my-[25px]">
                      <img className="pl-[7px] pt-[8px] cursor-pointer 
                      handphone:max-tablet:cursor-pointer" src={email} alt="" /></div><p className="py-[30px] px-[7px]">info@la-studioweb.com</p></li>
                    <li className="flex gap-3"><div class="h-10 w-10 rounded-full border my-[25px]">
                      <img className="pl-[7px] pt-[8px] cursor-pointer 
                      handphone:max-tablet:cursor-pointer" src={phone} alt="" /></div><p className="py-[30px] px-[7px]">+44.954.954.86</p></li>
                    <li className="flex gap-3"><div class="h-10 w-10 rounded-full border my-[25px]">
                      <img className="pl-[7px] pt-[7px] cursor-pointer 
                      handphone:max-tablet:cursor-pointer" src={clock} alt="" /></div><p className="py-[20px] px-[7px]">9:00am - 19:00pm <br></br> Monday - Sunday</p></li>
                  </ul>
              </div>
          </div>
        </section>
      </>
    )
  }
}

export default Footer;