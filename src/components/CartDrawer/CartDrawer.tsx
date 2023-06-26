import { useState, useEffect } from 'react';
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

import useStyles from "./style";
import CartItem from "./CartItem/CartItem";

type CartDrawerProps = {
  cart: any,
  handleUpdateCartQty: any,
  handleRemoveFromCart: any,
  handleEmptyCart: any,
  openCart: any,
  setOpenCart: any
}

const CartDrawer = ({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
  openCart,
  setOpenCart
}: CartDrawerProps) => {

  const classes: any = useStyles();

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart,{" "}
      <Link to="/" className={classes.link}>
        start adding some!
      </Link>
    </Typography>
  );
  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item: any) => (
          <Grid item xs={12} sm={12} key={item.id}>
            <CartItem
              item={item}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
          >
            Empty Cart
          </Button>
          <Button
            component={Link}
            to="/checkout"
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  if (!cart.line_items) return <></>;
  return (
    <Container className={openCart ? classes.CartDrawerContainerOpen : classes.CartDrawerContainer}>
      <div className={openCart ? classes.CartDrawerOverlayOpen : classes.CartDrawerOverlay} onClick={() => setOpenCart(false)}></div>
      <Container className={openCart ? classes.CartDrawerContentOpen : classes.CartDrawerContent}>
        <div className={classes.toolbar} />
        <Typography className={classes.title} variant="h3" gutterBottom>
          Your Shopping Cart
        </Typography>
        {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
      </Container>
    </Container>
  );
};

export default CartDrawer;