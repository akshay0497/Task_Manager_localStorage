import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handle = (e) => {
    e.preventDefault();
    localStorage.setItem("Email", email);
    localStorage.setItem("Password", pwd);
  };

  const [firstTime, setFIrstTIme] = useState(1);

  return (
   <div className="h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
     <div className="grid grid-cols-2 px-20 py-44 ">
      <div className="my-10 text-white">
        <h1 className="text-lg text-center">XYZ, Welcome you all</h1>
        <p className="font-semibold leading-10 text-base text-center p-5">
          It helps you connect and share with the people in your life.
        </p>
      </div>
      <div className="">
        <div className="my-5 ">
          <label className="mx-3 text-white font-semibold text-base">
            Email:
          </label>
          <input
            type="email"
            placeholder="Enter your email id"
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-96 rounded h-10 p-2 ml-7"
          />
        </div>

        <div className="my-5">
          <label className="mx-3 text-white font-semibold text-base">
            Password:
          </label>
          <input
            type="password"
            placeholder="Please type your password"
            maxLength={8}
            required={true}
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            className="w-96 rounded h-10 p-2"
          />
        </div>
        <div className="m-4 p-1 w-fit rounded-full ">
          <button
            type="submit"
            onClick={handle}
            className="block text-white bg-blue-500 px-4 py-2 font-semibold rounded-full "
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
   </div>
  );
};

export default SignUp;
