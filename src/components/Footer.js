import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { makeStyles } from '@material-ui/core/styles';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import {Link as RouteLink} from 'react-router-dom';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles({
    root: {
    //   width: 500,
    flexGrow:1,

    },

  navbtns:{
    flexGrow: 1,
    fontFamily: 'Poppins',
  },
  title:{
    paddingBottom: 20,
    margin:20,
    fontFamily: 'Poppins',
    fontWeight: 'fontWeightMedium',
    alignItems: 'center',
  color:"#f54272",
  },
  navbar:{
    justify:'center',
    padding:"40px 40px",
    margin:"auto",
    
  },
  description:{
    fontFamily: 'Poppins',
    fontWeight: 'fontWeightLight',
    alignItems: 'center',
    padding:"40px 40px",

  },
  appbar:{
    background:"#f0f0f0",
  },
  appbar2:{
    background:"#ad0045",
  },
  copyright:{
    fontFamily: 'Poppins',
    fontWeight: 'fontWeightLight',
    alignItems: 'center',
  },
  routeBtn:{
    color:"#fff",
    fontFamily: 'Poppins',
    fontWeight: 'fontWeightLight',
    alignItems: 'center',
  },
  
  donatebtn:{
    flexGrow: 1,
    fontFamily: 'Poppins',
    fontWeight: 'fontWeightLight',
    alignItems: 'center',
    
  },




  });


  function Copyright() {
    return (
      <Typography variant="body2" color="inherit" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/" style={ {fontFamily:'Poppins'} }>
          General Solutions LK
        </Link>{' '}
        {new Date().getFullYear()}
      </Typography>
    );
  }




const Footer = () => {
    const classes = useStyles();
  const [value, setValue] = React.useState(0);

    return (
        <div>

            <AppBar position="static" color="transparent" className={classes.appbar}  elevation={0}
            >

            <Toolbar  >
                <Container  >
                        
                    <Typography component="h5" variant="h5" className={classes.title}>
                     About Us
                     </Typography>

                    <Typography variant="subtitle1"  className={classes.description}>
                    The Kandy Branch of the Cancer Society was inaugurated in 1972. The Cancer Home was built in 1976 initiated by the parent body assisted by the community & well-wishes on a block of land given by the Ministry of Health close to the Kandy Hospital. 
                    This building had originally Two wards which accommodated up to twenty cancer patients.
                    The Cancer Home is now able to accommodate up to 70 cancer patients. These patients come from various parts of the Island for daily deep-ray treatment at the Kandy Hospital or those who are terminally ill and cannot be looked after in their own homes.
                    Entire patient care including meals, medicines and personal day to day requirements are given free of charge. Other expenses including staff salaries, rates and taxes and maintenance of buildings are financed entirely from community support.
                    </Typography>
                </Container>
            </Toolbar>

            </AppBar>       

            <AppBar position="static"  className={classes.appbar2}  elevation={0}
            >

        <Toolbar className={classes.navbar} >
          <Container maxWidth="sm" >

              <Button color="inherit" >
                <Typography variant="subtitle1" className={classes.navbtns}>
                  Home
                </Typography>
              </Button>

              <Button color="inherit">
                <Typography variant="subtitle1" className={classes.navbtns}>
                  Services
                </Typography>
              </Button>

              <Button color="inherit">
                <Typography variant="subtitle1" className={classes.navbtns}>
                  News
                </Typography>
                </Button>
              <Button color="inherit">
                <Typography variant="subtitle1" className={classes.navbtns}>
                  Contact
                </Typography>
                </Button>
              <Button  color="inherit" variant="outlined">
                <Typography variant="subtitle1" className={classes.donatebtn}>
                  Donate
                </Typography>
              </Button>


              <Button  color="inherit">
                <Typography variant="subtitle1" >
                  
                  <RouteLink to="/admin" className={classes.routeBtn}>Admin </RouteLink>
                </Typography>
              </Button>

              <Box mt={5}>
              <Copyright />
              </Box>

            </Container>


          </Toolbar>

            </AppBar>       

        </div>

    )
}

export default Footer
