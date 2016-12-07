import React, { Component } from 'react';
import Helmet from 'react-helmet';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends Component {

  render() {
    return <div>
      <Helmet title='Go + React + Redux = rocks!' />
      	<MuiThemeProvider>
      		{this.props.children}
      	</MuiThemeProvider>
    </div>;
  }

}
