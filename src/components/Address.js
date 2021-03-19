import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';

const props = {
    email: 'cancerhomekandy@gmail.com'
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      display: 'flex',

    },
    grid:{
        flexGrow: 1,
        padding:'20px ',
        direction:'row',
        justify:'center',
        alignItems:'center',
      },
      title: {
        flexGrow: 1,
        fontFamily: 'Poppins',
        fontWeight: 'fontWeightMedium',
        color:"#f54272",
        padding:"6px",
        paddingTop:"15px"
      },
      text: {
        flexGrow: 1,
        fontFamily: 'Poppins',
        fontWeight: 'fontWeightMedium',
        padding:"6px",
        paddingTop:"15px",
        textAlign: 'left',
        fontSize:"20px"

      },
      text2: {
        flexGrow: 1,
        fontFamily: 'Poppins',
        fontWeight: 'fontWeightMedium',
        padding:"10px",
        textAlign: 'left'

      },

      bank: {
        flexGrow: 1,
        fontFamily: 'Poppins',
        fontWeight: 'fontWeightMedium',
        padding:"10px",
        textAlign: 'left',
        color:"#f54272",


      },
      donation: {
          paddingTop:"20px"
      },

      bankdetails: {
        paddingLeft:"50px"
    }
}));


const Address = () => {

    const classes = useStyles();

    return (
        <div>

        <Grid container  spacing={3} >
             <Grid item xs={12} sm={4}>
              <Grid container className={classes.grid} justify="center" >

              <Typography variant="h5" className={classes.title}>
                         Official Address
               </Typography>

                
              <Container>
                <Divider/>

                <Typography variant="subtitle1" className={classes.text}>
                    Sri Lanka Cancer Society<br/>
            
                </Typography>

                <Typography variant="subtitle2" className={classes.text2}>
                    NO:11, Hanthana Road,<br/>
                    Kandy, SRI LANKA<br/>
                    Tel: 077-3069851 / 081-2205466 / 081-2205550<br/>
                    <a href={"mailto:" + props.email}>Email: cancerhomekandy@gmail.com </a>
                </Typography>
              </Container>

              </Grid>
             </Grid>
             

             <Grid item xs={12} sm={8} >

            <Container className={classes.donation}>

              <Typography variant="h5" className={classes.title}>
                         Donations
               </Typography>
               
               <Divider/>


            
               <div className='rowC' >

                <div>
                    <Typography variant="subtitle1" className={classes.bank}>
                    Account Name:
                    </Typography>

                    <Typography variant="subtitle1" className={classes.bank}>
                    Account No's:
                    </Typography>
                </div>

                <div className={classes.bankdetails}>
                    <Typography variant="subtitle1" className={classes.text2}>
                    Sri Lanka Cancer Society – Kandy Branch<br/>
                    </Typography>

                    <Typography variant="subtitle2" className={classes.text2}>
                    1002740502 – General Account (Commercial Bank - Kandy)<br/>
                    1002740501 – Drug Account (Commercial Bank - Kandy)<br/>
                    1000665301 – Meals Account (Commercial Bank - Kandy)<br/>
                    81576626 – Foster Parent Account (BOC Bank - Kandy)
                </Typography>
  
                </div>

     

              </div>

              <Typography variant="overline" className={classes.bank}>
                All donations are acknowledged officially with in the course of a week of receipt.
                </Typography>


              

              

            </Container>

             </Grid>





        </Grid>

        </div>
    )
}

export default Address
