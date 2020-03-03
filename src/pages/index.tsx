import * as React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { makeStyles, createStyles, Grid, Typography, Button, Theme } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    img: {
      width: "100%",
      maxWidth: "100%",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    section: {
      margin: theme.spacing(4, 0),
    },
    heroBanner: {
      backgroundImage: "url('//cdn.shopify.com/s/files/1/0078/1032/files/airpods-homepage-banner_1290x740@2x.progressive.jpg?v=1579895326')",
      backgroundSize: "cover",
      backgroundPosition: "top center",
      backgroundRepeat: "no-repeat",
      margin: 0,
    },
    categoryCTA: {
      position: "relative",
    },
    categoryCTAButton: {
      position: "absolute",
      marginBottom: "20px",
      left: "50%",
      bottom: 0,
      transform: "translateX(-50%)",
    },
    seenInItem: {
      maxWidth: "200px",
      padding: theme.spacing(3, 5)
    },
  }),
);

export default function IndexPage() {
  const classes = useStyles();

  return (
    <Layout>
      <SEO title="Home" />
      <Grid container className={classes.section}>
        <Grid item container className={classes.heroBanner}>
          <Grid item xs={10}>
            <Typography variant="h1">Together, we can stop plastic at its source</Typography>
            <Typography variant="subtitle1">Join the global community of earth heroes taking action towards a waste free future. You can choose every day products, without every day waste.</Typography>
            <Button variant="contained">Shop Biodegradable Phone Cases</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className={classes.section}>
        <Grid item>
          <Typography variant="h2">528,112</Typography>
          <Typography variant="subtitle1">People have made the switch, keeping more than 290,461 pounds of plastic from being produced.</Typography>
          <Button variant="contained">Learn More</Button>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2">20,000+ Customer Reviews</Typography>
          <Typography variant="h4">"Switched from bulky plastic cases after 10 years!"</Typography>
          <div className="slide">
            <img src="" />
            <Typography>No case I have ever owned for an iPhone has been such a conversation starter and given me the bragging rights I have. I get to tell everyone I have this protective (yes I've dropped my phone from about 4 feet to concrete in it, not on purpose!), stylish, and the best part, biodegradable! I mean what's not to like!.</Typography>
          </div>
          <Button variant="contained">Learn More</Button>
        </Grid>
      </Grid>
      <Grid container className={classes.section}>
        <Grid item>
          <Typography variant="h4">
            You can help create a plastic free planet, one case at a time.
          </Typography>
          <Typography>
            Our compostable phone cases and zero-waste screen protector have raised more than $125,000 for our 1% for the Planet partners. In 2019 we want to raise $250,000 to help protect our coastlines, oceans, parks and wild animals.  Let's do this #PelaFam!
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.section}>
        <Grid item className={classes.categoryCTA}>
          <img className={classes.img} src="//cdn.shopify.com/s/files/1/0078/1032/files/home-ip10_x472.png?v=1568834141" />
          <Button className={classes.categoryCTAButton} variant="contained">Shop Cases</Button>
        </Grid>
        <Grid item className={classes.categoryCTA}>
          <img className={classes.img} src="//cdn.shopify.com/s/files/1/0078/1032/files/pela-vision-home1_246e284b-1195-421d-9a1d-5701ccd50e53_x472.png?v=1559576905" />
          <Button className={classes.categoryCTAButton} variant="contained">Shop Sunglasses</Button>
        </Grid>
        <Grid item className={classes.categoryCTA}>
          <img className={classes.img} src="//cdn.shopify.com/s/files/1/0078/1032/files/home-ip10_x472.png?v=1568834141" />
          <Button className={classes.categoryCTAButton} variant="contained">Shop Accessories</Button>
        </Grid>
      </Grid>
      <Grid container className={classes.section}>
        <Grid item xs={12}>
          <Typography>As seen in</Typography>
        </Grid>
        <Grid item xs={6} className={classes.seenInItem}>
          <img className={classes.img} src="//cdn.shopify.com/s/files/1/0078/1032/files/Logo5_240x.png?v=1559307314" />
        </Grid>
        <Grid item xs={6} className={classes.seenInItem}>
          <img className={classes.img} src="//cdn.shopify.com/s/files/1/0078/1032/files/Logo4_240x.png?v=1559307337" />
        </Grid>
        <Grid item xs={6} className={classes.seenInItem}>
          <img className={classes.img} src="//cdn.shopify.com/s/files/1/0078/1032/files/Logo3_240x.png?v=1559307372" />
        </Grid>
        <Grid item xs={6} className={classes.seenInItem}>
          <img className={classes.img} src="//cdn.shopify.com/s/files/1/0078/1032/files/Logo2_240x.png?v=1559307395" />
        </Grid>
        <Grid item xs={6} className={classes.seenInItem}>
          <img className={classes.img} src="//cdn.shopify.com/s/files/1/0078/1032/files/Logo_240x.png?v=1559307418" />
        </Grid>
      </Grid>
    </Layout>
  );
}