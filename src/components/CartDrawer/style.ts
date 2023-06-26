import { Theme, createStyles, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme: Theme) => createStyles({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: "5%",
  },
  emptyButton: {
    minWidth: "150px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "5px",
    },
    [theme.breakpoints.up("xs")]: {
      marginRight: "20px",
    },
  },
  checkoutButton: {
    minWidth: "150px",
  },
  link: {
    textDecoration: "none",
  },
  cardDetails: {
    display: "flex",
    marginTop: "10%",
    width: "100%",
    justifyContent: "space-between",
  },
  CartDrawerContainer: {
    position: "fixed",
    display: "flex",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    padding: "0",
    zIndex: -1,
    maxWidth: "100%!important"
  },
  CartDrawerContainerOpen: {
    position: "fixed",
    display: "flex",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    padding: "0",
    zIndex: 1200,
    maxWidth: "100%!important"
  },
  CartDrawerOverlay: {
    width: "100%",
    backgroundColor: "#000",
    opacity: "0",
    transform: "translateX(100%)",
    transition: "all 0.3s"
  },
  CartDrawerOverlayOpen: {
    width: "100%",
    backgroundColor: "#000",
    opacity: "0.5",
    transform: "translateX(0)",
    transition: "all 0.3s"
  },
  CartDrawerContent: {
    position: "absolute",
    top: "0",
    right: "0",
    maxWidth: "500px",
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    overflow: "auto",
    transform: "translateX(100%)",
    transition: "all 0.3s"
  },
  CartDrawerContentOpen: {
    position: "absolute",
    top: "0",
    right: "0",
    maxWidth: "500px",
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    overflow: "auto",
    transform: "translateX(0)",
    transition: "all 0.3s"
  }
}));

export default useStyle;