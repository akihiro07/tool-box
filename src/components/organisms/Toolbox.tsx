import React from 'react';
import classes from '../../assets/styles/Toolbox.module.scss';

export const Toolbox = () => {
  return (
    <div className={classes.toolbox}>
      {/* molecules:アイテム */}
      <div className={classes.contentWrapper}>
        <div>
          <h2>文字数カウント</h2>
          <p>これは文字数カウント</p>
        </div>
      </div>
    </div>
  );
};
