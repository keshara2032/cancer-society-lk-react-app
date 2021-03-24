import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import { Container } from "@material-ui/core";

import Address from './Address'

import DonateDialogBanner from '../assets/donatecardbanner.svg'

const useStyles = makeStyles((theme) => ({
    form: {
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto',
      width: 'fit-content',
    },
    formControl: {
      marginTop: theme.spacing(2),
      minWidth: 120,
    },
    formControlLabel: {
      marginTop: theme.spacing(1),
    },
    title: {
      margin: 'auto',
      width: 'fit-content',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Poppins',
      fontWeight: 'fontWeightLight',
      color:"#f54272",

    },
    quote: {
      margin: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Poppins',
      fontWeight: 'fontWeightLight',
      fontSize:'16px'

    },
    dialogcontent: {
      margin: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      fontFamily: 'Poppins',
      fontWeight: 'fontWeightLight',
    },
    container:{
      margin: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
    }

  }));


const DonateDialog = ({open,handleClose}) => {

  const classes = useStyles();

  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('lg');

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(event.target.value);
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  return (
    <React.Fragment>
  
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        scroll='body'
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title"  className={classes.title} >
            <Typography variant="h4" component={'span'} className={classes.title} >
                Let's Donate
            </Typography>
          </DialogTitle>
          
        <DialogContent className={classes.dialogcontent} >

          <DialogContentText   >


          </DialogContentText>
        

          <img src={DonateDialogBanner} />

         {/* <Container className={classes.container}>

          <Typography variant="overline" className={classes.quote}>
                "Giving is not just about a decision... It's about making a difference..."
            </Typography>

         </Container> */}

         <Address/>



        </DialogContent>



        

        <DialogActions>
          <Button onClick={handleClose} color="primary" className={classes.button}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default DonateDialog
