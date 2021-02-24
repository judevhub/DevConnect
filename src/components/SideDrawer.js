import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CancelOutlined from '@material-ui/icons/CancelOutlined';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SideDrawer(props) {

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  return (
    <div>

        <SwipeableDrawer
            anchor={props.position}
            open={props.isopen}
            onClose={toggleDrawer(props.position, false)}
            onOpen={toggleDrawer(props.position, true)}
        >
        <div
            className={clsx(classes.list, {
                [classes.fullList]: props.position === 'top' || props.position === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(props.position, false)}
            onKeyDown={toggleDrawer(props.position, false)}
            >
                <List>
                    <ListItem button>
                        <ListItemIcon>{<CancelOutlined/>}</ListItemIcon>
                        <ListItemText primary={'Close'} />
                    </ListItem>
                </List>
                
        </div>
        </SwipeableDrawer>
    </div>
  );
}
