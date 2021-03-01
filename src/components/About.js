import React from 'react'
import AboutImage from '../assets/about.png'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import { Container } from "@material-ui/core";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Hidden from '@material-ui/core/Hidden'


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',

    },
    cover: {
      width: "100%",
      padding:20
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
    title:{
      paddingBottom: theme.spacing(4),
      fontFamily: 'Poppins',
      fontWeight: 'fontWeightMedium',
      alignItems: 'center',
    color:"#f54272",
    }
  }));


const About = () => {

  const classes = useStyles();
  const theme = useTheme();

    return (

        <Card className={classes.root}>
        <Container className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h4" variant="h4" className={classes.title}>
              Established in 1972
            </Typography>
            <Container>

            <Typography variant="subtitle1" color="textSecondary">
            The Kandy Branch of the Cancer Society was inaugurated in 1972. The Cancer Home was built in 1976 initiated by the parent body assisted by the community & well-wishes on a block of land given by the Ministry of Health close to the Kandy Hospital. 
            This building had originally Two wards which accommodated up to twenty cancer patients.
             The Cancer Home is now able to accommodate up to 70 cancer patients. These patients come from various parts of the Island for daily deep-ray treatment at the Kandy Hospital or those who are terminally ill and cannot be looked after in their own homes.
            Entire patient care including meals, medicines and personal day to day requirements are given free of charge. Other expenses including staff salaries, rates and taxes and maintenance of buildings are financed entirely from community support.
            </Typography>

            </Container>

          </CardContent>
        </Container>
        
        <Hidden xsDown>
        <CardMedia
          className={classes.cover}
          image={AboutImage}
        />
        </Hidden>

      </Card>
    )
}

export default About
