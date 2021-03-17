import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

export default function NewsBodyForm({handleNewsBodyData, handleNewsImageData, newsBody, newsImage}) {

  const useStyles = makeStyles((theme) => ({
    btn: {
      fontFamily: 'Poppins',
      fontWeight: 'fontWeightLight',
      alignItems: 'center',
    },
    text: {
      fontFamily: 'Poppins',
      fontWeight: 'fontWeightLight',
      alignItems: 'center',
  
    },
  }));
  
  const [charCount, setCharCount] = React.useState(0)
  const maxCharCount = 500

  const handleCharCount =  function(e){

    var currentText = e.target.value;
    //Now we need to recalculate the number of characters that have been typed in so far
    var characterCount = currentText.length;
    var charsPerPageCount = maxCharCount;
    var unitCount = Math.round(characterCount/charsPerPageCount);
    setCharCount(characterCount)

    handleNewsBodyData({
      body : currentText
    })

}

   // On file select (from the pop up)
   const onFileChange = event => {
    // Update the state
    console.log(event.target.files[0])

    handleNewsImageData({
      image: event.target.files[0]
    }
    )

  };


const classes = useStyles();



  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom className={classes.text}>
        News Description
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField required id="cardName" label={"Brief Description " + charCount + "/" + maxCharCount } fullWidth autoComplete="cc-name"  multiline 
            variant="outlined"  rows={14} onChange={handleCharCount}  className={classes.text} value={newsBody}
            inputProps={{
              maxLength: maxCharCount
            }}
            />
        </Grid>
      
        <Grid item xs={12}>

        <Button
          variant="contained"
          component="label"
          color="primary"
          fullWidth
          className = {classes.btn}
        >
          Upload File
          <input
            type="file"
            hidden
            onChange={onFileChange}
          />
        </Button>

        </Grid>
      </Grid>
    </React.Fragment>
  );
}
