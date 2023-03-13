import React, { useState, useEffect } from 'react';
import { AddressItem } from "./addressItem.jsx";
import { StoreDropdown } from "./storeDropdown.jsx";
import { AddAddress } from "./addAddress.jsx";

let tempAddress =  {
  firstname: "Firstname",
  lastname: "Lastname",
  address: "123 Address Street",
  city: "City",
  state: "ST",
  zip: 45678
}

let tempStore =  {
  storename: "Big Mall",
  address: "123 Address Boulevard",
  city: "City",
  state: "ST",
  zip: 67890
}

export function AddressInput({ shippingOption }) {

  const [addressData, setAddressData] = useState([tempAddress, tempAddress, tempAddress])
  const [storeData, setStoreData] = useState([tempStore, tempStore, tempStore, tempStore, tempStore, tempStore])

  let addressListing = <></>;
  let descriptiveText = "Please select an option above.";

  if (shippingOption === "shipToAddress-button") {
    addressListing = addressData.map((address, id) =>
      <AddressItem key={ id } id={ id } addressItem={ address }/>
    );
    addressListing.push(<AddAddress key={ addressData.length } id={ addressData.length }/>)
    descriptiveText = "Please select an existing address or add a new one.";
  }

  if (shippingOption === "pickUpInStore-button") {
    addressListing = <StoreDropdown storeData={ storeData }/>
    descriptiveText = "Please select a store address.";
  }

  let addressComponent = (
  <div className="span-two">
    <div className="component-header">
      <h4>Shipping Address</h4>
      <div className="description-text">{ descriptiveText }</div>
    </div>
    <div id="address-listing">
      { addressListing }
    </div>
  </div>
  )

  return addressComponent;
};