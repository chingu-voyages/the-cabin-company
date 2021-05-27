import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import section3Images from './section3Images';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
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
      <Typography style={{ margin: '1em 0 1em 1em' }} variant="h4">
        Live anywhere
      </Typography>
      <div>
        <GridList className={classes.gridList} cols={2.5}>
          {section3Images.map(image => (
            <GridListTile key={image.img} style={{ height: '25em' }}>
              <img src={image.img} alt={image.title} />
              <GridListTileBar title={image.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}
