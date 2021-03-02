import React from 'react'
import { FacebookProvider, Page, ShareButton  } from 'react-facebook';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Map from '../assets/map.png'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
    map: {
      display:'flex',
      flexDirection:"row",
      
    //   height:30
    },
    total: {
      fontWeight: 700,
    },
    title: {
      marginTop: theme.spacing(2),
    },
    fb:{
      fontFamily: 'Poppins',
      fontWeight: 'fontWeightMedium',
      alignItems: 'center',
      justifyContent: "center", 
      flex: 1,
      flexGrow:1,
      height:"100%"
    },
    description:{
      fontFamily: 'Poppins',
      fontWeight: 'fontWeightMedium',
      alignItems: 'center',
      justifyContent: "center", 
      flex: 1,
      },
    text:{
      fontFamily: 'Poppins',
      fontWeight: 'fontWeightLight',
      alignItems: 'center',
      fontSize: '18px'
      }
  }));


const Facebook = () => {

  const classes = useStyles();

      
    return (

        <div>
      <Grid container spacing={3} direction="row"
  alignItems="center"
  justify="center">
        
          <Grid item xs={12} sm={4} >

            <Container className={classes.map}>
                <img src={Map} className="banner" />
            </Container>

          </Grid>
         
                 
          <Grid item xs={12} sm={4} >


            <Container >
                <div className={classes.description} >

                  <Typography variant="body1" gutterBottom className={classes.text}  color="textSecondary">
                     Cancer patients from 7 out of 9 Provinces of Sri Lanka, travel to the Kandy General Hospital for treatment. Those from distant places are accommodated at our home.
                   </Typography>

                </div>
            </Container>

          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Container className={classes.fb}>
            <FacebookProvider appId="1347931882237892" >
                <Page href="https://www.facebook.com/Sri-Lanka-Cancer-Society-Kandy-Branch-1658047324408572/" tabs="timeline"/>
            </FacebookProvider>  
            </Container>
          </Grid>

       </Grid>
       <Divider/>
        </div>
    )
}

export default Facebook
