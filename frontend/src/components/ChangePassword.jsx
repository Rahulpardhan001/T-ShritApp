import { useState } from "react";
import { useDispatch } from "react-redux";
import { changepassword } from "../Thunk/authThunk";
import {useNavigate} from 'react-router-dom'
import { toast } from "react-toastify";
const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    // debugger;
    setError("");
    setSuccess("");
    
    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match.");
      return;
    }
  
  const res =  await dispatch(changepassword({ oldPassword, newPassword }));
  if(res.meta.requestStatus === "fulfilled"){
    setSuccess(res.payload.message);
    toast.success(res.payload.message)
    navigate('/')
    
  }else(
    setError(res.payload)
  )
setOldPassword('')
setNewPassword('')
setConfirmPassword('')
    // Handle password update logic here (e.g., API call)
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Change Password</h2>
      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
      {success && <p className="text-green-500 text-sm mb-3">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Old Password</label>
          <input
            type="password"
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">New Password</label>
          <input
            type="password"
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Confirm Password</label>
          <input
            type="password"
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
        >
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
