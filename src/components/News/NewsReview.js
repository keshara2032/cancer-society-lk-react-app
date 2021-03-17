import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1,5),

  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
    fontFamily: 'Poppins',
    fontWeight: 'fontWeightLight',
    alignItems: 'center',
  },
  text:{
    fontFamily: 'Poppins',
    fontWeight: 'fontWeightLight',
    alignItems: 'center',
  },
  text2:{
    fontFamily: 'Poppins',
    fontWeight: 'fontWeightBold',
    alignItems: 'center',
    justify:'center',
    color:'#757575'
    
  }
}));

export default function Review({newsTitle,newsLocation, newsBody, newsDate, newsImage}) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container>
      {/* <Grid container spacing={3}>
        <Grid item xs={12}>
          
        <TextField disabled id="cardName" label={"News Description " } fullWidth multiline 
             rows={14}   className={classes.text} value={newsBody}
        />
        </Grid>

      </Grid> */}

      <Typography variant="h6" gutterBottom className={classes.text}>
        News Post Summary
      </Typography>

      <List disablePadding>

        <ListItem className={classes.listItem}>
          <ListItemText >  
          
          <Typography variant="subtitle1" className={classes.text2}>
            News Title
          </Typography>

          </ListItemText>


          <Typography variant="subtitle1" className={classes.text}>
            {newsTitle}
          </Typography>
        </ListItem>

        <Divider></Divider>

        <ListItem className={classes.listItem}>
          <ListItemText >  
          
          <Typography variant="subtitle1" className={classes.text2}>
            News Location
          </Typography>

          </ListItemText>


          <Typography variant="subtitle1" className={classes.text}>
            {newsLocation}
          </Typography>
        </ListItem>

      <Divider></Divider>


      <ListItem className={classes.listItem}>
          <ListItemText >  
          
          <Typography variant="subtitle1" className={classes.text2}>
            News Date
          </Typography>

          </ListItemText>


          <Typography variant="subtitle1" className={classes.text}>
            {newsDate.toString()}
          </Typography>
        </ListItem>

      <Divider></Divider>
        <ListItem className={classes.listItem}>
          <Container >

          <ListItemText >  
          <Typography variant="subtitle1" className={classes.text2} align="center">
            News Body
          </Typography>
          </ListItemText>


        <TextField disabled id="cardName" fullWidth multiline 
              variant='outlined'  className={classes.text} value={newsBody}
        />
          </Container>

        </ListItem>

        <Divider></Divider>

        <ListItem className={classes.listItem}>
          <ListItemText >  
          
          <Typography variant="subtitle1" className={classes.text2}>
            News Image
          </Typography>

          </ListItemText>


          <Typography variant="subtitle1" className={classes.text}>
            {newsImage === null ? 'No Image Selected': newsImage.name}
          </Typography>
        </ListItem>

      </List>
      </Container>

    </React.Fragment>
  );
}
