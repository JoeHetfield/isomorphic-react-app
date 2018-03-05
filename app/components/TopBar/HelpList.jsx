import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Tooltip from 'material-ui/Tooltip';
import IconButton from 'material-ui/IconButton';
import { intlShape, injectIntl, defineMessages } from 'react-intl';

import HelpIcon from 'material-ui-icons/HelpOutline';
import Menu, { MenuItem } from 'material-ui/Menu';

const messages = defineMessages({
  tooltip: {
    id: 'helplist.tooltip',
    defaultMessage: 'Help',
  },
  getstart: {
    id: 'helplist.getstart',
    defaultMessage: 'Get Start',
  },
  fqa: {
    id: 'helplist.fqa',
    defaultMessage: 'FQA',
  },
  fee: {
    id: 'helplist.fee',
    defaultMessage: 'Fee',
  },
  security: {
    id: 'helplist.security',
    defaultMessage: 'Security',
  },
  more: {
    id: 'helplist.more',
    defaultMessage: 'More',
  },
});

const styles = {};

class HelpList extends React.Component {
  state = {
    anchorEl: null,
  };

  openMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  closeMenu = () => {
    this.setState({ anchorEl: null });
  };

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
            <HelpIcon />
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
          <MenuItem onClick={this.handleClose}>
            {intl.formatMessage(messages.getstart)}
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            {intl.formatMessage(messages.fqa)}
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            {intl.formatMessage(messages.fee)}
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            {intl.formatMessage(messages.security)}
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            {intl.formatMessage(messages.more)}
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

HelpList.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired,
};

export default withStyles(styles)(injectIntl(HelpList));
