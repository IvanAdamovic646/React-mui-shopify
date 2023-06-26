import { useState, useEffect } from 'react';
import { commerce } from "./lib/commerce";
import {
  CartDrawer,
  Products,
  Navbar,
  Hero,
  Newsletter,
  Footer,
  FooterInfo,
} from "./components";
import { MemoryRouter } from 'react-router-dom';

import { CssBaseline } from "@material-ui/core";

type Product = {
  active: boolean,
  assets: Array<any>,
  attributes: Array<any>,
  categories: Array<any>,
  checkout_url: any,
  collects: any,
  conditionals: any,
  created: number,
  description: string,
  extra_fields: Array<any>,
  has: any,
  id: string,
  image: any,
  inventory: any,
  is: any,
  media: any,
  meta: any,
  name: string,
  permalink: string,
  price: any,
  related_products: Array<any>,
  seo: any,
  sku: any,
  sort_order: number,
  thank_you_url: any,
  updated: number,
  variant_groups: Array<any>
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartList, setCartList] = useState<any>({});
  const [openCart, setOpenCart] = useState(false);

  const fetchProducts = async () => {
    //response:
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    //response:
    const cart = await commerce.cart.retrieve();
    setCartList(cart);
    //or setCartList(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId: string, quantity: number) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCartList(cart);
    setOpenCart(true);
  };

  const handleUpdateCartQty = async (productId: string, quantity: number) => {
    // const response = await commerce.cart.update(productId, { quantity });
    // setCartList(response.cart)
    // same thing as:
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCartList(cart);
  };

  const handleRemoveFromCart = async (productId: string) => {
    const { cart } = await commerce.cart.remove(productId);

    setCartList(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCartList(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  return (
    <div className="App">
      <MemoryRouter>
        <div>
          <CssBaseline />
          <Navbar totalItems={cartList.total_items} setOpenCart={setOpenCart} />
          <CartDrawer
            cart={cartList}
            handleUpdateCartQty={handleUpdateCartQty}
            handleRemoveFromCart={handleRemoveFromCart}
            handleEmptyCart={handleEmptyCart}
            openCart={openCart}
            setOpenCart={setOpenCart} />
          <Hero />
          <Newsletter />
          <Products products={products} onAddToCart={handleAddToCart} />
          <FooterInfo />
          <Footer />
        </div>
      </MemoryRouter>
    </div>
  );
}

export default App;
