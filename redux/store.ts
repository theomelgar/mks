import { Product, ProductCart } from '@/Interfaces/Produtos';
import { PayloadAction, configureStore, createSlice } from '@reduxjs/toolkit';


interface ProductState {
  products: ProductCart[]
 
}

const initialState: ProductState  = {
  products: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const productIsAlreadyInCart = state.products.some(product => product.id === action.payload.id)
      if (productIsAlreadyInCart) {
        state.products = state.products.map(product =>
          product.id === action.payload.id ?
            { ...product, quantity: product.quantity + 1 } : product)
            return
      }
      state.products = [...state.products, { ...action.payload, quantity: 1 }]     
    },
    increaseQuantityProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.map(product =>
        product.id === action.payload ?
          { ...product, quantity: product.quantity + 1 } : product)
    },
    decreaseQuantityProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.map(product =>
        product.id === action.payload ?
          { ...product, quantity: product.quantity - 1 } : product).filter(product => product.quantity > 0)
    },
    removeProductFromCart: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(product => product.id !== action.payload)
    },
    removeAllProductsFromCart: (state, action: PayloadAction<number>) => {
      state.products = [];
    }
  }
}) 

export const { addProduct, increaseQuantityProduct, decreaseQuantityProduct, removeProductFromCart,removeAllProductsFromCart } = cartSlice.actions	

const store = configureStore({
  reducer: {cart: cartSlice.reducer}
});

export default store;
