import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/images/login-pic.webp";

import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (data) => {
    setRegisterError("");

    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        updateUser(data.name);
      })
      .then(() => {
        const user = {
          email: data.email,
          name: data.name,
          role: data.category,
        };

        fetch("https://y-alpha-ten.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              navigate("/");
              reset();
              toast("User Created Successfully");
            }
          });
      })
      .catch((error) => {
        setRegisterError(error.message);
      })

      .catch((error) => {
        console.log(error);
        setRegisterError(error.message);
      });
  };

  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl text-center font-bold">Register </h1>
          <form onSubmit={handleSubmit(handleRegister)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", {
                  required: "Name is required",
                })}
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
              />
              {errors.name && (
                <p className="text-red-600">{errors.name?.message}</p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: "Email Address is required",
                })}
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 character or longer",
                  },
                })}
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}
            </div>
            <div className="form-control">
              <select {...register("category")}>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
            </div>
            {registerError && <p className="text-red-600">{registerError}</p>}
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Register"
              />
            </div>
          </form>
          <p className="text-center">
            Already have an account
            <Link to="/login" className="text-primary font-bold mx-2 ">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
