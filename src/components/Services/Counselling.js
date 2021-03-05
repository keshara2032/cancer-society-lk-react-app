import React from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import Divider from '@material-ui/core/Divider';

import Coun1 from '../../assets/coun1.jpg'
import Coun2 from '../../assets/coun2.jpg'
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
            marginBottom:10,
            },

    paper: {
        padding: 20,
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
        paddingTop:10,
        paddingBottom:20,
      }
    })



const Counselling = () => {

    
    const classes = useStyles();


    return (

        <Container className={classes.root}>

          <Typography variant="h4" className={classes.title} color="primary">
               Counselling Centre
        </Typography>

        <Typography variant="body1" className={classes.text}>

        The initial reaction to a diagnosis of cancer is unbearable mental trauma for both the patient and the family , everything falls apart it is the end of the road – the end of all hope and all plans made for oneself and the family. This is so unlike the diagnosis of other major illnesses such as hypertension, diabetes, or eye disease. In this situation, there is no element of pronouncement of a malignant disease. Both therapeutic procedures and management of mental distress claim equal attention by the patient with the latter in the form of counselling by trained and competent persons.
        They are many cogent reasons for establishing a well organized Counselling Service.
        </Typography>


        <Grid container spacing={3} className={classes.grid}>

            <Grid item xs={12} sm={6}>

            <Paper className={classes.paper}>

             <Typography variant="subtitle1" gutterBottom className={classes.titleimg} color="primary">
             Counselling is not possible at a crowded busy cancer clinic where the oncologist and his assistants cannot devote any time to this field of management.             
             </Typography>

             <img src={Coun1} className={classes.img}></img>


             <Typography variant="body2" gutterBottom className={classes.titleimg}>
             The concept of counselling of cancer patients and their next of kin came about as a response of the Society to the fact that counselling constitutes an important and integral part of cancer care, almost always the diagnosis of cancer to many is a death sentence – the end of the road- a feeling of hopelessness with no where to turn to.            
             </Typography>
           
             <Typography variant="button" gutterBottom className={classes.titleimg}>
             They are many cogent reasons for establishing a well organized Counselling Service.
             </Typography>

            </Paper>
            </Grid>  



            <Grid item xs={12} sm={6}>

            <Paper className={classes.paper}>

             <Typography variant="subtitle1" gutterBottom className={classes.titleimg} color="primary">

             Cancer specialists consider counselling an important area of cancer care because the patient and the family have no knowledge of cancer and thereby harbour negative attitudes.             </Typography>

             <img src={Coun2} className={classes.img}></img>


             <Typography variant="body2" gutterBottom className={classes.titleimg}>
             It is a duty that cancer carers owe the community as patient have nowhere to turn to for help, empathy and advice. Cancer can be a heavy Stress on family members who themselves have no knowledge of this disease and have their own personal care and concerns.            
             </Typography>
           
             <Typography variant="button" gutterBottom className={classes.titleimg}>
             The Cancer Society considers needs of the patient and the family of paramount importance and that they must be afforded the correct advice in a confidential environment.
             </Typography>

            </Paper>

            </Grid>  

            <Divider/>

            <Grid item xs={12} >

            <Typography variant="body1" gutterBottom className={classes.bottomText}>
            Sixteen years of counselling in the Cancer Home has more than convinced the members that counselling is a most effective and humanitarian service they can render to their fellow beings.             
             </Typography>
           

             <Typography variant="body1" gutterBottom className={classes.bottomText}>
             Carefully selected persons undergo a well-organized programme of counselling by a team of resource persons which includes cancer specialist, Psychotherapists and trainers from Sumithrayo. Holistic medicine and hypnotherapy are included in the programme.            
             </Typography>


            <Divider/>


             <Typography variant="overline" gutterBottom className={classes.titleimg} display="block">
             The counselling service which is conducted in a confidential, empathetic and supportive environment is available daily from Monday to Friday 9.00 a.m. to 5.00 p.m. The counselling centre is a donation by the staff of the Bank of Ceylon, Kandy             </Typography>
            </Grid>  


        </Grid>

        </Container>
        
        

    )
}

export default Counselling
