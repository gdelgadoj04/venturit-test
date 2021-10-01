import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './header.css';
import Button from '../../atoms/Button';
import { platform } from '../../../../assets/img';
import { ClickAwayListener, Grow, IconButton, MenuItem, MenuList, Paper, Popper } from '@material-ui/core';
import { notification, chat, profile } from '../../../../assets/img';
import Search from '../../molecules/Search';
import { Grid } from '@material-ui/core';
import Typography from '../../atoms/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#FFFFFF',
    color: '#635F8A',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  headerButton: {
    borderRadius: '15px',
    fontSize: '12px',
    fontWeight: '600',
    height: '40px',
    backgroundColor: '#3D84FF'
  },
  item: {
    display: 'flex',
    alignItems: 'center',
  },
  itemSearch: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemButtons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  itemProfile: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}));

const HeaderComponent = ({ user, onLogin, onLogout, onCreateAccount }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  return (

    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Grid container>
          <Grid item className={classes.item} xs={3}>
            <img className="platform-fix" alt="platform" src={platform}></img>
          </Grid>
          <Grid item className={classes.itemSearch} xs={5}>
            <Search />
          </Grid>
          <Grid item className={classes.itemButtons} xs={2}>
            <Button className={classes.headerButton} title="+ ADD" onClick={() => console.log("+ADD press")}></Button>
            <IconButton ref={anchorRef}
              aria-controls={open ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={handleToggle}> <img className="icon-button" alt="icon-button" src={notification} /></IconButton>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
            <IconButton><img className="icon-button" alt="icon-button" src={chat} /></IconButton>
          </Grid>
          <Grid item className={classes.itemProfile} xs={2}>
            <Typography variant="title">
              Clarence Russell
            </Typography>
            <img className="profile-img" alt="profile" src={profile} />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar >
  )
}


HeaderComponent.propTypes = {
};

HeaderComponent.defaultProps = {
};

export default HeaderComponent;