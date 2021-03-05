import React from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from './AwarenessTileData';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      alignItems: 'center',
      direction:'row',
      flexWrap: 'wrap',
      paddingBottom:60,
      justifyContent: 'space-around',
      overflow: 'hidden',
    },

      gridList: {
        width: "100%",
        height: 450,
      },
      icon: {
        color: 'rgba(255, 255, 255, 0.54)',
      },
    text:{
        fontFamily: 'Poppins',
        fontWeight: 'fontWeightLight',
        alignItems: 'center',
        marginBottom:30,

        },

    title:{
        fontFamily: 'Poppins',
        fontWeight: 'fontWeightLight',
        alignItems: 'center',
        marginTop:40,
        marginBottom:30,
        },

        grid_title:{
            fontFamily: 'Poppins',
            fontWeight: 'fontWeightLight',
            alignItems: 'center',
            },

    paper: {
        paddingTop: 20,
        paddingBottom:30,
        textAlign: 'center',
        },

    grid:{
        marginTop:20,
    },
    img:{
        width:'100%',
        paddingBottom:20
    },
    img2:{
        width:'100%',
        paddingTop:60,
        paddingBottom:20,
        borderRadius:'20%'
    },
    list_text:{
        fontFamily: 'Poppins',
        fontWeight: 'fontWeightLight',
        alignItems: 'center',
        paddingLeft:20,
        bottom:0
    },
    avatar: {
        width: 60,
        height: 60,
      },
      bottomText:{
        fontFamily: 'Poppins',
        fontWeight: 'fontWeightLight',
        alignItems: 'center',
        fontSize:20,
        paddingTop:10,
        paddingBottom:20,
      },
      Container:{
          paddingBottom:30
      }
    })


const Awareness = () => {

    const classes = useStyles();

    return (
        <Container>

         <Typography variant="h4" className={classes.title} color="primary">
         Cancer Awareness Programmes
        </Typography>

        <Container className={classes.Container}>

        <Paper className={classes.paper} elevation={0}>
        
        <Container>
        
        <Typography variant="body1" gutterBottom className={classes.text}>
        It is a globally accepted fact that Awareness of risks, prevention and early detection constitute a very important factor in the management and containment of Cancer. In pursuance of this important need to the community, the sociery conducts Cancer awareness programees in schools, institutions and for voluntary organizations as outreach programmes.      
        </Typography>

        <Typography variant="body1" gutterBottom className={classes.text}>
        With the construction of our Auditorium, regular awareness programs are conducted for teachers, senior students, voluntary organizations, mercantile sector, Villages and the plantation sector. The resource persons are Cancer oncologist, medical and dental consultants from the Kandy and Peradeniya hospitals. These programees continue to be conducted for large groups of participants.        
        </Typography>

        <Typography variant="body1" gutterBottom className={classes.text}>
        At these programees, pre and post session questionnaires on Cancer knowledge are evaluated. Relavant literature is also distributed among the participants. We believe that Cancer awareness programmes are the most effective way of disseminating correct and scientific information about Cancer and its prevention.        
        </Typography>

        <Divider/>

          <ListSubheader component="div" className={classes.bottomText}>Previous Programmes</ListSubheader>

        <Container>

        <GridList cellHeight={250} className={classes.gridList}>
   
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
             className={classes.grid_title}
              title={tile.title}
              subtitle={<span>Date: {tile.date}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>

      </Container>



                
        </Container>
        
        </Paper>

        </Container>

            
        </Container>
    )
}

export default Awareness
