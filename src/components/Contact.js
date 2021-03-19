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

import Footer from './Footer'
import Map from './Map'
import Committee from './Committee'
import Address from './Address'
import ApplicationBar from './ApplicationBar'

import CancerLogo from '../assets/cancerlogo.png'
import CancerLogo2 from '../assets/cancer_logo.png'


const AnyReactComponent = ({ text }) => <div>{text}</div>;


const defaultProps = {
    center: {
      lat: 7.28,
      lng: 80.63
    },
    zoom: 11
  };

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

const Contact = () => {

    const classes = useStyles();

    return (
        <div className="App">
            
          <ApplicationBar/>

          <Divider/>

{/* OpenStreetMap */}
        <div >
            <Map/>
        </div>

{/* Committee */}

        <Container>

            <Committee/>

        </Container>

        <Divider/>

{/* Address & Contact Details */}

        <Container>
            
            <Address/>

        </Container>


        <Footer />

</div>
    )
}

export default Contact
