import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Tooltip from 'material-ui/Tooltip';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import HelpIcon from 'material-ui-icons/HelpOutline';
import CheckIcon from 'material-ui-icons/Check';
import LanguageIcon from 'material-ui-icons/Language';
import Menu, { MenuItem } from 'material-ui/Menu';
import { ListItemIcon, ListItemText } from 'material-ui/List';

import {
  Menu as MenuActions,
} from 'actions';

const styles = {
  title: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class TopBar extends React.Component {

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
    const { classes, title, toggleMenu } = this.props;
    const { anchorEl } = this.state;

    return (
      <AppBar>
        <Toolbar>

          <Tooltip title="打开菜单">
            <IconButton
              color="inherit"
              onClick={toggleMenu}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>

          <Typography
            variant="title"
            color="inherit"
            noWrap
            className={classes.title}
          >
            {title}
          </Typography>

          <Tooltip title="语言选择">
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
            <MenuItem onClick={this.handleClose}>
              <ListItemIcon className={classes.icon}>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText classes={{ primary: classes.primary }} primary="汉语" />
            </MenuItem>
            <MenuItem onClick={this.handleClose}>英语</MenuItem>
            <MenuItem onClick={this.handleClose}>日语</MenuItem>
            <MenuItem onClick={this.handleClose}>韩语</MenuItem>
          </Menu>

          <Tooltip title="帮助">
            <IconButton
              // onClick={this.handleMenu}
              color="inherit"
            >
              <HelpIcon />
            </IconButton>
          </Tooltip>

        </Toolbar>
      </AppBar>
    );
  }
}

TopBar.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  toggleMenu: MenuActions.toggle,
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(TopBar));
