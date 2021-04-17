import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './assets/styles/index.scss';
import classes from './assets/styles/Main.module.scss';

import { OToolbox } from './components/organisms/Toolbox';
import { OCounter } from './components/organisms/Counter';

ReactDOM.render(
  <React.StrictMode>
    <div className={classes.app}>
      <h1 className={classes.title}>Tool Box</h1>

      <div className={classes.main}>
        <Router>
          {/* URLに最初のマッチした<Route>のpath属性部分を描画 */}
          <Switch>
            {/* `/`の時、各画面へ遷移できるルーティング(Link自体はコンポーネント) */}
            <Route path="/" exact>
              <OToolbox />
            </Route>

            {/* `/counter`の時、トップへ遷移できるルーティング(Link自体はコンポーネント) */}
            <Route path="/counter">
              <OCounter />
            </Route>
            {/* TODO:どこにもマッチしなかった場合、404ページへ */}
            <Route path="*" children={<div>Not Found</div>} />
          </Switch>
        </Router>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
