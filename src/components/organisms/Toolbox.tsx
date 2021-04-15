import React from 'react';
import classes from '../../assets/styles/Toolbox.module.scss';
import { Link } from 'react-router-dom';

export const OToolbox = () => {
  return (
    <div className={classes.toolbox}>
      {/* molecules:アイテムへ */}
      <Link className={classes.contentWrapper} to="/counter">
        <div>
          <h2>文字数カウンター</h2>
          <p>文字数をカウントしてくれるよ！</p>
        </div>
      </Link>

      <Link className={classes.contentWrapper} to="/">
        <div>
          <h2>DEMO</h2>
          <p>現在何もないよ</p>
        </div>
      </Link>
    </div>
  );
};
