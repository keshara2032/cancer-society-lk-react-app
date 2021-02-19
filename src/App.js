import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeBanner from './assets/homebanner.png'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';


import CancerLogo from './assets/cancerlogo.png'
import CancerLogo2 from './assets/cancer_logo.png'
import ENYLogo from './assets/enylogo.png'


import MealImage from './assets/meal.jpg'
import DrugsImage from './assets/drugs.jpg'
import CAPImage from './assets/cap.jpg'
import FosterImage from './assets/foster.jpg'

import DonateCard from './components/DonateCard'
import Carousel from './components/CarouselHome'


const donate_card_message = {acc_num:"1000665301", bank_details:"Commercial Bank - Kandy", sc:"CCEYLKLX"};

const card1 = { title:"Donate for Meals",  msg: donate_card_message, img:MealImage }
const card2 = { title: "Donate for Drugs",  msg: donate_card_message, img:DrugsImage }
const card3 = { title: "Donate for Awareness",  msg: donate_card_message, img:CAPImage }
const card4 = { title: "Donate for Foster Parents",  msg: donate_card_message, img:FosterImage }

const cards = [card1,card2,card3,card4]


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
    marginRight: theme.spacing(2),

  },
  donatebtn:{
    flexGrow: 1,
    fontFamily: 'Poppins',
    color:"#f54272",
    fontWeight: 'fontWeightBold'
    
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
  control: {
    padding: theme.spacing(2),
  },
  grid:{
    flexGrow: 1,
    padding:'20px ',
    direction:'row',
    justify:'center',
    alignItems:'center'
  },
  enycontainer:{
    flexGrow: 1,
    direction:'row',
    justify:'center',
    alignItems:'center'
  },
  carousel:{
    flexGrow: 1,
    alignItems:'left',
    padding:'20px 20px 20px 20px ',
  }

}));


function App() {

  const classes = useStyles();

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
              <Button  color="secondary" variant="outlined">
                <Typography variant="subtitle1" className={classes.donatebtn}>
                  Donate
                </Typography>
              </Button>

            </Container>
          </Toolbar>
      </AppBar>
      <Divider/>

           <img src={HomeBanner} className="banner" />

      <Divider/>
           
      <Grid container className={classes.root} spacing={2} >
        <Grid item xs={12}>
          <Grid container className={classes.grid} justify="center" >

            {
              cards.map((card, index) => (
                <DonateCard key={index} title={card.title} msg={card.msg} img={card.img}/>
              ))
            }

          </Grid>
        </Grid>
      </Grid>

      <Divider/>
      
        <Container className={classes.enycontainer}>
          
           <img src={ENYLogo} className={classes.enylogo} />

          <Typography variant="subtitle1" className={classes.title} >
             FUNDS RECIEVED AT THE CANCER HOME ARE ACCOUNTED BY THE ERNST AND YOUNG CHARTERED ACCOUNTANTS.
          </Typography>
        </Container>

      <Divider/>

      <Grid container className={classes.root} spacing={2} >

      <Grid item xs={12}>

      <Container maxWidth="md" className={classes.carousel}>

       <Carousel/>

      </Container>

      </Grid>

      
      </Grid>

    </div>
  );
}

export default App;
