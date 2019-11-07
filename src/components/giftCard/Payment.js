import React from "react";
import PaystackButton from "react-paystack";
import {PAY_KEY} from '../../common/api';

function GiftCardPayment(props) {
  return (
    <div>
      <PaystackButton
        text="Proceed to Payment"
        class="payButton"
        disabled={true}
        embed={true}
        paystackkey={PAY_KEY}
        tag="button"
        {...props}
      />
    </div>
  );
}

export default GiftCardPayment;
