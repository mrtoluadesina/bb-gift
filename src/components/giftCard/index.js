import React from 'react';
import { Link, useHistory } from "react-router-dom";
import useForm from "react-hook-form";
import { Input, TextArea } from "../Input";

function Giftcard(props) {
  const {register, errors, handleSubmit} = useForm();
  return (
    <div className="app-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-header">
          <h2>step by step guide</h2>
          <ul>
            <li>Step 1: Fill our details of voucher beneficiary.</li>
            <li>Step 2: Select the amount of vouchers and pay.</li>
            <li>
              Step 3: Leave a lovely message… We’ll email them a voucher for the
              amount!
            </li>
          </ul>
        </div>
        <div className="giftcard-form">
          <fieldset>
            <legend>
              Receipient's Name
              <small>
                <Link to="/login">multiple receipients?</Link>
              </small>
            </legend>
            <Input
              type="text"
              placeholder="Enter your name ..."
              name="name"
              onChange={handleChange}
              ref={register({
                required: true,
                pattern: {
                  value: /^[a-zA-Z- ]{3,}$/i,
                  message: "Names cannot contain numbers and special characters"
                }
              })}
            />
            <span style={{ color: "red", fontSize: "12px" }}>
              {errors.name && errors.name.message}
            </span>
            <Input
              type="text"
              placeholder="Enter your phone number ..."
              name="phone"
              onChange={handleChange}
              ref={register({
                required: true,
                pattern: {
                  value: /^0[0-9]{10,10}$/m,
                  message: "Invalid phone number"
                }
              })}
            />
            <span style={{ color: "red", fontSize: "12px" }}>
              {errors.phone && errors.phone.message}
            </span>
            <Input
              type="text"
              placeholder="Enter your email"
              name="email"
              onChange={handleChange}
              ref={register({
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid Email Address"
                }
              })}
            />
            <span style={{ color: "red", fontSize: "12px" }}>
              {errors.email && errors.email.message}
            </span>
          </fieldset>
          <fieldset>
            <legend>Amount</legend>
            <Input
              type="number"
              placeholder="How much? ..."
              name="amount"
              onChange={handleChange}
              ref={register({
                required: true,
                pattern: {
                  value: /^[0-9]{4,}/i,
                  message: "Enter a Valid Number"
                }
              })}
            />
            <span style={{ color: "red", fontSize: "12px" }}>
              {errors.amount && errors.amount.message}
            </span>
          </fieldset>
          <fieldset>
            <legend>Message to Receipient</legend>
            <TextArea
              rows="5"
              placeholder="Enter your message ..."
              name="message"
              onChange={handleChange}
              ref={register({
                required: true,
                message: "You have to enter a message"
              })}
            />
            <span style={{ color: "red", fontSize: "12px" }}>
              {errors.message && errors.message.message}
            </span>
          </fieldset>
          <input type="submit" className="btn orange-bg" value="Proceed" />
        </div>
      </form>
    </div>
  )
}

export default Giftcard;