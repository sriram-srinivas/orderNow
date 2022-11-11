import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
const SubCategory = (props) => {
  const { name, items } = props;
  return (
    <div className="subCategoryPanel">
      <h4 className="subCategoryHeading">{name}</h4>
      {items.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default SubCategory;
