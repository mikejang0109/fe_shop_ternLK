import React, { useState } from "react";
import Cust from '../../assets/profilecust/cust.png';
import Edit2 from '../../assets/profilecust/edit-3.svg';
import Logout from '../../assets/profilecust/log-out.svg';
import Title from "../../components/Title";
import Header from "../../components/Header";
import PathDown from '../../assets/profileseller/small-down.svg';
import Footer from '../../components/Footer';
import MyProduct from "./MyProduct";
import SellingProduct from './SellingProduct'
import MyOrder from './MyOrder'

const Profile = () => {
  const [navValue, setNavValue] = useState(1)
  const [content, setContent] = useState(1)
  const [gender, setGender] = useState()
  const [email, setEmail] = useState()
  const [storeName, setStoreName] = useState()
  const [storeDescription, setStoreDescription] = useState()
  const [myOrderModal, setMyOrderModal] = useState()
  const [myProductModal, setMyProductModal] = useState()
  const [editGender, setEditGender] = useState(false)
  const [editEmail, setEditEmail] = useState(false)
  const [editAdress, setEditAddress] = useState(false)
  const [editStoreName, setEditStoreName] = useState(false)
  const [editStoreDescription, setEditStoreDescription] = useState(false)

  const role = 2

  return (
    <>
      <Header />
      <Title
        isBreadcrumbs={false}
        breadcrumbs=""
        breadcrumbs2=""
        title="Profile"
        description="See your notifications for the latest updates"
      />
      <main className={`${role === 2 ? 'block' : 'hidden'} py-[5%] px-[8%] w-full`}>
        <section className="overflow-visible">
          <nav className="flex justify-start gap-5 sm:gap-10 md:gap-16 lg:gap-20 w-max ">
            <div className={`flex pb-4 cursor-pointer  hover:text-primary-black hover:border-b-2 hover:border-b-primary-black text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl ${navValue === 1 ? 'text-primary-black border-b-2 border-b-primary-black' : 'text-[#b4b4b4]'}`} onClick={() => {
              setNavValue(1)
              setContent(1)
              setMyOrderModal(false)
              setMyProductModal(false)
            }}>
              <p>Profile</p>
            </div>
            <div className={`flex pb-4 cursor-pointer items-center gap-1 sm:gap-2 hover:text-primary-black hover:border-b-2 hover:border-b-primary-black text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl ${navValue === 2 ? 'text-primary-black border-b-2 border-b-primary-black' : 'text-[#b4b4b4]'} relative`} onClick={() => {
              setNavValue(2)
              setMyOrderModal(false)
              myProductModal ? setMyProductModal(false) : setMyProductModal(true)
            }}>
              <p className={`hover:text-primary-black text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl ${navValue === 2 ? 'text-primary-black ' : 'text-[#b4b4b4]'}`}>My Product</p>
              <img src={PathDown} alt="path" className="w-4 h-2" />
              <div className={`${myProductModal ? 'flex' : 'hidden'} w-[150px] lg:w-[300px] p-5 md:p-10 bg-primary-black flex-col gap-5 absolute top-16 z-50`}>
                <p className="text-[#b4b4b4] text-sm sm:text-base md:text-lg hover:text-white cursor-pointer" onClick={() => { setContent(21) }}>All</p>
                <p className="text-[#b4b4b4] text-sm sm:text-base md:text-lg hover:text-white cursor-pointer" onClick={() => { setContent(21) }}>Archive</p>
                <p className="text-[#b4b4b4] text-sm sm:text-base md:text-lg hover:text-white cursor-pointer" onClick={() => { setContent(21) }}>Sold</p>
              </div>
            </div>
            <div className={`flex pb-4 cursor-pointer items-center gap-1 sm:gap-2 hover:text-primary-black hover:border-b-2 hover:border-b-primary-black text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl ${navValue === 3 ? 'text-primary-black border-b-2 border-b-primary-black' : 'text-[#b4b4b4]'} relative`} onClick={() => {
              setNavValue(3)
              setContent(3)
              setMyOrderModal(false)
              setMyProductModal(false)
            }}>
              <p>Selling Product</p>
            </div>
            <div className={`flex pb-4 cursor-pointer items-center gap-1 sm:gap-2 hover:text-primary-black hover:border-b-2 hover:border-b-primary-black text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl ${navValue === 4 ? 'text-primary-black border-b-2 border-b-primary-black' : 'text-[#b4b4b4]'} relative`} onClick={() => {
              setNavValue(4)
              setMyProductModal(false)
              myOrderModal ? setMyOrderModal(false) : setMyOrderModal(true)
            }}>
              <p>My Order</p>
              <img src={PathDown} alt="path" className="w-4 h-2" />
              <div className={`${myOrderModal ? 'flex' : 'hidden'} w-[200px] lg:w-[300px] p-5 md:p-10 bg-primary-black flex-col gap-5 absolute top-16 right-0`}>
                <p className="text-[#b4b4b4] text-sm sm:text-base md:text-lg hover:text-white cursor-pointer" onClick={() => { setContent(41) }}>All</p>
                <p className="text-[#b4b4b4] text-sm sm:text-base md:text-lg hover:text-white cursor-pointer" onClick={() => { setContent(41) }}>Get Paid</p>
                <p className="text-[#b4b4b4] text-sm sm:text-base md:text-lg hover:text-white cursor-pointer" onClick={() => { setContent(41) }}>Processed</p>
                <p className="text-[#b4b4b4] text-sm sm:text-base md:text-lg hover:text-white cursor-pointer" onClick={() => { setContent(41) }}>Sent</p>
                <p className="text-[#b4b4b4] text-sm sm:text-base md:text-lg hover:text-white cursor-pointer" onClick={() => { setContent(41) }}>Completed</p>
                <p className="text-[#b4b4b4] text-sm sm:text-base md:text-lg hover:text-white cursor-pointer" onClick={() => { setContent(41) }}>Order Cancel</p>
              </div>
            </div>
          </nav>
        </section>
        <section className={`${content === 1 ? 'flex' : 'hidden'} mt-10 md:mt-24 items-start gap-10 flex-col justify-start w-full`}>
          <div className="flex gap-10 items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden relative">
              <img src={Cust} alt="avatar" className="object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-5">
                <p className="font-arimo font-bold text-2xl">Syifa</p>
                <button><img src={Edit2} alt="edit" className="w-5 h-5" /></button>
              </div>
              <p className="font-arimo font-normal text-base">as Seller</p>
            </div>
          </div>
          <div className="grid grid-cols-1 w-full border-primary-gray border">
            <div className="border-primary-gray border-b px-7 md:px-14 py-5 md:py-10 flex items-center">
              <div className="flex flex-col gap-4 w-4/5">
                <p className="font-arimo font-normal text-base text-primary-black">Gender</p>
                <div className="flex items-center gap-10">
                  <button type="button" className="flex items-center gap-3" disabled={editGender} onClick={() => setGender('male')}>
                    <div className={`w-5 h-5 rounded-full border ${gender === 'male' ? 'border-primary-black' : 'border-secondary-gray'} flex justify-center items-center`}>
                      <div className={`w-3 h-3 rounded-full ${gender === 'male' ? 'bg-primary-black' : 'bg-secondary-gray'}`}></div>
                    </div>
                    <p className="font-arimo font-normal text-lg md:text-xl lg:text-2xl">Male</p>
                  </button>
                  <button type="button" className="flex items-center gap-3" disabled={editGender} onClick={() => setGender('female')}>
                    <div className={`w-5 h-5 rounded-full border ${gender === 'female' ? 'border-primary-black' : 'border-secondary-gray'} flex justify-center items-center`}>
                      <div className={`w-3 h-3 rounded-full ${gender === 'female' ? 'bg-primary-black' : 'bg-secondary-gray'}`}></div>
                    </div>
                    <p className="font-arimo font-normal text-lg md:text-xl lg:text-2xl">Female</p>
                  </button>
                </div>
              </div>
              <div className="w-1/5 flex justify-end items-center">
                <button className="flex gap-4 items-center " type="button" onClick={() => editGender ? setEditGender(false) : setEditGender(true)}>
                  <p className="font-arimo font-bold text-base md:text-lg hidden sm:block">EDIT</p>
                  <img src={Edit2} alt="edit" className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="border-primary-gray border-b px-7 md:px-14 py-5 md:py-10 flex items-center">
              <div className="flex flex-col gap-4 w-4/5">
                <p className="font-arimo font-normal text-base text-primary-black">Your Email</p>
                <input type="text" className="w-full font-arimo font-normal text-lg md:text-xl lg:text-2xl outline-none text-primary-black" value={email} placeholder="Input your mail" disabled={editEmail} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="w-1/5 flex justify-end items-center">
                <button className="flex gap-4 items-center " type="button" onClick={() => editEmail ? setEditEmail(false) : setEditEmail(true)}>
                  <p className="font-arimo font-bold text-base md:text-lg hidden sm:block">EDIT</p>
                  <img src={Edit2} alt="edit" className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="border-primary-gray border-b px-7 md:px-14 py-5 md:py-10 flex items-center">
              <div className="flex flex-col gap-4 w-4/5">
                <p className="font-arimo font-normal text-base text-primary-black">Store Name</p>
                <input type="text" className="w-full font-arimo font-normal text-lg md:text-xl lg:text-2xl outline-none text-primary-black" value={storeName} placeholder="Input your store name" disabled={editStoreName} onChange={(e) => setStoreName(e.target.value)} />
              </div>
              <div className="w-1/5 flex justify-end items-center">
                <button className="flex gap-4 items-center " type="button" onClick={() => editStoreName ? setEditStoreName(false) : setEditStoreName(true)}>
                  <p className="font-arimo font-bold text-base md:text-lg hidden sm:block">EDIT</p>
                  <img src={Edit2} alt="edit" className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className=" px-7 md:px-14 py-5 md:py-10 flex items-center">
              <div className="flex flex-col gap-4 w-4/5">
                <p className="font-arimo font-normal text-base text-primary-black">Store Description</p>
                <input type="text" className="w-full font-arimo font-normal text-lg md:text-xl lg:text-2xl outline-none text-primary-black" value={storeDescription} placeholder="Input your store description" disabled={editStoreDescription} onChange={(e) => setStoreDescription(e.target.value)} />
              </div>
              <div className="w-1/5 flex justify-end items-center">
                <button className="flex gap-4 items-center " type="button" onClick={() => editStoreDescription ? setEditStoreDescription(false) : setEditStoreDescription(true)}>
                  <p className="font-arimo font-bold text-base md:text-lg hidden sm:block">EDIT</p>
                  <img src={Edit2} alt="edit" className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          <button className="btn h-14 sm:h-[70px] w-1/2 sm:w-52 gap-4 flex border-none justify-center items-center bg-[#D94141] hover:bg-[#D94141]/80">
            <img src={Logout} alt="logout" className="w-6 h-6" />
            <p className="font-arimo font-bold text-base text-white">LOGOUT</p>
          </button>
        </section>
        <MyProduct show={content} />
        <SellingProduct show={content} />
        <MyOrder show={content} />
      </main>
      <main className={`${role === 1 ? 'block' : 'hidden'} py-[5%] px-[8%] w-full`}>
        <section className={`${navValue === 1 ? 'flex' : 'hidden'} mt-10 md:mt-24 items-start gap-10 flex-col justify-start w-full`}>
          <div className="flex gap-10 items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden relative">
              <img src={Cust} alt="avatar" className="object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-5">
                <p className="font-arimo font-bold text-2xl">Syifa</p>
                <button><img src={Edit2} alt="edit" className="w-5 h-5" /></button>
              </div>
              <p className="font-arimo font-normal text-base">as Customer</p>
            </div>
          </div>
          <div className="grid grid-cols-1 w-full border-primary-gray border">
            <div className="border-primary-gray border-b px-7 md:px-14 py-5 md:py-10 flex items-center">
              <div className="flex flex-col gap-4 w-4/5">
                <p className="font-arimo font-normal text-base text-primary-black">Gender</p>
                <div className="flex items-center gap-10">
                  <button type="button" className="flex items-center gap-3" disabled={editGender} onClick={() => setGender('male')}>
                    <div className={`w-5 h-5 rounded-full border ${gender === 'male' ? 'border-primary-black' : 'border-secondary-gray'} flex justify-center items-center`}>
                      <div className={`w-3 h-3 rounded-full ${gender === 'male' ? 'bg-primary-black' : 'bg-secondary-gray'}`}></div>
                    </div>
                    <p className="font-arimo font-normal text-lg md:text-xl lg:text-2xl">Male</p>
                  </button>
                  <button type="button" className="flex items-center gap-3" disabled={editGender} onClick={() => setGender('female')}>
                    <div className={`w-5 h-5 rounded-full border ${gender === 'female' ? 'border-primary-black' : 'border-secondary-gray'} flex justify-center items-center`}>
                      <div className={`w-3 h-3 rounded-full ${gender === 'female' ? 'bg-primary-black' : 'bg-secondary-gray'}`}></div>
                    </div>
                    <p className="font-arimo font-normal text-lg md:text-xl lg:text-2xl">Female</p>
                  </button>
                </div>
              </div>
              <div className="w-1/5 flex justify-end items-center">
                <button className="flex gap-4 items-center " type="button" onClick={() => editGender ? setEditGender(false) : setEditGender(true)}>
                  <p className="font-arimo font-bold text-base md:text-lg hidden sm:block">EDIT</p>
                  <img src={Edit2} alt="edit" className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="border-primary-gray border-b px-7 md:px-14 py-5 md:py-10 flex items-center">
              <div className="flex flex-col gap-4 w-4/5">
                <p className="font-arimo font-normal text-base text-primary-black">Your Email</p>
                <input type="text" className="w-full font-arimo font-normal text-lg md:text-xl lg:text-2xl outline-none text-primary-black" value={email} placeholder="Input your mail" disabled={editEmail} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="w-1/5 flex justify-end items-center">
                <button className="flex gap-4 items-center " type="button" onClick={() => editEmail ? setEditEmail(false) : setEditEmail(true)}>
                  <p className="font-arimo font-bold text-base md:text-lg hidden sm:block">EDIT</p>
                  <img src={Edit2} alt="edit" className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className=" px-7 md:px-14 py-5 md:py-10 flex items-center">
              <div className="flex flex-col gap-4 w-4/5">
                <p className="font-arimo font-normal text-base text-primary-black">Address</p>
                <input type="text" className="w-full font-arimo font-normal text-lg md:text-xl lg:text-2xl outline-none text-primary-black" value={storeDescription} placeholder="Input your address" disabled={editAdress} onChange={(e) => setStoreDescription(e.target.value)} />
              </div>
              <div className="w-1/5 flex justify-end items-center">
                <button className="flex gap-4 items-center " type="button" onClick={() => editAdress ? setEditAddress(false) : setEditAddress(true)}>
                  <p className="font-arimo font-bold text-base md:text-lg hidden sm:block">EDIT</p>
                  <img src={Edit2} alt="edit" className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          <button type="button" className="btn h-14 sm:h-[70px] w-1/2 sm:w-52 gap-4 flex border-none justify-center items-center bg-[#D94141] hover:bg-[#D94141]/80">
            <img src={Logout} alt="logout" className="w-6 h-6" />
            <p className=" font-arimo font-bold text-base text-white">LOGOUT</p>
          </button>
        </section>
      </main>
      <Footer />
    </>
  )
}


export default Profile;