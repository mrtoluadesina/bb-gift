import React from 'react';
import useForm from 'react-hook-form';
import {Input} from '../../components/Input';

export default function LoginForm(props) {
  const {register, handleSubmit, errors} = useForm();
  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <span style={{ color: "red", fontSize: "12px" }}>
        {errors.email && errors.email.message}
      </span>
      <Input
        type="text"
        placeholder="Enter your email"
        name="email"
        onChange={props.handleChange}
        ref={register({
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Invalid Email Address"
          }
        })}
      />
      <span style={{ color: "red", fontSize: "12px" }}>
        {errors.password && errors.password.message}
      </span>
      <Input
        type="password"
        placeholder="Enter your password"
        name="password"
        onChange={props.handleChange}
        ref={register({
          required: true,
          pattern: {
            value: /^(?=.*[a-z])(?=.{8,})/g,
            message: "Invalid Password - password needs to be atleast 8 characters remember"
          }
        })}
      />
      <input type="submit" className="btn orange-bg" value="Login" />
    </form>
  )
}