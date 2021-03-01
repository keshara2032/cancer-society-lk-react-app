import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import NewsTitle from './NewsTitle';
import NewsBody from './NewsBody';
import NewsReview from './NewsReview';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        General Solutions LK
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    fontFamily: 'Poppins',
    fontWeight: 'fontWeightLight',
    alignItems: 'center',
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
    fontFamily: 'Poppins',
    fontWeight: 'fontWeightLight',
    alignItems: 'center',
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    fontFamily: 'Poppins',
    fontWeight: 'fontWeightLight',
    alignItems: 'center',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    fontFamily: 'Poppins',
    fontWeight: 'fontWeightLight',
    alignItems: 'center',
  },
  text:{
    fontFamily: 'Poppins',
    fontWeight: 'fontWeightLight',
    alignItems: 'center',
  }
}));

const steps = ['News Title', 'News Description', 'Image for the News Post'];


export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const [newsTitle,setNewsTitle] = React.useState("")
  const [newsLocation,setNewsLocation] = React.useState("")
  const [newsDate,setNewsDate] = React.useState(new Date(''))
  const [newsBody,setNewsBody] = React.useState("")
  const [newsImage,setNewsImage] = React.useState(null)


  const handleNewsData = (newsData) => {

      setNewsTitle(newsData.title)
      setNewsLocation(newsData.location)
      setNewsDate(newsData.date)
      setNewsBody(newsData.body)
      setNewsImage(newsData.image)

  }

  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <NewsTitle newsTitle={newsTitle} newsLocation={newsLocation} newsDate={newsDate} handleNewsData={handleNewsData}/>;
      case 1:
        return <NewsBody newsBody={newsBody} newsImage={newsImage} handleNewsData={handleNewsData} />;
      case 2:
        return <NewsReview newsTitle={newsTitle} newsLocation={newsLocation} newsDate={newsDate} newsBody={newsBody} newsImage={newsImage}  />;
      default:
        throw new Error('Unknown step');
    }
  }
  

  const handleNext = () => {

    if(activeStep === steps.length - 1)
      {console.log('Now will upload to server')}

    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center" className={classes.text}>
            Create a News Post
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Congratulations, you just created a News post!
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Create News' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}
