import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import section3Images from './section3Images';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import MainPhoto from './MainPhoto';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',

    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',

    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div>
      <section>
        {/* banner pic goes here */}
        <MainPhoto />
        <h2>Enjoy Our Cabins</h2>
      </section>
      <section>
        {/* grid of small pics */}
        <h2>Explore nearby</h2>
      </section>
      <section className={classes.root}>
        {/* rpw a medium pics */}
        <h2>Live anywhere</h2>
        <GridList className={classes.gridList} cols={2.5}>
          {section3Images.map(image => (
            <GridListTile key={image.img}>
              <img src={image.img} alt={image.title} />
              <GridListTileBar title={image.title} />
            </GridListTile>
          ))}
        </GridList>
      </section>
    </div>
  );
}
