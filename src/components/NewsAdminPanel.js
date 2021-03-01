import React from 'react'
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import NewsForm from './AddNews/NewsForm'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar:{
    background:"#ad0045",
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color:"#fff",
    fontFamily: 'Poppins',
    fontWeight: 'fontWeightLight',
    alignItems: 'center',
  },
  title: {
    flexGrow: 1,
    color:"#fff",
    fontFamily: 'Poppins',
    fontWeight: 'fontWeightLight',
    alignItems: 'center',

  },
}));



const NewsAdminPanel = ({authenticate}) => {

    const classes = useStyles();

    const history = useHistory();

    const logout = () => {

        localStorage.clear('Token')
        authenticate(false)
        history.push('/')

    }

    return (
        <div>
            <AppBar position="static"  color="transparent" className={classes.appbar}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton}  aria-label="menu">
                <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                News
                </Typography>

                <Button onClick={logout} className={classes.menuButton}>
                Logout
               </Button>

            </Toolbar>
            </AppBar>


            <NewsForm></NewsForm>

        </div>
    )
}

export default NewsAdminPanel
