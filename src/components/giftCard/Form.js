import React from "react";
import { Input, TextArea } from "../Input";

const GiftCardForm = props => (
  <form onSubmit={props.handleSubmit(props.proceed)}>
    <fieldset>
      <legend>Recipient's Details</legend>
      <Input
        type="text"
        placeholder="Enter your name ..."
        name="name"
        onChange={props.handleChange}
        ref={props.register({
          required: true,
          pattern: {
            value: /^[a-zA-Z- ]{3,}$/i,
            message: "Names cannot contain numbers and special characters"
          }
        })}
      />
      <span style={{ color: "red", fontSize: "12px" }}>
        {props.errors.name && props.errors.name.message}
      </span>
      <Input
        type="text"
        placeholder="Enter your phone number ..."
        name="phone"
        onChange={props.handleChange}
        ref={props.register({
          required: true,
          pattern: {
            value: /^0[0-9]{10,10}$/m,
            message: "Invalid phone number"
          }
        })}
      />
      <span style={{ color: "red", fontSize: "12px" }}>
        {props.errors.phone && props.errors.phone.message}
      </span>
      <Input
        type="text"
        placeholder="Enter your email"
        name="email"
        onChange={props.handleChange}
        ref={props.register({
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Invalid Email Address"
          }
        })}
      />
      <span style={{ color: "red", fontSize: "12px" }}>
        {props.errors.email && props.errors.email.message}
      </span>
    </fieldset>
    <fieldset>
      <legend>Amount</legend>
      <Input
        type="number"
        placeholder="How much? ..."
        name="amount"
        onChange={props.handleChange}
        ref={props.register({
          required: true,
          pattern: {
            value: /^[0-9]{4,}/i,
            message: "Enter a Valid Number"
          }
        })}
      />
      <span style={{ color: "red", fontSize: "12px" }}>
        {props.errors.amount && props.errors.amount.message}
      </span>
    </fieldset>
    <fieldset>
      <legend>Message to Recipient</legend>
      <TextArea
        rows="5"
        placeholder="Enter your message ..."
        name="message"
        onChange={props.handleChange}
        ref={props.register({
          required: true,
          message: "You have to enter a message"
        })}
      />
      <span style={{ color: "red", fontSize: "12px" }}>
        {props.errors.message && props.errors.message.message}
      </span>
    </fieldset>
    <fieldset>
      <legend>Sender's Details</legend>
      <Input
        type="text"
        placeholder="Enter your name ..."
        name="senderName"
        onChange={props.handleChange}
        ref={props.register({
          required: true,
          pattern: {
            value: /^[a-zA-Z- ]{3,}$/i,
            message: "Names cannot contain numbers and special characters"
          }
        })}
      />
      <span style={{ color: "red", fontSize: "12px" }}>
        {props.errors.senderName && props.errors.senderName.message}
      </span>
      <Input
        type="text"
        placeholder="Enter your phone number"
        name="senderPhone"
        onChange={props.handleChange}
        ref={props.register({
          required: true,
          pattern: {
            value: /^[0-9]{4,}/i,
            message: "Enter a Valid Number"
          }
        })}
      />
      <span style={{ color: "red", fontSize: "12px" }}>
        {props.errors.senderPhone && props.errors.senderPhone.message}
      </span>
      <Input
        type="text"
        placeholder="Enter your email"
        name="senderEmail"
        onChange={props.handleChange}
        ref={props.register({
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Invalid Email Address"
          }
        })}
      />
      <span style={{ color: "red", fontSize: "12px" }}>
        {props.errors.email && props.errors.email.message}
      </span>
    </fieldset>
    <input type="submit" className="btn orange-bg" value="Proceed" />
  </form>
);

export default GiftCardForm;
