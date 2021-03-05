import React from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Acc1 from '../../assets/acc1.jpg';
import Acc2 from '../../assets/acc2.jpg';
import Acc3 from '../../assets/acc3.jpg';
import Acc5 from '../../assets/acc5.jpg';
import Acc4 from '../../assets/acc4.jpg';
import Acc6 from '../../assets/acc6.jpg';


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
        marginTop:60,
        marginBottom:60,
        },

        titleimg:{
            fontFamily: 'Poppins',
            fontWeight: 'fontWeightMedium',
            alignItems: 'center',
            marginBottom:6,
            },

    paper: {
        padding: 20,
        textAlign: 'center',
        },

    grid:{
        marginTop:20,
    },
    img:{
        width:'100%'
    }
    })


const Accomodation = () => {

    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Typography variant="h4" className={classes.title} color="primary">
                Accomodation Facilities
            </Typography>

            <Typography variant="body1" className={classes.text}>
            Many patients and their family members come from distant places to the Kandy hospital cancer clinic and are unable to get back to their homes at the same day face similar problems. The Cancer Society provides free overnight accommondation at the Cancer Home. This building was constructed at the initiative of the President Mr.Mohan Samarakoon in 2002 with generous donations from the community.
            </Typography>



            <Grid container spacing={3} className={classes.grid}>

                <Grid item xs={12} sm={4}>
                <Paper className={classes.paper}>

                 <Typography variant="subtitle1" gutterBottom className={classes.titleimg} color="primary">
                         Auditorium & Audio Visual Centre.
                 </Typography>
                    <img src={Acc1} className={classes.img}></img>
                </Paper>
                </Grid>  

                <Grid item xs={12} sm={4}>
                <Paper className={classes.paper}>

                <Typography variant="subtitle1" gutterBottom className={classes.titleimg} color="primary">
                         Facilities for Accomodation
                 </Typography>

                     <img src={Acc2} className={classes.img}></img>
                </Paper>
                </Grid>  

                <Grid item xs={12} sm={4}>
                <Paper className={classes.paper}>

                <Typography variant="subtitle1" gutterBottom className={classes.titleimg} color="primary">
                         Reading & Entertainment Facilities
                 </Typography>

                     <img src={Acc3} className={classes.img}></img>
                </Paper>
                </Grid>  

                <Grid item xs={12} sm={4}>
                <Paper className={classes.paper}>
                <Typography variant="subtitle1" gutterBottom className={classes.titleimg} color="primary">
                     Cancer Awareness Training Centre
                 </Typography>

                    <img src={Acc5} className={classes.img}></img>
                </Paper>
                </Grid>  

                <Grid item xs={12} sm={4}>
                <Paper className={classes.paper}>
                <Typography variant="subtitle1" gutterBottom className={classes.titleimg} color="primary">
                     Dining Facilities for Patients
                 </Typography>

                    <img src={Acc4} className={classes.img}></img>
                </Paper>
                </Grid>  

                <Grid item xs={12} sm={4}>
                <Paper className={classes.paper}>
                <Typography variant="subtitle1" gutterBottom className={classes.titleimg} color="primary">
                     Transportation Facilities for Patients
                 </Typography>

                    <img src={Acc6} className={classes.img}></img>
                </Paper>
                </Grid>  



            </Grid>
          



            
        </Container>
    )
}

export default Accomodation
