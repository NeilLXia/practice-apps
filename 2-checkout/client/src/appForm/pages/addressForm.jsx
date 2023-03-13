import React, { useState, useEffect } from 'react';
import { AddressInput } from '../components/addressInput.jsx';
import { NewAddressForm } from '../components/newAddressForm.jsx';
import $ from "jquery";

let clearSelectors = () => {
  $(document.getElementById("shipToAddress-button")).removeClass("shipping-selected");
  $(document.getElementById("pickUpInStore-button")).removeClass("shipping-selected");
}

export function AddressForm() {
  const [shippingOption, setShippingOption] = useState("");

  let selectShippingOption = (event) => {
    clearSelectors();
    setShippingOption(event.target.id);
    $(event.target).addClass("shipping-selected");
  }

  return (
    <div id="form-login" className="form-container">
      <div className="container-header">
        <h3>Delivery Information</h3>
      </div>
      <div className="form-element shippingoption-element">
        <div className="span-two"><h4>Shipping Options</h4></div>
        <button id="shipToAddress-button" onClick={event => selectShippingOption(event)}>Ship to Address</button>
        <button id="pickUpInStore-button" onClick={event => selectShippingOption(event)}>Pick Up in Store</button>
      </div>
      <br></br>
      <div className="form-element address-element">
        <AddressInput shippingOption={ shippingOption }/>
      </div>
      <br></br>
      <div className="form-element">
        <button id="continue-button">CONTINUE</button>
      </div>
      <NewAddressForm />
    </div>
  )
};