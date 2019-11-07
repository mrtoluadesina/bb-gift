import React, { useState } from "react";
import useForm from "react-hook-form";
import { connect } from "react-redux";
import "./index.scss";
import GiftCardForm from "./Form";
import { requestGiftCard, createGiftCard } from "./redux/action";

function Giftcard(props) {
  const { register, errors, handleSubmit } = useForm();
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({});

  const handleChange = e =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const onSubmit = () => {
    console.log("submitted")
    setStep(2)
};

  return (
    <div className="app-form">
      <div className="form">
        <div className="form-header">
          <h2>step by step guide</h2>
          <ul>
            <li>Step 1: Fill out details of voucher beneficiary.</li>
            <li>Step 2: Select the amount of vouchers and pay.</li>
            <li>
              Step 3: Leave a lovely message… We’ll email them a voucher for the
              amount!
            </li>
          </ul>
        </div>
        {step === 1 && 
        <GiftCardForm
          register={register}
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          proceed={onSubmit}
        />}
        {step === 2 && "This is payment"}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  requestGiftCardHandler: payload => dispatch(requestGiftCard(payload)),
  createGiftCardHandler: (payload, token) =>
    dispatch(createGiftCard(payload, token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Giftcard);
