import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from '@material-ui/core/styles';
import {ArrowBackIcon,ArrowForwardIcon} from '@material-ui/icons/';
import { Container } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ImageNotFound from '../../assets/no_img.png';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:"100vw"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    // position:"relative"

  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  newsTitle:{
    margin: theme.spacing(1),
    paddingBottom:"20px",
    padding: theme.spacing(2),
    color:"#f54272",
    fontFamily: 'Poppins',
    fontWeight: 'fontWeightMedium'

  },

  title:{
    fontFamily: 'Poppins',
    fontWeight: 'fontWeightHeavy'
  },
 
  newsBody:{
    padding: theme.spacing(3),
  },
  carousel:{
    width:"100%",
    flexGrow:1
  }

}));




const NewsCarousel = ({news}) => {

  const classes = useStyles();
  const [index, setIndex] = React.useState(0);
  const [status, setStatus] = React.useState(false);
  const [seconds, setSeconds] = useState(0);

  const no_of_news = news.length

  const nextIndex = ()=> {
    setIndex( index === no_of_news - 1 ? 0 : index + 1)


  }

  const prevIndex = ()=> {
    setIndex( index === 0 ? no_of_news - 1 : index - 1)

  }

  const onError = (e) => {
    e.target.src = ImageNotFound;
    console.log("Image Unavailable, Setting alternate Image")
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index => (index + 1)%news.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

    return (

       <Grid container spacing={1}>
          

          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}  >
            <img src={news[index].img_uri} className="banner"   onError={(e) => onError(e)}  style={status ? {} : {display: 'none'}}   onLoad={() => {setStatus(true)} }/>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper} elevation={0}>


            <Container className={classes.paper}>
                <Typography variant="h4"  className={classes.title}>
                  Latest News
                </Typography>
            </Container>

            <Divider></Divider>

              <Container>

              <Typography variant="h4" className={classes.newsTitle} >
                    {news[index].title}
              </Typography>

              <Typography variant="body1" className={classes.newsBody}  >
                  {news[index].description}
              </Typography>


              </Container>

              
              <Container >
                
                <IconButton aria-label="previous" className={classes.margin} onClick={prevIndex}>
                  <NavigateBeforeIcon fontSize="large" />
                </IconButton>

                <IconButton aria-label="next" className={classes.margin} onClick={nextIndex}>
                  <NavigateNextIcon fontSize="large" />
                </IconButton>


              </Container>


            </Paper>

          </Grid>
        
      </Grid>

    )
}

export default NewsCarousel