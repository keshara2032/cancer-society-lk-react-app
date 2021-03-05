import React from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import FPS1 from '../../assets/fps1.jpg'



const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent:'center',
      direction:'row',
      paddingBottom:60

    },
    text:{
        fontFamily: 'Poppins',
        fontWeight: 'fontWeightLight',
        alignItems: 'center',
        },

    title:{
        fontFamily: 'Poppins',
        fontWeight: 'fontWeightLight',
        alignItems: 'center',
        marginTop:40,
        marginBottom:30,
        },

        titleimg:{
            fontFamily: 'Poppins',
            fontWeight: 'fontWeightMedium',
            alignItems: 'center',
            marginBottom:10,
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
        fontSize:15,
        paddingTop:10,
        paddingBottom:20,
      },
      Container:{
          paddingBottom:30
      }
    })




const Foster = () => {

    const classes = useStyles();

    return (
        <Container>

         <Typography variant="h4" className={classes.title} color="primary">
               Foster Parent Scheme
        </Typography>

        <Container className={classes.Container}>

        <Paper className={classes.paper} elevation={2}>
        
        <Container>

        <img src={FPS1} className={classes.img}></img>

        
        <Typography variant="body1" gutterBottom className={classes.titleimg}>
        A counsellor from the Society is assigned to the children’s clinic of the Kandy Hospital Unit and delegated the functions of providing overall needs of the children. Prospective foster parents who wish to adopt deserving children identified by the counsellor donate Rs. 3000/= or more monthly to meet the expenses of a child.
        </Typography>


             <Typography variant="overline" gutterBottom className={classes.bottomText} display="block">
             These donations are given to children for their nourishment and drugs as necessary. Many caring persons are readily volunteering to adopt the cancer afflicted children. We earnestly appeal for more donors to act as foster parents.
                </Typography>

                
        </Container>
        
        </Paper>

        </Container>

            
        </Container>
    )
}

export default Foster
