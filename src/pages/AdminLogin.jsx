import axios from "axios";
import { useState } from "react";
import { MdAdminPanelSettings, MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/admin/login",
        form,
      );

      alert("Login Successful!");
      localStorage.setItem("token", res.data.token);
      navigate("/admin/dashboard");
    } catch (err) {
      alert("Invalid Credentials!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-400">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-xl"
      >
        <h2 className="text-2xl border-b-2 pb-1 border-b-emerald-600 justify-center flex items-center gap-1 font-bold text-center mb-6 text-emerald-600">
          <MdAdminPanelSettings />
          ADMIN LOGIN
        </h2>

        <div>
          <label
            className="text-lg flex items-center gap-1 text-emerald-600"
            htmlFor=""
          >
            <MdEmail />
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            required
          />
        </div>

        <div>
          <label
            className="text-lg flex items-center gap-1 text-emerald-600"
            htmlFor=""
          >
            <RiLockPasswordFill />
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            required
          />
        </div>

        <button className="w-full font-medium cursor-pointer hover:bg-blue-500 bg-blue-700 text-white py-3 rounded">
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
