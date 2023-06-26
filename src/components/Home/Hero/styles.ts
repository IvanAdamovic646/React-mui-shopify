import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

import backgroundHero from "../../../assets/heroImg.jpg";

const useStyle = makeStyles((theme: Theme) => createStyles({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    // fontFamily: "Nunito",
    textDecoration: "none",
    // backgroundColor: "#000000",
    // backgroundImage: `url(${"../../../assets/heroImg.jpg"})`,
    backgroundImage: "url(" + backgroundHero + ")",
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    // width: `calc(100vw + 48px)`,
    // margin: -24,
    // padding: 24,
  },
  heroTitle: {
    display: "flex",
    marginBottom: theme.spacing(0),
    color: "#ffffff",
  },
  heroDescription: {
    display: "flex",
    marginBottom: theme.spacing(5),
    color: "#ffffff",
  },
  ctaWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    // margin: theme.spacing(5),
  },
  ctaButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    padding: theme.spacing(3),
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
    color: "#ffffff",
    borderColor: "#ffffff",
  },
}));

export default useStyle;