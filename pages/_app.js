import "../styles/globals.css";
import React, { useState, useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { store } from "../store/store";
import { Provider } from "react-redux";
import LoadingBar from "react-top-loading-bar";
import { useRouter } from "next/router";

const App = ({ Component, pageProps, session }) => {
  const router = useRouter();
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const [progress, setProgress] = useState(0);

  const checkStorage = (key) => {
    const storedData = localStorage.getItem(key);
    if (!storedData) console.log("Local storage is empty");
  };

  // useEffect(() => {
  //  // when app loaded
  //  checkStorage('cart')
  //   // when storage updated
  //   const handler = ({key}) => checkStorage(key);
  //   window.addEventListener('storage', handler);
  //   return () => window.removeEventListener('storage', handler);
  // }, []);

  useEffect(() => {
    router.events.on("routeChangeStart", () => setProgress(40));
    router.events.on("routeChangeComplete", () => setProgress(100));
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
        saveCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
  }, []);
  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    console.log(myCart);
    let subt = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(subt);
  };
  const clearCart = () => {
    setCart({});
    saveCart({});
    localStorage.clear();
    console.log("Cleared", checkStorage("myData"));
  };
  const addtocart = (itemCode, qty, price, name, size, variant, img) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, variant, img };
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = JSON.parse(JSON.stringify(cart));
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode];
    }
    setCart(newCart);
    saveCart(newCart);
  };
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <LoadingBar
          color="indigo"
          waitingTime={400}
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Navbar
          key={subTotal}
          cart={cart}
          addtocart={addtocart}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
          subTotal={subTotal}
        />
        <Component
          cart={cart}
          addtocart={addtocart}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
          subTotal={subTotal}
          {...pageProps}
        />
        <Footer />
      </SessionProvider>
    </Provider>
  );
};

export default App;
