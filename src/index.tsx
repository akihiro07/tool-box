import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './assets/styles/index.scss';
import classes from './assets/styles/Main.module.scss';
import reportWebVitals from './reportWebVitals';
import { OToolbox } from './components/organisms/Toolbox';

ReactDOM.render(
  <React.StrictMode>
    <div className={classes.app}>
      <h1 className={classes.title}>Tool Box</h1>

      <Router>
        <Switch>
          {/* `/counter`の時、トップへ遷移できるルーティング */}
          <Route path="/counter">
            <Link to="/">トップページへ戻る</Link>
            <h2>文字数カウンター</h2>
          </Route>

          {/* `/`の時、各画面へ遷移できるルーティング(Link自体はコンポーネント) */}
          <Route path="/">
            <OToolbox />
          </Route>
        </Switch>
      </Router>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
