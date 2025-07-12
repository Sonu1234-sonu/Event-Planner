import React, { useState } from 'react';

const ProfileEditModal = ({isOpen,onClose,oldData}) => {
    const [userdata,setUserData]=useState(oldData);
    if(!isOpen)return null;
  return (
    <>
     <div className=' inset-0 fixed bg-black/70 flex justify-center items-center'>
       <div className='border w-1/2 min-h-7/10 mt-10 bg-white'>
       <div className='text-xl flex justify-between p-3 border-b-2'><h1 className='font-bold'>Edit Profile</h1>
       <button onClick={onClose}>close</button>
       </div>

       </div>
     </div>
    </>
  )
}

export default ProfileEditModal