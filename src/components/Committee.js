import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';


// Avatar Images
import Marina from '../assets/Board/Marina.jpg'
import Mohan from '../assets/Board/Mohan.jpg'
import Bandu from '../assets/Board/Bandu.jpg'
import Thayalam from '../assets/Board/Thayalam.jpg'


const card1 = { name:"Mrs. Thayalam Varagunam",  position: "President", initial:"T", img:Thayalam }
const card2 = { name: "Mr. Mohan Samarakoon",  position: "Vice President", initial:"M", img:Mohan }
const card3 = { name: "Mrs. Marina Tennekoon",  position: "Vice President", initial:"M", img:Marina }
const card4 = { name: "Ms. Mirani Liyanage",  position: "Vice President", initial:"M", img:null }
const card5 = { name: "Mr. Rohan Bambaradeniya",  position: "Secretary", initial:"R", img:null }
const card6 = { name: "Dr. Susil Siriwardane",  position: "Asst. Secretary", initial:"S", img:null }
const card7 = { name: "Mr. V.Subramanium",  position: "Treasurer", initial:"V", img:null }
const card8 = { name: "Dr. Gamini Dissanayake",  position: "Asst. Treasurer", initial:"G", img:null }

const cards = [card1,card2,card3,card4,card5,card6,card7,card8]

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      display: 'flex',

    },
    name: {
        flexGrow: 1,
        fontFamily: 'Poppins',
        fontWeight: 'fontWeightMedium',
        color:"#f54272",
        padding:"6px",
        paddingTop:"15px"
      },

      title: {
        flexGrow: 1,
        fontFamily: 'Poppins',
        fontWeight: 'fontWeightHeavy',
        color:"#f54272",
        paddingTop:"60px",
        paddingBottom:"30px"

      },
      large: {
        flexGrow: 1,
        width: theme.spacing(16),
        height: theme.spacing(16),
        alignItems: 'center',
        justify:'center',
        margin:"auto",
        
      },
      paper:{
        //   width:'250px',
        //   height:'250px',
        minWidth: 275,
        minHeight:250,
        paddingTop:'20px',
        margin:'5px 5px 5px 5px'


      },

      orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: "#ad0045",
        flexGrow: 1,
        width: theme.spacing(16),
        height: theme.spacing(16),
        alignItems: 'center',
        justify:'center',
        margin:"auto",
        fontSize: '50px'

      },
      purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
        flexGrow: 1,
        width: theme.spacing(16),
        height: theme.spacing(16),
        alignItems: 'center',
        justify:'center',
        margin:"auto",
        fontSize: '50px'

      },
      grid:{
        flexGrow: 1,
        padding:'20px ',
        direction:'row',
        justify:'center',
        alignItems:'center'
      },

      color:{
        orange: {
            color: theme.palette.getContrastText(deepOrange[500]),
            backgroundColor: "#ad0045",
            flexGrow: 1,
            width: theme.spacing(16),
            height: theme.spacing(16),
            alignItems: 'center',
            justify:'center',
            margin:"auto",
            fontSize: '50px'
    
          },
          purple: {
            color: theme.palette.getContrastText(deepPurple[500]),
            backgroundColor: deepPurple[500],
            flexGrow: 1,
            width: theme.spacing(16),
            height: theme.spacing(16),
            alignItems: 'center',
            justify:'center',
            margin:"auto",
            fontSize: '50px'
    
          },
      }

  }));

const Committee = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>

    
       <Grid container  spacing={3} >

            <Typography variant="h4" className={classes.title}>
                               Board Of Management
            </Typography>

            
            <Grid item xs={12}>
            <Divider/>


              <Grid container className={classes.grid} justify="center" >

                {
                  cards.map((card, index) => (


                    <Paper key={index} className={classes.paper} elevation={0}>
                    <Avatar alt="Remy Sharp" className={ index%2 === 0 ? classes.orange : classes.purple} src={card.img === null ?   null : card.img } >
                      {card.img === null ?   card.initial : '' }
                    </Avatar>
              
                       <Typography variant="h6" className={classes.name}>
                         {card.name}
                       </Typography>
              
                       <Typography variant="button" className={classes.name}>
                        {card.position}
                       </Typography>
                       
                    </Paper>   

                  ))
                }

              </Grid>
            </Grid>
          </Grid>
       


    </div>
  )
}

export default Committee
