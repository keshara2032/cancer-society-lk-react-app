import './App.css';

import { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import {BrowserRouter as Router, Route} from 'react-router-dom'


import CancerLogo from './assets/cancerlogo.png'
import CancerLogo2 from './assets/cancer_logo.png'
import ENYLogo from './assets/enylogo.png'


import MealImage from './assets/meal.jpg'
import DrugsImage from './assets/drugs.jpg'
import CAPImage from './assets/cap.jpg'
import FosterImage from './assets/foster.jpg'
import HomeBanner from './assets/homebanner.jpg'

import DonateCard from './components/DonateCard'
import Carousel from './components/News/NewsCarousel'
import About from './components/About'
import Footer from './components/Footer'
import Admin from './components/Admin'
import NewsAdminPanel from './components/News/NewsAdminPanel';
import Facebook from './components/Facebook'
import Services from './components/Services/Services'
import {Link as RouteLink} from 'react-router-dom';
import { LocalConvenienceStoreOutlined } from '@material-ui/icons';

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
    padding:'20px 20px 20px 20px ',
  },
  routeBtn:{
    color:"#000",
    fontFamily: 'Poppins',
    fontWeight: 'fontWeightLight',
    alignItems: 'center',
  },
  

}));


function App() {



  const classes = useStyles();

  const [news, setNews] = useState([{"title":"","description":"","img_uri":""}])
  const [showNews, setShowNews] = useState(false)
  const [isAuthenticated, setAuthenticated] = useState(false)


  useEffect(() => {
    const getNews = async () => {
      const newsFromServer = await fetchNews()

      if(newsFromServer.length == 0 ){
        setShowNews(false)
      }else{
        setShowNews(true)
        setNews(newsFromServer)
      }

    }
    getNews()
  }, [])

  
  useEffect(() => {
    const authenticate = async () => {
      const authenticationStatus = await authenticateUser()
      if(authenticationStatus.status == 200){
        setAuthenticated(true)
      }else{
        setAuthenticated(false)
      }

    }
    authenticate()
  }, [])


  // Fetch all News
  const authenticateUser = async () => {
    
    const requestOptions = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': ' application/json',
        'Authorization': "Bearer "+localStorage.getItem('Token')
              },
  };
    

    const res = await fetch("http://localhost:8080/api/authenticate",requestOptions)
    const data = await res.json()

    return data

  }





  //Handle Authentication
  const authenticate = (b) => {
    setAuthenticated(b)
  }


  // Fetch all News
  const fetchNews = async () => {
    
    const requestOptions = {
      headers: {
        'Accept': 'application/json',
          'Content-Type': ' application/json',
              },
  };
    
    const res = await fetch("http://localhost:8080/api/news",requestOptions)
    
    const data = await res.json()

    return data

  }



  return (
    <Router>

      <Route path='/' exact>
 
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

                  {/* <Button color="inherit">
                    <Typography variant="subtitle1" className={classes.navbtns}>
                      News
                    </Typography>
                    </Button> */}

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

{/* News Carousel     */}
          < Container>
          { showNews ?  <Carousel news={news}/> : <div></div>}
          </Container>

          <Divider/>



{/* Facebook section and Map */}


<Facebook></Facebook>


{/* About Section */}
          < Container  className={classes.carousel}>
            <About/>
          </Container>

          <Footer/>

        </div>



    </Route>

    <Route path='/services'>

                <Services/>

    </Route>


    <Route path='/admin'>

        { isAuthenticated ? <NewsAdminPanel authenticate={authenticate}/> : 
            <Admin  authenticate={authenticate} ></Admin>
        }

    </Route>

    </Router>

  );
}

export default App;
