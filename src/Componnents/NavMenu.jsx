import React from "react";
import NavElement from "./NavElement";
import "./NaveMenu.css";

let arr = [
  { name: "Home" },
  {
    name: "Services",
    drop: ["For entrepreneurs", "For students", "For hobbyists"]
  },
  { name: "Contact" }
];

export default function NavMenu() {
  return (
    <div>
      <ul className="menu">
        {arr.map(el => (
          <NavElement array={el} />
        ))}{" "}
      </ul>
    </div>
  );
}
