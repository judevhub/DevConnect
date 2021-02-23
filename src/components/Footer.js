import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footerPosition:{
        position:'absolute',
        left:0,
        bottom:0,
        right:0
    },

}));

export default function Footer() {
    const classes = useStyles();

    return(
       <div className={classes.footerPosition}>
        <AppBar position="static" color="primary">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                © 2021 DevHub, JU
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
       </div>
    )
}