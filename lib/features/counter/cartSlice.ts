import { RootState } from "@/lib/store";
import {
    createSelector,
    createSlice,
    PayloadAction,
  } from "@reduxjs/toolkit";

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}
export interface CartItem {
    product: Product,
    quantity: number,
}
export interface CartState {
    cartItems: CartItem[];
    userId: string | null; // 🔹 Ajout du userId
}
const initialState: CartState = {
    cartItems: [],
    userId: null, // 🔹 Initialisation
};
  
  export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      setUser: (state, action: PayloadAction<string | null>) => {
        state.userId = action.payload; // 🔹 Mise à jour du userId dans Redux
      },
      increment: (state, action: PayloadAction<Product>) => {
        const cartItem = state.cartItems.find(
          (el) => el.product.id === action.payload.id
        );
        if (cartItem) cartItem.quantity++;
        else {
          state.cartItems.push({
            product: action.payload,
            quantity: 1,
          });
        }
      },
  
      decrement: (state, action: PayloadAction<Product>) => {
        const cartItem = state.cartItems.find(
          (el) => el.product.id === action.payload.id
        );
        if (cartItem) {
          cartItem.quantity--;
          if (cartItem.quantity === 0) {
            state.cartItems = state.cartItems.filter(
              (el) => el.product.id !== action.payload.id
            );
          }
        }
      },
      removeItem: (state, action: PayloadAction<number>) => {
        state.cartItems = state.cartItems.filter(
          (el) => el.product.id !== action.payload
        );
      },
      
      clearCart: (state) => {
        state.cartItems = [];
      },
    },
  });
  
  const cartItems = (state: RootState) =>
    state.cart.cartItems;
  
  export const productQtyInCartSelector = createSelector(
    [cartItems, (cartItems, productId: number) => productId],
    (cartItems, productId) =>
      cartItems.find((el) => el.product.id === productId)?.quantity
  );
  
  export const totalCartItemsSelector = createSelector(
    [cartItems],
    (cartItems) =>
      cartItems.reduce(
        (total: number, curr: CartItem) =>
          (total += curr.quantity),
        0
      )
  );
  export const TotalPriceSelector = createSelector(
    [cartItems],
    (cartItems) =>
      cartItems.reduce(
        (total: number, curr: CartItem) =>
          (total += curr.quantity * curr.product.price),
        0
      )
  );
  
  export const { setUser, increment, decrement, removeItem, clearCart } = cartSlice.actions;
  // Sélecteur pour récupérer l'utilisateur associé au panier
  export const selectUserId = (state: RootState) => state.cart.userId
  export default cartSlice.reducer;