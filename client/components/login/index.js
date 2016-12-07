import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
// import { example, p, link, login } from './styles';
import RaisedButton from 'material-ui/RaisedButton';
// import injectTapEventPlugin from 'react-tap-event-plugin';

// // Needed for onTouchTap
// // http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();

export default class Login extends Component {
  /*eslint-disable */
  static onEnter({store, nextState, replaceState, callback}) {
    // Load here any data.
    callback(); // this call is important, don't forget it
  }
  /*eslint-enable */

  render() {
    return <div>
      <Helmet
        title='Plog'
        meta={[
          {
            property: 'og:title',
            content: 'Plog'
          }
        ]} />
      <h1 className={example}>Plog</h1>
      <br />
      <p className={p}>
        The only personal website service you'll need
      </p>
      <br />
      <RaisedButton label="Log In" />
    </div>;
  }

}
