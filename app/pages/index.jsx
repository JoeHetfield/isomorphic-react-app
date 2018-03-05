import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Reboot from 'material-ui/Reboot';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import { IntlProvider } from 'react-intl';

import TopBar from 'components/TopBar';

import Token2Token from 'pages/Token2Token';
import Fiat2Token from 'pages/Fiat2Token';
import Futures from 'pages/Futures';
import Account from 'pages/Account';

import { Bootstrap } from 'actions';

const styles = {
  frame: {
    position: 'relative',
    display: 'flex',
    height: '100%',
    width: '100%',
  },
  progress: {
    margin: 'auto',
  },
};

class Frame extends React.Component {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }

    this.props.bootstrap();
  }

  render() {
    const {
      classes,
      booting,
      locale,
      messages,
    } = this.props;

    return booting
      ? <div className={classes.frame}>
          <CircularProgress className={classes.progress} />
        </div>
      : <IntlProvider locale={locale} key={locale} messages={messages[locale]}>
          <div className={classes.frame}>
            <Reboot />
            <TopBar />
            <Route exact path='/' component={Token2Token} />
            <Route exact path='/token2token' component={Token2Token} />
            <Route exact path='/fiat2token' component={Fiat2Token} />
            <Route exact path='/futures' component={Futures} />
            <Route exact path='/account' component={Account} />
          </div>
        </IntlProvider>;
  }
}

Frame.propTypes = {
  classes: PropTypes.object.isRequired,
  booting: PropTypes.bool.isRequired,
  locale: PropTypes.string.isRequired,
  messages: PropTypes.object.isRequired,
  bootstrap: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  booting: state.booting,
  locale: state.locale,
  messages: state.messages,
});

const mapDispatchToProps = {
  bootstrap: Bootstrap.start,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(Frame));
