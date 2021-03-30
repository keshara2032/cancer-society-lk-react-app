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
import DonateDialog from './DonateDialog';


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
    paddingBottom: 5,
    paddingTop:10,
    margin:5,
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
      top: 'auto',
      bottom: 0,
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
        <Link color="inherit" href="" style={ {fontFamily:'Poppins'} }>
          General Solutions LK
        </Link>{' '}
        {new Date().getFullYear()}
      </Typography>
    );
  }




const Footer = (about) => {
    const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
        <div>

            <AppBar position="static" color="transparent" className={classes.appbar}  elevation={0}
            hidden={about}
            >

            <Toolbar  >
                <Container  >
                        
                    <Typography component="h5" variant="h5" className={classes.title}>
                     About Us
                     </Typography>

                    <Typography variant="subtitle1"  className={classes.description}>
                    The Sri Lanka Cancer Society is a voluntary organization of people working towards relieving Sri Lanka from the devastating effects of the scourge of cancer. Regardless of cultural, social or ideological background we are committed to provide any Cancer patient with the quality of life they deserve and the protection and security they require. Cancer is no longer a distant, empty threat, its effects are at your doorstep and its victims reside in the community around you; in this world of uncertainty we are a team dedicated to making the public aware that Cancer CAN be prevented and even cured with early detection and treatment.
                    </Typography>
                </Container>
            </Toolbar>

            </AppBar>       

        <AppBar position="sticky"  className={classes.appbar2}  elevation={0}
        >

        <Toolbar className={classes.navbar} >
          <Container maxWidth="sm" >

              <Button color="inherit" >

                <Typography variant="subtitle1" className={classes.navbtns}>
                <RouteLink to="/" className={classes.routeBtn} >Home </RouteLink>
                </Typography>

              </Button>

              <Button color="inherit">
                <Typography variant="subtitle1" className={classes.navbtns}>
                <RouteLink to="/services" className={classes.routeBtn}>Services </RouteLink>
                </Typography>
              </Button>

        
              <Button color="inherit">
                <Typography variant="subtitle1" className={classes.navbtns}>
                <RouteLink to="/contact" className={classes.routeBtn}>Contact </RouteLink>
                </Typography>
                </Button>

              <Button  color="inherit" variant="outlined" onClick={handleClickOpen}>
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

          <DonateDialog handleClose={handleClose} open={open}/>


        </div>

    )
}

export default Footer
