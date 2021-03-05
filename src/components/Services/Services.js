import React from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import {Link as RouteLink} from 'react-router-dom';

import Accomodation from './Accomodation'
import Footer from '../Footer'
import Dining from './Dining'
import Counselling from './Counselling'
import Foster from './Foster'
import Drugs from './Drugs'
import Awareness from './Awareness'
import Education from './Education'

import CancerLogo from '../../assets/cancerlogo.png'
import CancerLogo2 from '../../assets/cancer_logo.png'
const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      fontFamily: 'Poppins',
      fontWeight: 'fontWeightLight',
      alignItems: 'center',
      justifyContent:'center',
      display:'flex',
      
    },
    text:{
        fontFamily: 'Poppins',
        fontWeight: 'fontWeightLight',
        alignItems: 'center',
        },
        enylogo:{
            height: 100,
          },
          menuButton: {
            fontFamily: 'Poppins',
            fontWeight: 'fontWeightMedium'
            
          },
          title: {
            flexGrow: 1,
            fontFamily: 'Poppins',
            color:"#f54272",
            fontSize: '20px'
            
          },
          appbar:{
            elevation:0
          },
          navbtns:{
            flexGrow: 1,
            fontFamily: 'Poppins',
        
          },
          donatebtn:{
            flexGrow: 1,
            fontFamily: 'Poppins',
            fontWeight: 'fontWeightLight',
            alignItems: 'center',
            
          },
          navbar:{
            justify:'center',
            padding:"0px 20px",
            margin:"auto"
          },
        
          paper: {
            height: 140,
            width: 100,
          },
 
          grid:{
            flexGrow: 1,
            padding:'20px ',
            direction:'row',
            justify:'center',
            alignItems:'center'
          },
          routeBtn:{
            color:"#000",
            fontFamily: 'Poppins',
            fontWeight: 'fontWeightLight',
            alignItems: 'center',
          },

  });

  
const Services = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const about = true;
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    
    return (

        <div className="App">

        <AppBar position="static" color="transparent" className={classes.appbar}  elevation={0}>
            <Toolbar >
              <img src={CancerLogo} className="App-logo"/>

              <Container maxWidth="sm">

              <h5 className="AppBarTitle">
                Sri Lanka Cancer Society
              </h5>

              </Container>

              <img src={CancerLogo2} className="App-logo"/>
            </Toolbar>


            <Toolbar className={classes.navbar} >
              <Container maxWidth="sm" >

                  <Button color="inherit" >
                    <Typography variant="subtitle1" className={classes.navbtns}>
                    <RouteLink to="/" className={classes.routeBtn}>Home </RouteLink>
                    </Typography>
                  </Button>

                  <Button color="inherit">
                    <Typography variant="subtitle1" className={classes.navbtns}>
                      <RouteLink to="/services" className={classes.routeBtn}>Services </RouteLink>
                    </Typography>
                  </Button>

                  <Button color="inherit">
                    <Typography variant="subtitle1" className={classes.navbtns}>
                      Contact
                    </Typography>
                    </Button>
                  <Button  color="secondary" variant="outlined">
                    <Typography variant="subtitle1" className={classes.donatebtn}>
                      Donate
                    </Typography>
                  </Button>

                </Container>
              </Toolbar>
          </AppBar>

          <Divider/>


          <Paper className={classes.root}>

                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    className={classes.text}
                    variant="scrollable"
                    scrollButtons="off"
                >
                    
                    <Tab className={classes.text} label="Accommodation Facilities" />
                    <Tab className={classes.text} label="Patient Meals" />
                    <Tab  className={classes.text} label="Counselling Centre" />
                    <Tab  className={classes.text} label="Foster Parent Scheme" />
                    <Tab  className={classes.text} label="Provision of Cancer Drugs" />
                    <Tab wrapped className={classes.text} label="Cancer Awareness Programmes" />
                    <Tab  className={classes.text} label="Education Programme" />

                </Tabs>
               
  
                
        </Paper>


        {value === 0 && <Accomodation/>}
        {value === 1 && <Dining/>}
        {value === 2 && <Counselling/>}
        {value === 3 && <Foster/>}
        {value === 4 && <Drugs/>}
        {value === 5 && <Awareness/>}
        {value === 6 && <Education/>}


        <Footer about={about} />

</div>

    )
}

export default Services
