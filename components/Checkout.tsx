"use client";

import { useDispatch, useSelector } from "react-redux";
import { clearCart, selectUserId } from "@/lib/features/counter/cartSlice";
import { RootState } from "@/lib/store";
import { useState } from "react";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";

const Checkout = () => {
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId) || "cm6tfh5cj000a8oju1gsa2k6m";
  const cart = useSelector((state: RootState) => state.cart);
  const [loading, setLoading] = useState(false);
  const totalPrice = cart.cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  console.log(userId)

  if(totalPrice === 0) {
    redirect("/list")
  }
  
  const handleCheckout = async () => {
    if (cart.cartItems.length === 0) {
      alert("Votre panier est vide !");
      return;
    }

    setLoading(true);

    if (!userId) {
      alert("Vous devez être connecté pour passer commande.");
      return;
    }
    try {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cartItems: cart.cartItems,
        totalPrice: cart.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0),
        userId,
      }),
    });

      const data = await response.json();

      if (response.ok) {
        alert(`Commande passée avec succès ! Numéro de commande : ${data.orderId}`);
        dispatch(clearCart()); // Vider le panier après succès
      } else {
        alert(data.error || "Erreur lors de la commande.");
      }
    } catch (error) {
      alert("Erreur réseau. Veuillez réessayer.");
      console.error("Erreur lors du checkout :", error);
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-xl font-semibold">Total : {totalPrice.toFixed(2)} €</h2>
      <Button className="hover:scale-110 transition ease-linear scale-105" onClick={handleCheckout} disabled={loading || cart.cartItems.length === 0}>
        {loading ? "Traitement..." : "Passer la commande"}
      </Button>
    </div>
  );
};

export default Checkout;
