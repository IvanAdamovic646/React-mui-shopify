import { Theme, createStyles, makeStyles, fade } from "@material-ui/core";

const drawerWidth = 0;

const useStyle = makeStyles((theme: Theme) => createStyles({
  appBar: {
    boxShadow: "none",
    // borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    background: "none",
    // height:
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: `1em`,
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "2em",
    },
  },
  title: {
    flexGrow: 1,
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
  },
  image: {
    marginRight: "10px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  navbarContainer: {
    flexGrow: 1,
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
  },
  navbarItem: {
    // flexGrow: 1,
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
    marginRight: theme.spacing(2),
  },
}));

export default useStyle;