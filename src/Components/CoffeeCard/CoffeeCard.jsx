import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import { Avatar, CardActionArea, IconButton } from "@material-ui/core";
// import ShareIcon from "@material-ui/icons/Share";
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
//   bullet: {
//     display: "inline-block",
//     margin: "0 2px",
//     transform: "scale(0.8)",
//   },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  avatar: {
    objectFit:"cover"
  },
});

export default function CoffeeCard({
  avatarUrl,
  title,
  subtitle,
  description,
  imageUrl,
}) {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        avatar={<Avatar className={classes.avatar} src={avatarUrl}></Avatar>}
        action={
          <IconButton aria-label="settings">
            {/* <ShareIcon /> */}
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
      <CardActionArea>
        <CardMedia style={{height:"150px", backgroundSize:"contain"}} image={imageUrl} />
      </CardActionArea>
      <CardContent>
          <Typography>
          {description}
          </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy Now</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
