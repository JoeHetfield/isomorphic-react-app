import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Tooltip from 'material-ui/Tooltip';
import IconButton from 'material-ui/IconButton';
import { intlShape, injectIntl, defineMessages } from 'react-intl';

import LanguageIcon from 'material-ui-icons/Language';
import Menu, { MenuItem } from 'material-ui/Menu';

const messages = defineMessages({
  tooltip: {
    id: 'languagelist.tooltip',
    defaultMessage: 'Language',
  },
  chinese: {
    id: 'languagelist.chinese',
    defaultMessage: 'Chinese',
  },
  english: {
    id: 'languagelist.english',
    defaultMessage: 'English',
  },
  japanese: {
    id: 'languagelist.japanese',
    defaultMessage: 'Japanese',
  },
  korean: {
    id: 'languagelist.korean',
    defaultMessage: 'Korean',
  },
});

const styles = {};

class LanguageList extends React.Component {
  state = {
    anchorEl: null,
  };

  openMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  closeMenu = () => {
    this.setState({ anchorEl: null });
  };

  changeLocale = (locale) => {
    this.props.changeLocale(locale);
    this.closeMenu();
  }

  render() {
    const { intl } = this.props;
    const { anchorEl } = this.state;

    return (
      <div>
        <Tooltip title={intl.formatMessage(messages.tooltip)}>
          <IconButton
            onClick={this.openMenu}
            color="inherit"
          >
            <LanguageIcon />
          </IconButton>
        </Tooltip>

        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={this.closeMenu}
        >
          <MenuItem onClick={this.changeLocale.bind(null, 'zh')}>
            {intl.formatMessage(messages.chinese)}
          </MenuItem>
          <MenuItem onClick={this.changeLocale.bind(null, 'en')}>
            {intl.formatMessage(messages.english)}
          </MenuItem>
          <MenuItem onClick={this.changeLocale.bind(null, 'ja')}>
            {intl.formatMessage(messages.japanese)}
          </MenuItem>
          <MenuItem onClick={this.changeLocale.bind(null, 'ko')}>
            {intl.formatMessage(messages.korean)}
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

LanguageList.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired,
  changeLocale: PropTypes.func.isRequired,
};

export default withStyles(styles)(injectIntl(LanguageList));
