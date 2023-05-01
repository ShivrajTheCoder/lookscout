import { detectSystemTheme } from '@/Utils/detectSystemTheme';
import InputComponent from '@/components/FormComponents/InputComponent';
import FormStageComponenet from '@/components/FormHeaderComponents/FormStageComponenet';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from "yup"
import { FaGreaterThan } from "react-icons/fa"
export default function Home() {
  const isDarkMode = detectSystemTheme();
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [errorValues, setErrorValues] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
  })
  const { name, email, password, confirmPassword } = inputValues;
  const { nameError, emailError, passwordError } = errorValues;
  const submitHandler = (e) => {
    e.preventDefault();
    const nameRegx = /[A-Za-z]+/;
    const emailRegx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    setErrorValues(prev => (
      {
        nameError: "",
        emailError: "",
        passwordError: "",
      }
    ))
    if (!nameRegx.test(name)) {
      setErrorValues(prev => ({
        ...prev,
        nameError: "Invalid name"
      }))
    }
    if (!emailRegx.test(email)) {
      setErrorValues(prev => ({
        ...prev,
        emailError: "Invalid email"
      }))
    }
    if (password.length < 5) {
      setErrorValues(prev => ({
        ...prev,
        passwordError: "password too short"
      }))
    }
    else if (password !== confirmPassword) {
      setErrorValues(prev => (({
        ...prev,
        passwordError: "passwords don't match"
      })))
    }
    console.log(inputValues, errorValues);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues(prev => ({
      ...prev,
      [name]: value
    }))
  }
  return (
    <main className='flex flex-col items-center pt-28 bg-[#FAFBFC]'>
      <div className='w-fit'>
        <FormStageComponenet />
        <form onSubmit={submitHandler} className='bg-white px-12 py-16'>
          <InputComponent
            id="name"
            name="name"
            type="text"
            label="Name"
            value={name}
            onChange={handleChange}
            placeholder="Enter Name"
          />
          <div>{nameError}</div>
          <InputComponent
            id="email"
            name="email"
            type="email"
            label="Email"
            value={email}
            onChange={handleChange}
            placeholder="Email Address"
          />
          <div>{emailError}</div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <InputComponent
              id="password"
              name="password"
              type="password"
              label="Password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
            />
            <InputComponent
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              label="ConfirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
            />
          </div>
          <div>{passwordError}</div>
          <div>
            <input type="checkbox" name="terms" id="terms" onChange={e => setAcceptTerms(e.target.checked)} />
            <label htmlFor="terms">I accept Terms and Privacy Policy</label>
          </div>
          <div>
            <button disabled={acceptTerms ? false : true} className={`flex justify-center items-center ml-auto rounded-md ${acceptTerms ? "bg-[#437EF7]" : "bg-gray-500"} text-white text-lg font-semibold px-3 py-2`}>Next <span className='ml-2'><FaGreaterThan size={15} /></span></button>
          </div>
        </form>
      </div>
    </main>
  )
}
