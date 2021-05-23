import React from 'react';
import section2Images from './section2Images';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

export default function MultiLineGrid() {
  return (
    <div>
      <div>
        <GridList cols={2.5}>
          {section2Images.map(image => (
            <GridListTile key={image.img}>
              <img src={image.img} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}
