import React from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import PCD1 from '../../assets/pcd1.jpg'



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
        fontSize:20,
        paddingTop:10,
        paddingBottom:20,
      },
      Container:{
          paddingBottom:30
      }
    })


const Drugs = () => {

    const classes = useStyles();


    return (
        <Container>

         <Typography variant="h4" className={classes.title} color="primary">
         Provision of Cancer Drugs
        </Typography>

        <Container className={classes.Container}>

        <Paper className={classes.paper} elevation={2}>
        
        <Container>

        <img src={PCD1} className={classes.img}></img>

        
        <Typography variant="body1" gutterBottom className={classes.titleimg}>
        The Society operates a fund to provide urgently required Cancer drugs to patients who cannot afford to purchase them. A prescription is required by the Consultant Oncologist and referred to the Society for assistance.        
        </Typography>


             <Typography variant="overline" gutterBottom className={classes.bottomText} display="block">
             Funds are urgently required to sustain this useful service , hence We appeal to you to come on board.               
                </Typography>

                
        </Container>
        
        </Paper>

        </Container>

            
        </Container>
    )
}

export default Drugs
