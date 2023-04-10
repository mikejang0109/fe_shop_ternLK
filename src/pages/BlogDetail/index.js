import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Title from "../../components/Title";
import Iphone from "../../assets/img/Iphone.png";
import Windows from "../../assets/img/windows.png";
import Messes from "../../assets/img/messes.png";
import Modern from "../../assets/img/modern.png";
import Banner from "../../assets/img/banner.png";
import Hero from "../../assets/img/big-image.png";
import Clock from "../../assets/icons/clock.svg";
import Tag from "../../assets/icons/tag.svg";
import Mask from "../../assets/img/Mask.png";
import Share from "../../assets/icons/share_post.svg";
import face from "../../assets/avatars/5.png";
import face2 from "../../assets/avatars/6.png";
import face3 from "../../assets/avatars/7.png";
import face4 from "../../assets/avatars/8.png";
import bedroom from "../../assets/img/bedroom.png";
import sofa from "../../assets/img/brown-sofa.png";
import slider from "../../assets/icons/slider-btn.png";

const BlogDetail = () => {
  return (
    <>
      <Header />
      <Title
        isBreadcrumbs={true}
        breadcrumbs="Blog"
        breadcrumbs2="Blog Detail"
        title="How to open interion shop?"
        description="Read and enjoy content from us"
      />
      <section className="flex h-full">
        <section className="flex-[1] ml-20 mt-20">
          <input
            className="border border-solid border-[#C8C8C8] p-2 w-full"
            type="search"
            placeholder="Search..."
          />
          <p className="font-arimo font-bold text-2xl text-primary-black mt-10">
            Categories
          </p>
          <div className="flex">
            <div className="mt-10">
              <p className="font-arimo text-xs font-normal mt-10">Furniture</p>
              <p className="font-arimo text-xs font-normal mt-10">Interior</p>
              <p className="font-arimo text-xs font-normal mt-10">
                Real Estate
              </p>
              <p className="font-arimo text-xs font-normal mt-10">
                Construction
              </p>
              <p className="font-arimo text-xs font-normal mt-10">Business</p>
              <p className="font-arimo text-xs font-normal mt-10">Industrial</p>
              <p className="font-arimo text-xs font-normal mt-10">Furniture</p>
            </div>
            <div className="mt-10">
              <p className="font-arimo text-xs font-normal ml-44 mt-10">3</p>
              <p className="font-arimo text-xs font-normal ml-44 mt-10">4</p>
              <p className="font-arimo text-xs font-normal ml-44 mt-10">5</p>
              <p className="font-arimo text-xs font-normal ml-44 mt-10">8</p>
              <p className="font-arimo text-xs font-normal ml-44 mt-10">2</p>
              <p className="font-arimo text-xs font-normal ml-44 mt-10">6</p>
              <p className="font-arimo text-xs font-normal ml-44 mt-10">7</p>
            </div>
          </div>
          <p className="text-2xl font-arimo text-primary-black font-bold mt-[51px]">
            Recent News
          </p>
          <div className="flex mt-[30px] pb-[30px] border-b border-solid border-secondary-gray">
            <div>
              <img className="mr-10" src={Iphone} alt="iphone" />
            </div>
            <div>
              <p className=" font-arimo font-black text-sm">
                How To Put Movies On Iphone
              </p>
              <p className="font-arimo text-[#3e3e3e] text-[10px]">
                24 Apr 2019, 45 mins ago
              </p>
            </div>
          </div>
          <div className="flex mt-[30px] pb-[30px] border-b border-solid border-secondary-gray">
            <div>
              <img className="mr-16" src={Windows} alt="iphone" />
            </div>
            <div>
              <p className="font-arimo font-black text-sm">
                Windows Registy Cleaner Checklist
              </p>
              <p className="font-arimo text-[#3e3e3e] text-[10px]">
                24 Apr 2019, 45 mins ago
              </p>
            </div>
          </div>
          <div className="flex mt-[30px] pb-[30px] border-b border-solid border-secondary-gray">
            <div>
              <img className="mr-5" src={Messes} alt="iphone" />
            </div>
            <div>
              <p className="font-arimo font-black text-sm">
                Messes Make Memories
              </p>
              <p className="font-arimo text-[#3e3e3e] text-[10px]">
                24 Apr 2019, 45 mins ago
              </p>
            </div>
          </div>
          <div className="flex mt-[30px]">
            <div>
              <img className="mr-5" src={Modern} alt="iphone" />
            </div>
            <div>
              <p className="font-arimo font-black text-sm">
                Modern Light House
              </p>
              <p className="font-arimo text-[#3e3e3e] text-[10px]">
                24 Apr 2019, 45 mins ago
              </p>
            </div>
          </div>
          <p className="font-bold font-arimo text-2xl text-secondary-black mt-[51px]">
            Archives
          </p>
          <select className="border border-solid border-[#C8C8C8] p-4 w-full mt-[30px]">
            <option value="" disabled selected>
              Select Month
            </option>
            <option value="01">Januari</option>
            <option value="02">Februari</option>
            <option value="03">Maret</option>
            <option value="04">April</option>
            <option value="05">Mei</option>
            <option value="06">Juni</option>
            <option value="07">Juli</option>
            <option value="08">Agustus</option>
            <option value="09">September</option>
            <option value="10">Oktober</option>
            <option value="11">November</option>
            <option value="12">Desember</option>
          </select>
          <p className="font-bold font-arimo text-2xl text-secondary-black mt-[51px]">
            Tags
          </p>
          <button className="text-xs border border-solid border-[#C8C8C8] pt-2 pb-2 pr-5 pl-5 mr-[5px] mt-[5px] rounded-[4px]">
            furniture
          </button>
          <button className="text-xs text-white bg-primary-black border border-solid border-[#C8C8C8] pt-2 pb-2 pr-5 pl-5 mr-[5px] mt-[5px] rounded-[4px]">
            style
          </button>
          <button className="text-xs border border-solid border-[#C8C8C8] pt-2 pb-2 pr-5 pl-5 mr-[5px] mt-[5px] rounded-[4px]">
            life style
          </button>
          <button className="text-xs border border-solid border-[#C8C8C8] pt-2 pb-2 pr-4 pl-4 mr-[5px] mt-[5px] rounded-[4px]">
            zuka
          </button>
          <button className="text-xs border border-solid border-[#C8C8C8] pt-2 pb-2 pr-4 pl-4 mr-[5px] mt-[5px] rounded-[4px]">
            online store
          </button>
          <button className="text-xs border border-solid border-[#C8C8C8] pt-2 pb-2 pr-4 pl-4 mr-[5px] mt-[5px] rounded-[4px]">
            real estate
          </button>
          <div className="relative mt-[50px]">
            <img src={Banner} alt="gambar" className="w-full" />
            <div className="absolute top-1/2 left-[40%] transform -translate-x-1/2 -translate-y-1/2 text-left">
              <p className="text-2xl font-arimo font-bold text-white w-[150%]">
                Ad Banner <br />
                <span className="font-arimo text-base w-[100px] font-normal">
                  info@la-studioweb.com
                </span>
              </p>
            </div>
          </div>
        </section>
        <section className="flex-[3.5] ml-[100px] mt-20">
          <img src={Hero} alt="hero" />
          <p className="font-arimo text-3xl font-normal mt-5">
            How to open interior shop?
          </p>
          <div className="flex mt-6">
            <img src={Clock} alt="clock" />
            <p className="text-[10px] font-arimo font-normal ml-[5px]">
              24 Apr 2019, 45 mins ago, by Admin
            </p>
            <img className="ml-5" src={Tag} alt="tag" />
            <p className="text-[10px] font-arimo font-normal ml-[5px]">
              Kids, Interior, Photos
            </p>
          </div>
          <p className="w-[860px] font-arimo text-sm leading-7 mt-6">
            Maecenas eget congue augue. Sed mollis tempor velit, et tempor justo
            cursus vel. Phasellus lacinia placerat lacus, vulputate volutpat
            tellus fringilla eu. Phasellus rhoncus varius tortor, non ultricies
            felis condimentum eget unc ornare suscipit nulla sagittis
            faucibuDonec non velit ut nisl ultrices lobortis eget et odio. Sed
            mollis, libero ut lacinia ultrices, ex urna sodales tortor, sed
            pulvinar ex eros vel orci. Sed tempor placerat tristique. Ut
            tristique leo sit amet nisi blandit rutrum. Nunc hendrerit a diam
            vel ultricies. Morbi gravida, dui eu efficitur aliquet, ante nisl
            mollis ex, eget venenatis magna urna non ex. Suspendisse et orci
            viverra lacus consectetur posuere. Curabitur bibendum nisi at sapien
            viverra ultricies. Praesent commodo volutpat leo, ut accumsan ipsum
            egestas in. Integer elementum ligula vel cursus bibendum. Nulla nibh
            ante, iaculis at consequat id, euismod a sem. Fusce et sapien
            cursus, placerat dui non, rhoncus diam. Praesent ac consectetur dui.
            <br /> <br />
            Phasellus ac sem eu mauris sodales tristique sed non ligula. Aenean
            in mauris ac libero condimentum vulputate quis ut sapien. Phasellus
            euismod mi eget interdum pellentesque. Maecenas molestie vitae risus
            vitae volutpat. Maecenas a velit rutrum, auctor quam et, commodo
            est. Cras leo sem, maximus non ex ac, porttitor egestas dolor. Fusce
            ut metus sodales, pellentesque diam sed, sodales massa. Nulla
            facilisi. Sed sed quam eget metus interdum condimentum non et odio.
            Nam magna tortor, vulputate in venenatis et, porta ac orci. Sed
            venenatis scelerisque scelerisque. Nullam ut neque sed libero
            feugiat fermentum et non odio. Aenean et justo elementum, volutpat
            arcu vitae, tincidunt lorem.
          </p>
          <div className="flex w-[860px] mt-[50px]">
            <div className="flex-[1]">
              <img src={Mask} alt="mask" />
            </div>
            <div className=" flex-[1.3] ml-[30px]">
              <p className="text-3xl font-arimo font-normal">
                Scandinavian Design
              </p>
              <p className="mt-5 text-sm font-normal font-arimo leading-7">
                Nunc hendrerit a diam vel ultricies. Morbi gravida, dui eu
                efficitur aliquet, ante nisl mollis ex, eget venenatis magna
                urna non ex. Suspendisse et orci viverra lacus consectetur
                posuere. Curabitur bibendum nisi at sapien viverra ultricies.
                Praesent commodo volutpat leo, ut accumsan ipsum egestas in.
                Integer elementum ligula vel cursus bibendum. Nulla nibh ante,
                iaculis at consequat id, euismod a sem. Fusce et sapien cursus,
                placerat dui non, rhoncus diam. Praesent ac consectetur dui.
                <br /> <br />
                Phasellus ac sem eu mauris sodales tristique sed non ligula.
                Aenean in mauris ac libero condimentum vulputate quis ut sapien.
                Phasellus euismod mi eget interdum pellentesque.{" "}
              </p>
            </div>
          </div>
          <p className="w-[860px] mt-[50px] leading-7 font-arimo font-normal text-sm">
            Sed mollis, libero ut lacinia ultrices, ex urna sodales tortor, sed
            pulvinar ex eros vel orci. Sed tempor placerat tristique. Ut
            tristique leo sit amet nisi blandit rutrum. Nunc hendrerit a diam
            vel ultricies. Morbi gravida, dui eu efficitur aliquet, ante nisl
            mollis ex, eget venenatis magna urna non ex. Suspendisse et orci
            viverra lacus consectetur posuere. Curabitur bibendum nisi at sapien
            viverra ultricies. Praesent commodo volutpat leo, ut accumsan ipsum
            egestas in. Integer elementum ligula vel cursus bibendum. Nulla nibh
            ante, iaculis at consequat id, euismod a sem. Fusce et sapien
            cursus, placerat dui non, rhoncus diam. Praesent ac consectetur dui.
            <br /> <br />
            Phasellus ac sem eu mauris sodales tristique sed non ligula. Aenean
            in mauris ac libero condimentum vulputate quis ut sapien. Phasellus
            euismod mi eget interdum pellentesque. Maecenas molestie vitae risus
            vitae volutpat. Maecenas a velit rutrum, auctor quam et, commodo
            est. Cras leo sem, maximus non ex ac, porttitor egestas dolor. Fusce
            ut metus sodales, pellentesque diam sed, sodales massa. Nulla
            facilisi. Sed sed quam eget metus interdum condimentum non et odio.
          </p>
          <div className="h-24 border-l-4 border-solid border-primary-black mt-[50px]">
            <p className="ml-[30px] text-primary-black font-playFairItalic text-5xl">
              "Luxury Is In Each Detail
            </p>
            <p className="mt-6 ml-[30px] font-arimo ">
              Hubert de Givenchy - Scoutandnimble.com
            </p>
          </div>
          <p className="w-[860px] mt-[50px] leading-7 font-arimo font-normal text-sm">
            Sed mollis, libero ut lacinia ultrices, ex urna sodales tortor, sed
            pulvinar ex eros vel orci. Sed tempor placerat tristique. Ut
            tristique leo sit amet nisi blandit rutrum. Nunc hendrerit a diam
            vel ultricies. Morbi gravida, dui eu efficitur aliquet, ante nisl
            mollis ex, eget venenatis magna urna non ex. Suspendisse et orci
            viverra lacus consectetur posuere. Curabitur bibendum nisi at sapien
            viverra ultricies. Praesent commodo volutpat leo, ut accumsan ipsum
            egestas in. Integer elementum ligula vel cursus bibendum. Nulla nibh
            ante, iaculis at consequat id, euismod a sem. Fusce et sapien
            cursus, placerat dui non, rhoncus diam. Praesent ac consectetur dui.
            <br /> <br />
            Phasellus ac sem eu mauris sodales tristique sed non ligula. Aenean
            in mauris ac libero condimentum vulputate quis ut sapien. Phasellus
            euismod mi eget interdum pellentesque. Maecenas molestie vitae risus
            vitae volutpat. Maecenas a velit rutrum, auctor quam et, commodo
            est. Cras leo sem, maximus non ex ac, porttitor egestas dolor. Fusce
            ut metus sodales, pellentesque diam sed, sodales massa. Nulla
            facilisi. Sed sed quam eget metus interdum condimentum non et odio.
          </p>
          <div className="flex w-[860px] justify-end mt-[100px] pb-[30px] border-b border-solid border-primary-gray">
            <img src={Share} alt="share" />
          </div>
          <div className="flex">
            <div className="flex mt-[30px] pb-[30px]">
              <div>
                <img className="" src={Iphone} alt="iphone" />
                <Link className="font-arimo text-[10px] text-secondary-gray">
                  PREVIOUS POST
                </Link>
              </div>
              <div>
                <p className=" font-arimo font-black text-sm">
                  How To Put Movies On Iphone
                </p>
                <p className="font-arimo text-[#3e3e3e] text-[10px]">
                  24 Apr 2019, 45 mins ago
                </p>
              </div>
            </div>
            <div className="flex mt-[30px] pb-[30px] ml-48">
              <div>
                <p className=" font-arimo font-black text-sm">
                  Windows Registy Cleaner Checklist
                </p>
                <p className="font-arimo text-[#3e3e3e] text-[10px]">
                  24 Apr 2019, 45 mins ago
                </p>
              </div>
              <div>
                <img className="ml-4" src={Windows} alt="iphone" />
                <Link className="mt-5 font-arimo text-[10px] text-secondary-gray">
                  NEXT POST
                </Link>
              </div>
            </div>
          </div>
          <p className="mt-[100px] text-3xl font-arimo text-primary-black">
            4 Comment
          </p>
          <div className="w-[860px] pt-9">
            <div className="border border-solid border-secondary-gray">
              <div className="flex ml-12 mt-12">
                <div>
                  <img src={face} />
                </div>
                <div className="ml-14">
                  <p className="w-[530px] font-playFair text-base leading-7 text-[#535353]">
                    “Theme is very flexible and easy to use. Perfect for us.
                    Customer support has been excellent and answered every
                    question we've thrown at them”
                  </p>
                  <p className="text-xs text-[#989898] font-arimo mt-4">
                    35 mins ago, 15 November 2019
                    <span className="font-arimo text-xs text-[#2f2f2f] ml-2">
                      Reply
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex mt-[91px] pb-[51px]">
                <div>
                  <img className="ml-[210px]" src={face2} />
                </div>
                <div className="ml-14">
                  <p className="w-[440px] font-playFair text-base leading-7 text-[#535353]">
                    “This theme is indeed a great purchase. Support center is
                    also helpful and quick to answer. No issues so far.”
                  </p>
                  <p className="text-xs text-[#989898] font-arimo mt-4">
                    35 mins ago, 15 November 2019
                    <span className="font-arimo text-xs text-[#2f2f2f] ml-2">
                      Reply
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex pt-[53px] pl-12 border border-t-0 border-solid border-secondary-gray pb-[69px]">
              <div>
                <img src={face3} />
              </div>
              <div className="ml-14">
                <p className="w-[530px] font-playFair text-base leading-7 text-[#535353]">
                  “Exceptional service, beautiful and straightforward theme!
                  Can't recommend enough.”
                </p>
                <p className="text-xs text-[#989898] font-arimo mt-4">
                  35 mins ago, 15 November 2019
                  <span className="font-arimo text-xs text-[#2f2f2f] ml-2">
                    Reply
                  </span>
                </p>
              </div>
            </div>
            <div className="flex pt-[53px] pl-12 border border-t-0 border-solid border-secondary-gray pb-[69px]">
              <div>
                <img src={face4} />
              </div>
              <div className="ml-14">
                <p className="w-[530px] font-playFair text-base leading-7 text-[#535353]">
                  “Highly customizable. Excellent design. Customer services has
                  exceeded my expectation. They are quick to answer and even
                  when they don't know the answer right away. They'll work with
                  you towards a solution.”
                </p>
                <p className="text-xs text-[#989898] font-arimo mt-4">
                  35 mins ago, 15 November 2019
                  <span className="font-arimo text-xs text-[#2f2f2f] ml-2">
                    Reply
                  </span>
                </p>
              </div>
            </div>
          </div>
          <p className="mt-14 font-arimo text-3xl text-primary-black">
            Leave A Comment
          </p>
          <p className="text-xs mt-3 text-primary-gray">
            Your email address will not be published. Required fields are marked
            *
          </p>
          <div className="flex mt-14 w-[860px]">
            <input
              className="border border-solid border-[#C8C8C8] w-[270px] p-4"
              type="text"
              placeholder="Name *"
            />
            <input
              className="border border-solid border-[#C8C8C8] w-[270px] p-4 ml-[30px]"
              type="email"
              placeholder="Email *"
            />
            <input
              className="border border-solid border-[#C8C8C8] w-[270px] p-4 ml-[30px]"
              type="text"
              placeholder="Website"
            />
          </div>
          <textarea
            placeholder="Your Comment"
            id="comment"
            name="comment"
            rows="5"
            class="block w-[860px] h-48 mt-[30px] px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          ></textarea>
          <button className="bg-primary-black text-white text-xs p-6 text-center mt-[30px] w-[170px]">
            Send
          </button>
        </section>
      </section>
      <section className="ml-[140px] w-[1160px] h-[599px]">
        <p className="font-arimo text-4xl text-primary-black mt-[100px]">
          Related Post
        </p>
        <div className="flex mt-[50px]">
          <div>
            <img className="w-[367px] h-[249px]" src={Hero} alt="hero" />
            <p className="mt-4 font-arimo text-2xl text-primary-black">
              How to open interior shop?
            </p>
            <div className="flex mt-6">
              <img src={Clock} alt="clock" />
              <p className="text-[10px] font-arimo font-normal ml-[5px]">
                24 Apr 2019, 45 mins ago, by Admin
              </p>
              <img className="ml-5" src={Tag} alt="tag" />
              <p className="text-[10px] font-arimo font-normal ml-[5px]">
                Kids, Interior, Photos
              </p>
            </div>
          </div>
          <div className="ml-[30px]">
            <img src={bedroom} alt="bedroom" />
            <p className="mt-4 font-arimo text-2xl text-primary-black">
              beautiful Corner
            </p>
            <div className="flex mt-6">
              <img src={Clock} alt="clock" />
              <p className="text-[10px] font-arimo font-normal ml-[5px]">
                24 Apr 2019, 45 mins ago, by Admin
              </p>
              <img className="ml-5" src={Tag} alt="tag" />
              <p className="text-[10px] font-arimo font-normal ml-[5px]">
                Kids, Interior, Photos
              </p>
            </div>
          </div>
          <div className="ml-[30px]">
            <img src={sofa} alt="sofa" />
            <p className="mt-4 font-arimo text-2xl text-primary-black">
              Furniture Vintage Style
            </p>
            <div className="flex mt-6">
              <img src={Clock} alt="clock" />
              <p className="text-[10px] font-arimo font-normal ml-[5px]">
                24 Apr 2019, 45 mins ago, by Admin
              </p>
              <img className="ml-5" src={Tag} alt="tag" />
              <p className="text-[10px] font-arimo font-normal ml-[5px]">
                Kids, Interior, Photos
              </p>
            </div>
          </div>
        </div>
        <img className="m-auto mt-14" src={slider} alt="slider" />
      </section>
    </>
  );
};

export default BlogDetail;
