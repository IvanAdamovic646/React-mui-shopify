import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
  ThemeProvider,
  CssBaseline,
  createMuiTheme,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";

import logo from "../../assets/store.png";
import useStyles from "./styles";
import ScrollChange from "./ScrollChange";

type NavbarProps = {
  totalItems: Array<any>,
  setOpenCart: any
}

const Navbar = ({ totalItems, setOpenCart }: NavbarProps) => {
  const classes: any = useStyles();
  const theme = createMuiTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <ScrollChange>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
          <Toolbar>
            <Typography
              component={Link}
              to="/"
              variant="h6"
              className={classes.title}
              color="inherit"
            >
              <img
                src={logo}
                alt="My Store"
                height="25px"
                className={classes.image}
              />
              Ivan's Store
            </Typography>
            <div className={classes.grow} />
            <div className={classes.button}>
              <IconButton
                onClick={() => setOpenCart(true)}
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </ScrollChange>
      <div className={classes.toolbarMargin} />
    </ThemeProvider>
  );
};

export default Navbar;
