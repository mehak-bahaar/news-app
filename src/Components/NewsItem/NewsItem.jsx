import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export class NewsItem extends Component {
  handleOnClick =(url) =>{
    let newLink = url
    window.open(newLink , '_blank')
  }
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div style={{ backgroundColor: "#958AB6", color: "#FCE8FF" }}>
        <Card
          sx={{
            maxWidth: 345,
            transition: "backgroundColor 0.3s ease-in-out",
            transition: "transform 0.3s ease-in-out",
            overflow: "hidden",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#00000015",
              transform: "scale(1.005)",
            },
          }}
          color="primary"
          onClick={() => this.handleOnClick(newsUrl)}
        >
          <CardMedia
            // sx={{ height: 140 }}
            xl={{width: 600}}
            lg={{width: 500}}
            image={imageUrl}
            title={title}
            component="img"
            height="140"
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button size="small">Share</Button> */}
            <Button
              size="small"
              variant="outlined"
              href={newsUrl}
              target="_blank"
              color="primary"
            >
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default NewsItem
