import React from 'react';

export function StoreDropdown({ storeData }) {
  return (
    <div className="span-two">
      <select id="stores-dropdown" name="stores">
        <option value="" key="">--Please Select A Store--</option>
        {storeData.map((store, id) =>
          <option value={ id } key= { id }>{ store.storename }: { store.address }, { store.city }, { store.state } { store.zip }</option>
        )}
      </select>
    </div>
  )
};