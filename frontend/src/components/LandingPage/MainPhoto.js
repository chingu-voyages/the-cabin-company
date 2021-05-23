import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import section1Image from './section1Image';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

function MainPhoto() {
  const classes = useStyles();
  const mainFeaturedPost = {
    title: 'Explore our cabins',
    image: section1Image[0].img,
    imgText: 'Main image',
    linktext: 'sample text..',
  };

  return (
    <Paper
      className={classes.mainFeaturedPost}
      style={{ backgroundImage: `url(${mainFeaturedPost.image})` }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: 'none' }}
          src={mainFeaturedPost.image}
          alt={mainFeaturedPost.imageText}
        />
      }
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {mainFeaturedPost.title}
            </Typography>
            <Link variant="subtitle1" href="#">
              {mainFeaturedPost.linkText}
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default MainPhoto;
