import React, { useState } from "react";
import useForm from "react-hook-form";
import { connect } from "react-redux";
import "./index.scss";
import {addTransition, removeTransition} from '../../helperFunctions/transition';
import GiftCardForm from "./Form";
import GiftCardPayment from "./Payment";
import GiftCardStatus from "./transactionStatus";
import {
  requestGiftCard,
  createGiftCard,
  handleChangeMethod
} from "./redux/action";

function Giftcard(props) {
  const { register, errors, handleSubmit } = useForm();
  const [step, setStep] = useState(1);
  const [transactionStatus, setTransactionStatus] = useState("");
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    message: "",
    senderName: "",
    senderEmail: "",
    senderPhone: ""
  });

  const handleChange = e =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const onProceed = async () => {
    const payload = {
      sender: {
        name: values.senderName,
        email: values.senderEmail,
        phone: values.senderPhone
      },
      amount: values.amount.toKobo(),
      giftCards: [
        {
          message: values.message,
          amount: values.amount.toKobo(),
          recipient: {
            name: values.senderName,
            email: values.senderEmail,
            phone: values.senderPhone
          }
        }
      ]
    };
    await props.requestGiftCardHandler(payload);
    addTransition('.giftcard-form','play-height');
    setStep(2);
  };

  const goBack = () => (
    <span className="back-btn"
      onClick={e => {
        e.preventDefault();
        removeTransition('.giftcard-form','play-height');
        setStep(step - 1);
      }}
    >
      ⇠
    </span>
  );

  const close = () => setStep(1);

  const getReference = () => localStorage.getItem("transactionId");

  const callback = async response => {
    addTransition('.giftcard-form','play-height');
    setStep(3);
    const payload = {
      transactionId: response.reference,
      giftCards: props.giftCards
    };
    const result = await props.createGiftCardHandler(payload);
    const { statusCode } = result;

    statusCode > 201
      ? setTransactionStatus("failed")
      : setTransactionStatus("success");
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
        <div className="giftcard-form">
          {step > 1 ? goBack() : ""}
          {step === 1 && (
            <GiftCardForm
              register={register}
              errors={errors}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              proceed={onProceed}
            />
          )}
          {step === 2 && (
            <GiftCardPayment
              success={false}
              callback={callback}
              close={close}
              reference={getReference()}
              amount={+localStorage.getItem("totalAmount")}
              email={values.senderEmail}
            />
          )}
          {step === 3 && (
            <GiftCardStatus>
              <h3>Transaction {transactionStatus}</h3>
            </GiftCardStatus>
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  isLoading: state.Giftcard.isLoading,
  giftCards: state.Giftcard.giftCards
});

const mapDispatchToProps = dispatch => ({
  giftCardInputChange: (index, name, value) =>
    dispatch(handleChangeMethod(index, name, value)),
  requestGiftCardHandler: payload => dispatch(requestGiftCard(payload)),
  createGiftCardHandler: (payload, token) =>
    dispatch(createGiftCard(payload, token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Giftcard);
