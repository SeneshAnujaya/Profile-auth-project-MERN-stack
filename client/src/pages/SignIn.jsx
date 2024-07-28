import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";
import { useDispatch, useSelector } from 'react-redux';
import OAuth from "../components/OAuth";


const SignIn = () => {
  const [formData, setFormData] = useState({});
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      // setLoading(true);
      // setError(false);
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      // setLoading(false);
   
      if(data.success === false) {
        // setError(true);
        dispatch(signInFailure(data));
        return
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      // setLoading(false);
      // setError(true);
      dispatch(signInFailure(error));
    }
  };

  return (
    <div className="h-[calc(100vh-4.05rem)] bg-slate-900">
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold m-7 text-slate-200">Sign In</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-600 p-3 rounded-lg text-white"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-600 p-3 rounded-lg text-white"
          onChange={handleChange}
        />
        <button className="bg-blue-900 text-white rounded-lg uppercase p-3 hover:placeholder-opacity-95 disabled:opacity-80" disabled={loading}>
          {loading ? "Loading...": "Sign In"}
        </button>
        <OAuth />
      </form>
      <div className="flex gap-2 mt-5">
        <p className="text-slate-200">Don't have an account?</p>
        <Link to="/sign-up">
          <span className="text-blue-300">Sign up</span>
        </Link>
      </div>
      <p className="text-red-400 mt-5">{error ? error.message || "Something went wrong" : ''}</p>
    </div>
    </div>
  );
};

export default SignIn;
