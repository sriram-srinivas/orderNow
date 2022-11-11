import React, { useEffect, useState, useRef } from "react";
import Category from "./Category";
const LazyMenu = (props) => {
  const [menu, setMenu] = useState([]);
  const checkIndex = useRef(0);
  useEffect(() => {
    const data = [
      {
        id: 1,
        name: "Pizza",
        subCategory: [
          {
            id: 1.1,
            name: "Veg Pizza",
            items: [
              { id: 1.11, name: "Veg Paradise", unitPrice: "3.00" },
              { id: 1.12, name: "Margherita", unitPrice: "2.00" },
              { id: 1.13, name: "Triple Cheese", unitPrice: "1.50" }
            ]
          },
          {
            id: 1.2,
            name: "Non-Veg Pizza",
            items: [
              { id: 1.21, name: "Pepperoni", unitPrice: "3.50" },
              { id: 1.22, name: "Chicken Tandoori", unitPrice: "2.75" },
              { id: 1.23, name: "Double chicken", unitPrice: "3.50" }
            ]
          }
        ]
      },
      {
        id: 2,
        name: "Burger",
        subCategory: [
          {
            id: 2.1,
            name: "Veg Burger",
            items: [
              { id: 2.11, name: "Krisper", unitPrice: "0.50" },
              { id: 2.12, name: "Zinger", unitPrice: "1.00" },
              { id: 2.13, name: "Maharaja", unitPrice: "2.50" }
            ]
          },
          {
            id: 2.2,
            name: "Non-Veg Burger",
            items: [
              { id: 2.21, name: "Chicken Krisper", unitPrice: "1.50" },
              { id: 2.22, name: "Chicken Zinger", unitPrice: "2.00" },
              { id: 2.23, name: "Chicken & Meat burger", unitPrice: "3.00" }
            ]
          }
        ]
      },
      {
        id: 3,
        name: "Subs & Salads",
        subCategory: [
          {
            id: 3.1,
            name: "Veg Sub/Salad",
            items: [
              { id: 3.11, name: "Corn & Peas", unitPrice: "1.75" },
              { id: 3.12, name: "Paneer Tikka", unitPrice: "2.10" },
              { id: 3.13, name: "Aloo Patty", unitPrice: "2.10" },
              { id: 3.14, name: "Chatpata Channa", unitPrice: "1.50" }
            ]
          },
          {
            id: 3.2,
            name: "Non-Veg Subs",
            items: [
              { id: 3.21, name: "Pepperoni", unitPrice: "2.50" },
              { id: 3.22, name: "Chicken Patty", unitPrice: "1.75" },
              { id: 3.23, name: "Egg kalaki", unitPrice: "0.50" }
            ]
          }
        ]
      },
      {
        id: 4,
        name: "Briyani",
        subCategory: [
          {
            id: 4.1,
            name: "Veg Briyani",
            items: [
              { id: 4.11, name: "Mixed Veg Briyani", unitPrice: "1.75" },
              { id: 4.12, name: "Special Briyani", unitPrice: "2.10" },
              { id: 4.13, name: "kashmiri Briyani", unitPrice: "2.10" }
            ]
          },
          {
            id: 4.2,
            name: "Non-Veg briyani",
            items: [
              { id: 4.21, name: "Chicken sukka Briyani", unitPrice: "2.50" },
              { id: 4.22, name: "Chicken 65 Briyani", unitPrice: "1.75" },
              { id: 4.23, name: "Egg Briyani", unitPrice: "0.50" },
              { id: 4.24, name: "Mutton Briyani", unitPrice: "1.50" }
            ]
          }
        ]
      }
    ];
    for (let i = 5; i < 1000; i++) {
      data.push({
        ...data[0],
        id: i
      });
    }
    setMenu(data);
  }, []);
  return (
    <div className="menuPanel">
      {menu.map((category, index) => (
        <Category
          key={category.id}
          {...category}
          checkFlag={
            checkIndex.current + 3 >= index && checkIndex.current - 3 <= index
          }
          checkIndex={checkIndex.current}
          rowIndex={index}
        />
      ))}
    </div>
  );
};

export default LazyMenu;
