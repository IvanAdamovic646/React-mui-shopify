import {
  Typography,
  Container,
  Grid,
} from "@material-ui/core";

import useStyles from "./styles";

const Footer = () => {
  const classes : any = useStyles();

  return (
    <section id="footer" className={classes.grow}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
          justifyContent="center"
          // className={classes.footerContainer}
        >
          <Grid item>
            <Typography
              variant="h6"
              className={classes.title}
              style={{ fontWeight: "500" }}
            >
              &copy; 2021 Ivan's Store
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Footer;
