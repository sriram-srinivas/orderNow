import React, { useEffect, useState } from "react";

const menuItem = (props) => {
  const { name, unitPrice } = props;
  return (
    <div className="itemPanel">
      <label className="itemLabel">{name}</label>
      <label className="itemPrice">{unitPrice}</label>
    </div>
  );
};

export default menuItem;
