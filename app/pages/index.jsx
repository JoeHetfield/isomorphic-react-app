'user strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Reboot from 'material-ui/Reboot';
import { withStyles } from 'material-ui/styles';

import MenuBar from 'components/MenuBar';

import Coin2CoinTransaction from 'pages/Coin2CoinTransaction';
import OutterTransaction from 'pages/OutterTransaction';
import ContractTransaction from 'pages/ContractTransaction';
import FundManagement from 'pages/FundManagement';


const styles = {
  frame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
};

class Frame extends React.Component {
  // Remove the server-side injected CSS.
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.frame}>
        <Reboot />
        <MenuBar />
        <Route exact path='/' component={OutterTransaction} />
        <Route exact path='/Coin2CoinTransaction' component={Coin2CoinTransaction} />
        <Route exact path='/OutterTransaction' component={OutterTransaction} />
        <Route exact path='/ContractTransaction' component={ContractTransaction} />
        <Route exact path='/FundManagement' component={FundManagement} />
      </div>
    );
  }
}

Frame.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Frame);
