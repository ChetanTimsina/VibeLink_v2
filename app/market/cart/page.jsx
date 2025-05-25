"use client";
import "./local.css";
import "../local.css";
import { useEffect } from "react";
const Cart = () => {
  useEffect(() => {
    let cart = document.querySelector("#Cart");
    cart.innerHTML = ""; // ✅ Clear previous content

    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    if (cartItems.length === 0) {
      // ✅ Display noItem image if cart is empty
      let noItemImage = document.createElement("img");
      noItemImage.src = "/Images/marketImages/noItem.jpg";
      noItemImage.style.width = "100%"; // Full width
      noItemImage.alt = "No Items in Cart";
      noItemImage.style.border = "4px solid black";

      cart.appendChild(noItemImage);
    } else {
      cartItems.forEach((item, index) => {
        let wrapper = document.createElement("div");
        wrapper.innerHTML = item;

        let removeButton = document.createElement("button");
        removeButton.innerText = "Remove";
        removeButton.classList.add("remove-button-class");
        removeButton.addEventListener("click", () => {
          removeCartItem(index);
        });

        wrapper.appendChild(removeButton);
        cart.appendChild(wrapper);
      });
    }
    function removeCartItem(index) {
      let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      cartItems.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      window.location.reload();
    }
  });
  return (
    <main id="newMain">
      <div
        id="Cart"
        style={{ margin: "0 auto 5vw", width: "80%", padding: "5vw" }}
      ></div>
    </main>
  );
};

export default Cart;
