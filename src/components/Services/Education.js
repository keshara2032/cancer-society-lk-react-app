import React from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import EP1 from '../../assets/ep1_gray.jpg'



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
        fontSize:16,
        paddingTop:10,
        paddingBottom:20,
      },
      Container:{
          paddingBottom:30
      }
    })

const Education = () => {

    const classes = useStyles();



    return (
        <Container>

         <Typography variant="h4" className={classes.title} color="primary">
         Education Programme
        </Typography>

        <Container className={classes.Container}>

        <Paper className={classes.paper} elevation={2}>
        
        <Container>

        <img src={EP1} className={classes.img}></img>

        
        <Typography variant="body1" gutterBottom className={classes.titleimg}>
        Executive committee decided to assist a School going children of parent afflicted with Cancer. Rupees Two Thousand Five Hundred (Rs. 2500/-) per School kid and Rupees Five Thousand (Rs.5000/-) for university student are given on 1 st of every month. Directly to the Bank accounts.     
        </Typography>


             <Typography variant="overline" gutterBottom className={classes.bottomText} display="block">
             The recipient forwarded a progress of their education quarterly whilst moneys lodges are acknowledged on a monthly basis. We appeal to you to donate to joint this programe and assist the Kids.         
                </Typography>


                
        </Container>
        
        </Paper>

        </Container>

            
        </Container>
    )
}

export default Education
