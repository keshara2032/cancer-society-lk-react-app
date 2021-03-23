import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from "@material-ui/core";

import {
    FacebookShareCount,
    FacebookShareButton,
    FacebookIcon } from  "react-share";


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      minWidth:300,
      margin:'20px 20px 20px 20px'
    },
    media: {
      height: 170,
    },
    title: {
        fontFamily: 'Poppins',
        color:"#f54272"
      },
  });

const shareUrl = 'https://www.cancerhomekandy.com'
const quote = "Giving is not just about a decision... It's about making a difference...  Let us contribute however we can for a better future!"
const DonateCard = ({title, msg, img}) => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image={img}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Account Number : {msg.acc_num}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Account Number : {msg.bank_details}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Account Number : {msg.sc}
            </Typography>
            
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Container>

           <FacebookShareButton
            url={shareUrl}
            quote={quote}
            className="Demo__some-network__share-button"
           >
             {/* <FacebookIcon size={32} square /> */}

             <Typography variant="h6" className={classes.title}  >
                Share
            </Typography>
          </FacebookShareButton>

          </Container>

        </CardActions>
        </Card>
    )
}

export default DonateCard
