import React from 'react';

export function AddAddress({ id }) {
  return (
    <div id={`item-${id}`} className="address-item" onClick={addNewAddress}>
      <div className="address-item-content">
        <div className="description-text">+ New Address</div>
        <div className="small-text">Register a new</div>
        <div className="small-text">shipping address</div>
      </div>
    </div>
  )
};