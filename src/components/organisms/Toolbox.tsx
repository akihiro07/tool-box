import React from 'react';
import classes from '../../assets/styles/Toolbox.module.scss';

export const Toolbox = () => {
  return (
    <div className="Toolbox">
      {/* molecules:アイテム */}
      <div className={classes.contentWrapper}>
        <h2>文字数カウント</h2>
        <p>これは文字数カウント</p>
      </div>
    </div>
  );
};
