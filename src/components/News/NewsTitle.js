import React, { useRef }  from 'react';
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


export default function TitleForm({handleNewsTitleData, handleNewsLocationData, handleNewsDateData, newsTitle, newsLocation, newsDate}) {

  const [selectedDate, setSelectedDate] = React.useState(new Date('2021-01-18'));

function convert(str) {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join("-");
}
  

const handleDateChange = (date) => {
  var convDate = convert(date);
  setSelectedDate(convDate);
  handleNewsDateData({
    date : convDate
  })
};

//Handle title form data
const handleTitleDataChange =  (event) => {

  event.preventDefault()
  handleNewsTitleData({
    title : event.target.value
  })

}

//Handle location form data
const handleLocationDataChange =  (event) => {

  event.preventDefault()
  handleNewsLocationData({
    location : event.target.value
  })

}

  return (

    <React.Fragment  >
      <Typography variant="h6" gutterBottom>
        Basic News Information 
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="title"
            name="title"
            label="Title for the News Post"
            value = {newsTitle}
            fullWidth
            required
            onChange={handleTitleDataChange}
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            required
            id="city"
            name="city"
            label="Location"
            value = {newsLocation}
            fullWidth
            onChange={handleLocationDataChange}

          />
        </Grid>

        <Grid item xs={12} >
        

        <MuiPickersUtilsProvider utils={DateFnsUtils} >

          <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd-MM-yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              onChange={handleDateChange}
              value={selectedDate}
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
