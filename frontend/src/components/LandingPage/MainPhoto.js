import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import section1Image from './section1Image';

const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: 'relative',
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

function MainPhoto() {
  const classes = useStyles();
  let history = useHistory();

  const mainFeaturedPost = {
    title: 'Explore our cabins',
    image: section1Image[0].img,
    imgText: 'Main image',
    linktext: 'Search',
  };

  const searchRedirect = () => {
    history.push(`/cabins`);
  };

  return (
    <Paper
      className={classes.mainFeaturedPost}
      style={{ backgroundImage: `url(${mainFeaturedPost.image})` }}
    >
      {
        <img
          style={{ display: 'none' }}
          src={mainFeaturedPost.image}
          alt={mainFeaturedPost.imageText}
        />
      }
      <div />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Box
              display="flex"
              flexWrap="wrap"
              lineHeight="1.75em"
              pl={10}
              pt={25}
            >
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
                style={{ color: 'white' }}
              >
                {mainFeaturedPost.title}
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              fontSize={32}
              pt={10}
              pb={5}
            >
              <Link onClick={searchRedirect} style={{ color: 'white' }}>
                {mainFeaturedPost.linktext}
              </Link>
            </Box>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default MainPhoto;
