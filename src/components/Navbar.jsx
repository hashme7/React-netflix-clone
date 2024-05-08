import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Navbar() {
  let { user,logOut } = UserAuth();
  const navigate = useNavigate();
  const handleLogout = async()=>{
    try{
      await logOut();
      navigate('/');
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div className="absolute w-full p-4 flex items-center justify-between z-50">
      <Link to="/">
        <h1 className="uppercase text-red-600 font-nsans-bold cursor-pointer text-5xl">
          netflix
        </h1>
      </Link>
      {user?.email ?(
      <div>
        <Link to="/Profile">
          <button className="capitalize pr-4">Profile</button>
        </Link>
          <button onClick={handleLogout} className="capitaize bg-red-600 px-6 py-2 rounded cursor-pointer">
            logout
          </button>
      </div>
      ):(
        <div>
        <Link to="/Login">
          <button className="capitalize pr-4">Login</button>
        </Link>
        <Link to='/Signup'>
          <button className="capitaize bg-red-600 px-6 py-2 rounded cursor-pointer">
            Signup
          </button>
        </Link>
      </div>
      )}
      
    </div>
  );
}

export default Navbar;
