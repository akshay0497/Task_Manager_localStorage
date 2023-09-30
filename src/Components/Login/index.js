import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    
    if (localStorage.getItem("email") === null) {
      localStorage.setItem("email", email, {role:"admin"});
      console.log("Congrats!!!! you are registered as a admin");
    } 
    else if (localStorage.getItem("email") !== email) {
      localStorage.setItem("email", email);
      console.log("Woo, you are registered as an employee");
    }
  };

  return (
    <div className="h-screen bg-gradient-to-r from-red-500 via-pink-500 to-purple-400">
      <div className="grid grid-cols-2 px-20 pt-44 ">
        <h1 className="text-center font-medium text-white my-5 text-3xl">
          LOGIN
        </h1>
        <div>
          <div>
            <label className="px-3 text-white text-lg">Email:</label>
            <input
              type="email"
              placeholder="Enter your Email id"
              required={true}
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-96 rounded px-3 h-10"
            />
          </div>

          <div className="mx-3 my-5">
            <button
              type="submit"
              className=" text-white bg-blue-400/80 px-4 py-2 font-semibold rounded-full mb-5"
              onClick={handleSubmit}
            >
              Login
            </button>
            <div className="grid grid-cols-2 mx-5 py-3 gap-10 border-t-2 text-white">
              <div>
                <p>Don't Have An Account? </p>
              </div>
              <div>
                <a href="/Signup" className="text-right">
                  SignUp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
