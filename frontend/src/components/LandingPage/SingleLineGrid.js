import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import section3Images from './section3Images';
import GridListTileBar from '@material-ui/core/GridListTileBar';

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

export default function SingleLineGrid() {
  const classes = useStyles();

  return (
    <div>
      <GridList className={classes.gridList} cols={2.5}>
        {section3Images.map(image => (
          <GridListTile key={image.img}>
            <img src={image.img} alt={image.title} />
            <GridListTileBar title={image.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
