import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


export default function TitleForm({handleNewsData}) {

  const [selectedDate, setSelectedDate] = React.useState(new Date('2021-01-01T21:11:54'))

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

    //Handle title form data
const handleTitleDataChange =  (event) => {
  event.preventDefault()
    handleNewsData({
      title : event.target.value
    })
  }


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Basic News Information 
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Title for the News Post"
            fullWidth
            required
            autoComplete="shipping address-line2"
            onChange={handleTitleDataChange}
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            required
            id="city"
            name="city"
            label="Location"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>

        <Grid item xs={12}  >

        <MuiPickersUtilsProvider utils={DateFnsUtils}>

          <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />

        </MuiPickersUtilsProvider>

        </Grid>

      </Grid>
    </React.Fragment>
  );
}
