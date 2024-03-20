import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Input() {
  const [inputs, setInputs] = useState({});

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://mysterious-pocket-hare.cyclic.app/api/v1/users/save",
        inputs
      );
      console.log("Response:", response.data);
      navigate("/output");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const checkField = () => {
    if (!inputs.username) alert("Please enter all the Fields");
  };

  return (
    //<div className="bg-slate-900 md:h-screen h-full w-full flex items-center justify-center md:p-0 px-8 py-20">
      <div className="bg-slate-900 w-full flex items-center justify-center md:py-12 px-8 py-20">
      <form
        action=""
        className="flex md:flex-row flex-col justify-center items-center md:gap-60 gap-10"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-1 flex-col justify-center items-center gap-5">
          <span className="flex gap-5">
            <label htmlFor="username" className="text-white">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleChange}
              required
              placeholder="Enter Username"
              className="py-1 px-2"
            />
          </span>
          <span className="flex gap-5">
            <label htmlFor="language" className="text-white">
              Code Language
            </label>
            <select
              name="language"
              id="language"
              onChange={handleChange}
              className="py-1 px-5"
              required
            >
              <option value="null">Select Language</option>
              <option value="C++">C++</option>
              <option value="Java">Java</option>
              <option value="Python">Python</option>
              <option value="JavaScript">JavaScript</option>
            </select>
          </span>
          <span className="flex gap-5">
            <label htmlFor="stdin" className="text-white">
              Std Input
            </label>
            <input
              type="text"
              name="stdin"
              id="stdin"
              onChange={handleChange}
              placeholder="Enter Input for Code"
              className="py-1 px-2"
            />
          </span>
        </div>
        <div className="flex flex-1 flex-col justify-center items-center gap-3">
          <label htmlFor="code" className="text-white">
            Source Code
          </label>
          <textarea
            placeholder="Enter your code here..."
            name="code"
            id="code"
            onChange={handleChange}
            rows={25}
            cols={90}
            style={{ width: "100%", maxWidth: "600px" }} // Responsive width
          />
          <button
            className="border px-5 py-2 rounded-md text-white"
            onClick={checkField}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Input;
