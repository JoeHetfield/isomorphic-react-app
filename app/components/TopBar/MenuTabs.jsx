import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Tabs from 'material-ui/Tabs';
import { intlShape, injectIntl, defineMessages } from 'react-intl';
import MenuTab from './MenuTab';

const messages = defineMessages({
  token2token: {
    id: 'menutabs.token2token',
    defaultMessage: 'Token Trading',
  },
  fiat2token: {
    id: 'menutabs.fiat2token',
    defaultMessage: 'Fiat To Token',
  },
  futures: {
    id: 'menutabs.futures',
    defaultMessage: 'Futures',
  },
  account: {
    id: 'menutabs.account',
    defaultMessage: 'Account',
  },
});

const styles = {
  tabs: {
    flex: 1,
  },
};

class MenuTabs extends React.Component {
  state = {
    index: 0,
  };

  sycnTabIndex = (event, index) => {
    this.setState({ index });
  };

  render() {
    const { classes, intl } = this.props;
    const { index } = this.state;

    return (
      <Tabs
        value={index}
        className={classes.tabs}
        onChange={this.sycnTabIndex}
      >
        <MenuTab
          label={intl.formatMessage(messages.token2token)}
          to="/token2token"
        />
        <MenuTab
          label={intl.formatMessage(messages.fiat2token)}
          to="/fiat2token"
        />
        <MenuTab
          label={intl.formatMessage(messages.futures)}
          to="/futures"
        />
        <MenuTab
          label={intl.formatMessage(messages.account)}
          to="/account"
        />
      </Tabs>
    );
  }
}

MenuTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired,
};

export default withStyles(styles)(injectIntl(MenuTabs));
