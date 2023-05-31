import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import axios from 'axios';
import { Dialog } from "@headlessui/react";
import { toast } from "react-hot-toast";
import { logout } from "../../utils/https/auth";
import { authAction } from "../../redux/slices/auth";
import { get, remove } from "../../utils/sessionStorage";
import { useNavigate } from "react-router-dom";

import defaultAvatar from '../../assets/avatars/default-avatar.jpg'
import Edit2 from '../../assets/profilecust/edit-3.svg';
import Logout from '../../assets/profilecust/log-out.svg';
import Title from "../../components/Title";
import Header from "../../components/Header";

import Footer from '../../components/Footer';

import Loader from "../../components/Loader";
import Nav from "./Nav";


const Profile = () => {

  const [image, setImage] = useState()

  const [editName, setEditName] = useState(true)
  const [editGender, setEditGender] = useState(true)
  const [editEmail, setEditEmail] = useState(true)
  // const [editAdress, setEditAddress] = useState(false)
  const [editStoreName, setEditStoreName] = useState(true)
  const [editStoreDescription, setEditStoreDescription] = useState(true)
  const [profile, setProfile] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const localToken = useSelector((state) => state.auth.token);
  const sessionToken = get("raz");
  const token = sessionToken || localToken
  const { role } = jwtDecode(token)


  useEffect(() => {
    let getData = true
    if (getData) {
      setIsLoading(true)
      const url = `${process.env.REACT_APP_SERVER_HOST}/apiv1/userPanel/profile`
      axios.get(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then(res => setProfile(res.data.data[0])).catch(err => console.log(err)).finally(() => setIsLoading(false))
    }
    return () => { getData = false }
  }, [])

  const editProfile = (key, value) => {
    const newProfile = { ...profile, [key]: value }
    setProfile(newProfile)
  }

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const saveProfile = async () => {
    try {
      setIsLoading(true)
      const formData = new FormData()
      if (image) {
        formData.append('image', image)
      }
      formData.append('name', profile.name)
      // formData.append('email', profile.email)
      formData.append('gender', profile.gender_id)
      formData.append('store_name', profile.store_name)
      formData.append('store_desc', profile.store_desc)
      const url = `${process.env.REACT_APP_SERVER_HOST}/apiv1/userPanel/profile`
      const result = await axios.patch(url, formData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      toast.success('Success update profile')
    } catch (error) {
      console.log(error);
      toast.error('Failed update profile')
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = (e) => {
    e.preventDefault();

    const token = localToken || sessionToken;

    toast.promise(
      logout(token).then((res) => {
        console.log(res["data"]);
        if (localToken) {
          dispatch(authAction.delete(token));
        } else {
          remove("raz");
        }
      }),
      {
        loading: "Please wait...",
        success: () => {
          navigate("/");
          setIsDialogOpen(false);
          return <>Succesfully logged out</>;
        },
        error: () => {
          setIsDialogOpen(false);
          return <>Something went wrong</>
        },
      },
      { success: { duration: Infinity } }
    );
  };


  if (!profile) return <Loader />
  if (isLoading) return <Loader />
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
        <Nav />
        <section className={`flex mt-10 md:mt-24 items-start gap-10 flex-col justify-start w-full`}>
          <div className="flex gap-10 items-center">
            <label className="w-24 h-24 rounded-full overflow-hidden relative cursor-pointer">
              <img src={image ? URL.createObjectURL(image) : profile?.img ? profile?.img : defaultAvatar} alt="avatar" className="object-cover" />
              <input type="file" className="invisible" onChange={(e) => setImage(e.target.files[0])} />
              <div className="bg-primary-black/50 opacity-0 hover:opacity-100 flex justify-center items-center  absolute w-full h-full top-0">
                <p className="text-white">Change</p>
              </div>
            </label>
            <div>
              <div className="flex items-center gap-5">
                {/* <p className="font-arimo font-bold text-2xl">{profile.name || 'Set your name'}</p> */}
                <input type="text" value={profile?.name} placeholder="Set your name" className="font-arimo font-bold text-2xl w-[200px]" disabled={editName} onChange={(e) => editProfile('name', e.target.value)} />
                <button type="button" onClick={() => editName ? setEditName(false) : setEditName(true)}><img src={Edit2} alt="edit" className="w-5 h-5" /></button>
              </div>
              <p className="font-arimo font-normal text-base">as Seller</p>
            </div>
          </div>
          <div className="grid grid-cols-1 w-full border-primary-gray border">
            <div className="border-primary-gray border-b px-7 md:px-14 py-5 md:py-10 flex items-center">
              <div className="flex flex-col gap-4 w-4/5">
                <p className="font-arimo font-normal text-base text-primary-black">Gender</p>
                <div className="flex items-center gap-10">
                  <button type="button" className="flex items-center gap-3" disabled={editGender} onClick={() => editProfile('gender_id', 1)}>
                    <div className={`w-5 h-5 rounded-full border ${profile?.gender_id === 1 ? 'border-primary-black' : 'border-secondary-gray'} flex justify-center items-center`}>
                      <div className={`w-3 h-3 rounded-full ${profile?.gender_id === 1 ? 'bg-primary-black' : 'bg-secondary-gray'}`}></div>
                    </div>
                    <p className="font-arimo font-normal text-lg md:text-xl lg:text-2xl">Male</p>
                  </button>
                  <button type="button" className="flex items-center gap-3" disabled={editGender} onClick={() => editProfile('gender_id', 2)}>
                    <div className={`w-5 h-5 rounded-full border ${profile?.gender_id === 2 ? 'border-primary-black' : 'border-secondary-gray'} flex justify-center items-center`}>
                      <div className={`w-3 h-3 rounded-full ${profile?.gender_id === 2 ? 'bg-primary-black' : 'bg-secondary-gray'}`}></div>
                    </div>
                    <p className="font-arimo font-normal text-lg md:text-xl lg:text-2xl">Female</p>
                  </button>
                </div>
              </div>
              <div className="w-1/5 flex justify-end items-center">
                <button className="flex gap-4 items-center " type="button" onClick={() => editGender ? setEditGender(false) : setEditGender(true)}>
                  <p className={`${editGender ? 'hidden' : 'block'} font-arimo font-bold text-base md:text-lg hidden sm:block`}>SAVE</p>
                  <p className={`${editGender ? 'block' : 'hidden'} font-arimo font-bold text-base md:text-lg hidden sm:block`}>EDIT</p>
                  <img src={Edit2} alt="edit" className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="border-primary-gray border-b px-7 md:px-14 py-5 md:py-10 flex items-center">
              <div className="flex flex-col gap-4 w-4/5">
                <p className="font-arimo font-normal text-base text-primary-black">Your Email</p>
                <input type="text" className="w-full font-arimo font-normal text-lg md:text-xl lg:text-2xl outline-none text-primary-black" value={profile?.email} placeholder="Input your mail" disabled onChange={(e) => editProfile('email', e.target.value)} />
              </div>
              <div className="w-1/5 flex justify-end items-center invisible">
                <button className="flex gap-4 items-center " type="button" onClick={() => editEmail ? setEditEmail(false) : setEditEmail(true)}>
                  <div className="hidden sm:block">
                    <p className={`${editGender === true ? 'hidden' : 'block'} font-arimo font-bold text-base md:text-lg `}>SAVE</p>
                    <p className={`${editGender === true ? 'block' : 'hidden'} font-arimo font-bold text-base md:text-lg `}>EDIT</p>
                  </div>
                  <img src={Edit2} alt="edit" className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="border-primary-gray border-b px-7 md:px-14 py-5 md:py-10 flex items-center">
              <div className="flex flex-col gap-4 w-4/5">
                <p className="font-arimo font-normal text-base text-primary-black">Store Name</p>
                <input type="text" className="w-full font-arimo font-normal text-lg md:text-xl lg:text-2xl outline-none text-primary-black" value={profile?.store_name} placeholder="Input your store name" disabled={editStoreName} onChange={(e) => editProfile('store_name', e.target.value)} />
              </div>
              <div className="w-1/5 flex justify-end items-center">
                <button className="flex gap-4 items-center " type="button" onClick={() => editStoreName ? setEditStoreName(false) : setEditStoreName(true)}>
                  <div className="hidden sm:block">
                    <p className={`${editStoreName === true ? 'hidden' : 'block'} font-arimo font-bold text-base md:text-lg `}>SAVE</p>
                    <p className={`${editStoreName === true ? 'block' : 'hidden'} font-arimo font-bold text-base md:text-lg `}>EDIT</p>
                  </div>
                  <img src={Edit2} alt="edit" className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className=" px-7 md:px-14 py-5 md:py-10 flex items-center">
              <div className="flex flex-col gap-4 w-4/5">
                <p className="font-arimo font-normal text-base text-primary-black">Store Description</p>
                <input type="text" className="w-full font-arimo font-normal text-lg md:text-xl lg:text-2xl outline-none text-primary-black" value={profile?.store_desc} placeholder="Input your store description" disabled={editStoreDescription} onChange={(e) => editProfile('store_desc', e.target.value)} />
              </div>
              <div className="w-1/5 flex justify-end items-center">
                <button className="flex gap-4 items-center " type="button" onClick={() => editStoreDescription ? setEditStoreDescription(false) : setEditStoreDescription(true)}>
                <div className="hidden sm:block">
                    <p className={`${editStoreDescription === true ? 'hidden' : 'block'} font-arimo font-bold text-base md:text-lg `}>SAVE</p>
                    <p className={`${editStoreDescription === true ? 'block' : 'hidden'} font-arimo font-bold text-base md:text-lg `}>EDIT</p>
                  </div>
                  <img src={Edit2} alt="edit" className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          <button className="btn h-14 sm:h-[70px] w-1/2 sm:w-52 gap-4 flex border-none justify-center items-center bg-[#38d323] hover:bg-[#38d323]/80" onClick={saveProfile}>
            <p className="font-arimo font-bold text-base text-white">SAVE</p>
          </button>
          <button className="btn h-14 sm:h-[70px] w-1/2 sm:w-52 gap-4 flex border-none justify-center items-center bg-[#D94141] hover:bg-[#D94141]/80" onClick={() => setIsDialogOpen(true)}>
            <img src={Logout} alt="logout" className="w-6 h-6" />
            <p className="font-arimo font-bold text-base text-white">LOGOUT</p>
          </button>
        </section>
      </main>
      <main className={`${role === 1 ? 'block' : 'hidden'} py-[5%] px-[8%] w-full`}>
        <section className={`flex mt-10 md:mt-24 items-start gap-10 flex-col justify-start w-full`}>
          <div className="flex gap-10 items-center">
            <label className="w-24 h-24 rounded-full overflow-hidden relative">
              <img src={image ? URL.createObjectURL(image) : profile?.img ? profile?.img : defaultAvatar} alt="avatar" className="object-cover" />
              <input type="file" className="invisible" onChange={(e) => setImage(e.target.files[0])} />
              <div className="bg-primary-black/50 opacity-0 hover:opacity-100 flex justify-center items-center  absolute w-full h-full top-0">
                <p className="text-white">Change</p>
              </div>
            </label>
            <div>
              <div className="flex items-center gap-5">
                <input type="text" value={profile?.name} placeholder="Set your name" className="font-arimo font-bold text-2xl w-[200px]" disabled={editName} onChange={(e) => editProfile('name', e.target.value)} />
                <button type="button" onClick={() => editName ? setEditName(false) : setEditName(true)}><img src={Edit2} alt="edit" className="w-5 h-5" /></button>
              </div>
              <p className="font-arimo font-normal text-base">as Customer</p>
            </div>
          </div>
          <div className="grid grid-cols-1 w-full border-primary-gray border">
            <div className="border-primary-gray border-b px-7 md:px-14 py-5 md:py-10 flex items-center">
              <div className="flex flex-col gap-4 w-4/5">
                <p className="font-arimo font-normal text-base text-primary-black">Gender</p>
                <div className="flex items-center gap-10">
                  <button type="button" className="flex items-center gap-3" disabled={editGender} onClick={() => editProfile('gender_id', 1)}>
                    <div className={`w-5 h-5 rounded-full border ${profile?.gender_id === 1 ? 'border-primary-black' : 'border-secondary-gray'} flex justify-center items-center`}>
                      <div className={`w-3 h-3 rounded-full ${profile?.gender_id === 1 ? 'bg-primary-black' : 'bg-secondary-gray'}`}></div>
                    </div>
                    <p className="font-arimo font-normal text-lg md:text-xl lg:text-2xl">Male</p>
                  </button>
                  <button type="button" className="flex items-center gap-3" disabled={editGender} onClick={() => editProfile('gender_id', 2)}>
                    <div className={`w-5 h-5 rounded-full border ${profile?.gender_id === 2 ? 'border-primary-black' : 'border-secondary-gray'} flex justify-center items-center`}>
                      <div className={`w-3 h-3 rounded-full ${profile?.gender_id === 2 ? 'bg-primary-black' : 'bg-secondary-gray'}`}></div>
                    </div>
                    <p className="font-arimo font-normal text-lg md:text-xl lg:text-2xl">Female</p>
                  </button>
                </div>
              </div>
              <div className="w-1/5 flex justify-end items-center">
                <button className="flex gap-4 items-center " type="button" onClick={() => editGender ? setEditGender(false) : setEditGender(true)}>
                  <div className="hidden sm:block">
                    <p className={`${editGender === true ? 'hidden' : 'block'} font-arimo font-bold text-base md:text-lg `}>SAVE</p>
                    <p className={`${editGender === true ? 'block' : 'hidden'} font-arimo font-bold text-base md:text-lg `}>EDIT</p>
                  </div>
                  <img src={Edit2} alt="edit" className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="border-primary-gray border-b px-7 md:px-14 py-5 md:py-10 flex items-center">
              <div className="flex flex-col gap-4 w-4/5">
                <p className="font-arimo font-normal text-base text-primary-black">Your Email</p>
                <input type="text" className="w-full font-arimo font-normal text-lg md:text-xl lg:text-2xl outline-none text-primary-black" value={profile?.email} placeholder="Input your mail" disabled={editEmail} onChange={(e) => editProfile('email', e.target.value)} />
              </div>
              <div className="w-1/5 flex justify-end items-center invisible">
                <button className="flex gap-4 items-center " type="button" onClick={() => editEmail ? setEditEmail(false) : setEditEmail(true)}>
                  <p className="font-arimo font-bold text-base md:text-lg hidden sm:block">EDIT</p>
                  <img src={Edit2} alt="edit" className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* <div className=" px-7 md:px-14 py-5 md:py-10 flex items-center">
              <div className="flex flex-col gap-4 w-4/5">
                <p className="font-arimo font-normal text-base text-primary-black">Address</p>
                <input type="text" className="w-full font-arimo font-normal text-lg md:text-xl lg:text-2xl outline-none text-primary-black" value={profile?.store_desc} placeholder="Input your address" disabled={editAdress} onChange={(e) => editProfile('store_desc', e.target.value)} />
              </div>
              <div className="w-1/5 flex justify-end items-center">
                <button className="flex gap-4 items-center " type="button" onClick={() => editAdress ? setEditAddress(false) : setEditAddress(true)}>
                  <p className="font-arimo font-bold text-base md:text-lg hidden sm:block">EDIT</p>
                  <img src={Edit2} alt="edit" className="w-5 h-5" />
                </button>
              </div>
            </div> */}
          </div>
          <button className="btn h-14 sm:h-[70px] w-1/2 sm:w-52 gap-4 flex border-none justify-center items-center bg-[#38d323] hover:bg-[#38d323]/80" onClick={saveProfile}>
            <p className="font-arimo font-bold text-base text-white">SAVE</p>
          </button>
          <button type="button" className="btn h-14 sm:h-[70px] w-1/2 sm:w-52 gap-4 flex border-none justify-center items-center bg-[#D94141] hover:bg-[#D94141]/80" onClick={() => setIsDialogOpen(true)}>
            <img src={Logout} alt="logout" className="w-6 h-6" />
            <p className=" font-arimo font-bold text-base text-white">LOGOUT</p>
          </button>
        </section>
      </main>
      <Footer />
      <Dialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        className="fixed z-50 bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 inset-0 overflow-y-auto font-arimo"
      >
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-white w-1/2 lg:p-16 p-6 rounded-lg shadow-lg text-center z-20">
            <p className="text-2xl font-bold mb-2">Are you sure to logout?</p>
            <div className="logout-button pt-10">
              <button
                onClick={handleLogout}
                className="btn normal-case w-full border-transparent text-white bg-primary-black hover:text-primary-black hover:bg-white disabled:bg-[#DADADA] disabled:text-[#88888F]"
              >
                Yes
              </button>
            </div>
            <div className="cancel-button pt-10">
              <button
                onClick={handleCloseDialog}
                className="btn normal-case w-full border-transparent text-white bg-accent-red hover:text-accent-red hover:bg-white"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  )
}


export default Profile;