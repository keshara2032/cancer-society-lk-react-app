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
import Food1 from '../../assets/food1.jpg'
import Food2 from '../../assets/food2.jpg'
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
    })



const Dining = () => {


    const classes = useStyles();
    const [dense, setDense] = React.useState(false);


    return (
        <Container className={classes.root}>
        <Typography variant="h4" className={classes.title} color="primary">
            Dining Facilities
        </Typography>

        <Typography variant="body1" className={classes.text}>
        Cancer patients require a nutritious and a healthy diet. So we have to prepare meals for each of them. Caring for a person with cancer means meeting their most basic needs, and there’s no need more basic than food. It take more cost than usual patient meals. Providing nutritious and appealing food choices for someone you love is an important way to help them get and stay well.        </Typography>



        <Grid container spacing={3} className={classes.grid}>

            <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>

             <Typography variant="subtitle1" gutterBottom className={classes.titleimg} color="primary">
                     Dining Hall
             </Typography>

             <img src={Food2} className={classes.img}></img>


             <Typography variant="body2" gutterBottom className={classes.titleimg}>
             Substantial extension and improvements have been undertaken to the Patients' dining room recently. This has been made possible by a generous donation by Dr. Lakshman Dias in memory of his late son Dilanka Dias and Mrs. Rukmany Ekanayake a committe member of our society.
             </Typography>
           
           
            </Paper>
            </Grid>  

            <Grid item xs={12} sm={8}>


            <Paper className={classes.paper}>

            <Typography variant="subtitle1" gutterBottom className={classes.titleimg} color="primary">
                 Estimated cost for Patient Meals
             </Typography>

            <Grid container>

             <Grid item sm={6}>

             <List dense={dense}>

                <ListItem  >
                  <ListItemAvatar>
                    <Avatar className={classes.avatar}>
                      <FastfoodIcon color="primary" fontSize="large"/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    disableTypography

                    
                    primary={ <Container>
                    
                                <Typography variant="h6" gutterBottom className={classes.list_text} >
                                  Breakfast  
                              </Typography>

                              <Typography variant="subtitle1" gutterBottom className={classes.list_text} >
                                   Rs. 4000.00
                                 </Typography>

                              </Container>

                            }
             
                  />
                </ListItem>



                <ListItem  >
                  <ListItemAvatar>
                    <Avatar className={classes.avatar}>
                      <LocalCafeIcon color="primary" fontSize="large"/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    disableTypography

                    
                    primary={ <Container>
                    
                                <Typography variant="h6" gutterBottom className={classes.list_text} >
                                  Tea  
                              </Typography>

                              <Typography variant="subtitle1" gutterBottom className={classes.list_text} >
                                   Rs. 2500.00
                                 </Typography>

                              </Container>

                            }
             
                  />
                </ListItem>

                <ListItem  >
                  <ListItemAvatar>
                    <Avatar className={classes.avatar}>
                      <FastfoodIcon color="primary" fontSize="large"/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    disableTypography

                    
                    primary={ <Container>
                    
                                <Typography variant="h6" gutterBottom className={classes.list_text} >
                                  Lunch  
                              </Typography>

                              <Typography variant="subtitle1" gutterBottom className={classes.list_text} >
                                   Rs. 5000.00
                                 </Typography>

                              </Container>

                            }
             
                  />
                </ListItem>



                <ListItem  >
                  <ListItemAvatar>
                    <Avatar className={classes.avatar}>
                      <FastfoodIcon color="primary" fontSize="large"/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    disableTypography

                    
                    primary={ <Container>
                    
                                <Typography variant="h6" gutterBottom className={classes.list_text} >
                                  Dinner  
                              </Typography>

                              <Typography variant="subtitle1" gutterBottom className={classes.list_text} >
                                   Rs. 4000.00
                                 </Typography>

                              </Container>

                            }
             
                  />
                </ListItem>


               <ListItem  >
                  <ListItemAvatar>
                    <Avatar className={classes.avatar}>
                      <LocalCafeIcon color="primary" fontSize="large"/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    disableTypography

                    
                    primary={ <Container>
                    
                                <Typography variant="h6" gutterBottom className={classes.list_text} >
                                  Tea  
                              </Typography>

                              <Typography variant="subtitle1" gutterBottom className={classes.list_text} >
                                   Rs. 2500.00
                                 </Typography>

                              </Container>

                            }
             
                  />
                </ListItem>

            </List>

            </Grid>  

            <Grid item sm={6}>

            <Container>

            <img src={Food1} className={classes.img2} ></img>
            <Typography variant="subtitle2" gutterBottom className={classes.titleimg} >
                 Meals are prepared inhouse with clean and safe methods.
             </Typography>

            </Container>



            </Grid>  

            </Grid>  

            </Paper>

            </Grid>



        </Grid>
        
    </Container>
    )
}

export default Dining
