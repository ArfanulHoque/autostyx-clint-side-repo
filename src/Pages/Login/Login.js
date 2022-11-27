import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login-pic.webp";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { signIn, providerLogin } = useContext(AuthContext);

  const [loginError, setLoginError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    providerLogin(googleProvider).then((result) => {
      const user = result.user;
      console.log(user);
      navigate(from, { replace: true });
    });
  };

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
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
                {...register("email", {
                  required: "Email Address is required",
                })}
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
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
              />
              {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}
            </div>

            <div>
              {loginError && <p className="text-red-600">{loginError}</p>}
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>

            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider">OR</div>
            </div>

            <div>
              <button
                onClick={handleGoogleLogin}
                className="btn btn-primary bg-secondary w-full"
              >
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
