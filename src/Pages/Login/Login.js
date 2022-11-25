import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/login-pic.webp";
import { FcGoogle } from "react-icons/fc";

import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl text-center font-bold">Login </h1>
          <form onSubmit={handleSubmit(handleLogin)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email")}
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password")}
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <select {...register("category", { required: true })}>
                <option value="">Select...</option>
                <option value="A">Seller</option>
                <option value="B">Buyer</option>
              </select>
            </div>
            <div>{/* <p>{error}</p> */}</div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>

            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider">OR</div>
            </div>

            <div>
              <button className="btn btn-primary bg-secondary w-full">
                <FcGoogle className="text-2xl"></FcGoogle> Login with Google
              </button>
            </div>
          </form>
          <p className="text-center">
            New to this site ?
            <Link to="/register" className="text-primary font-bold mx-2 ">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
