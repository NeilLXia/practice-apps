import React from 'react';

export function AddressItem({ id , addressItem }) {
  const { firstname, lastname, address, city, state, zip } = addressItem;

  return (
    <div id={`item-${id}`} className="address-item">
      <div className="address-item-content">
          <div className="description-text">{ firstname } { lastname }</div>
          <div className="small-text">{ address }</div>
          <div className="small-text">{ city }, { state } { zip }</div>
        </div>
    </div>
  )
};