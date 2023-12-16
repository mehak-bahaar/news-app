import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Badge } from '@mui/material';

export class NewsItem extends Component {
  handleOnClick = (url) => {
    let newLink = url;
    window.open(newLink, "_blank");
  };
  handleDate = (date) =>{

    const newsDate = new Date(date);
    const today = new Date();
    const timeDifference = today.getTime() - newsDate.getTime();
    const daysDifference = timeDifference / (1000 * 3600 * 24);

    return daysDifference <= 2;
  }

  render() {
    let { title, description, imageUrl, newsUrl, author, publishedAt } =
      this.props;
    return (
      <div style={{ backgroundColor: "#958AB6", color: "#FCE8FF" }}>
        <Card
          sx={{
            backgroundColor: "#958AB6",
            color: "#FCE8FF",
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
          {this.handleDate(publishedAt) && (
            <Badge
              badgeContent={"New"}
              color="secondary"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              style={{ position: "absolute" }}
            ></Badge>
          )}
          <CardMedia
            // sx={{ height: 140 }}
            xl={{ width: 600 }}
            lg={{ width: 500 }}
            image={imageUrl}
            title={title}
            component="img"
            height="140"
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}

              {/* <MailIcon color="action" /> */}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {description}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.primary"
              component="div"
            >
              {`By: ${author}`}
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
            >
              {`published at: ${new Date(publishedAt).toGMTString()}`}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              variant="outlined"
              href={newsUrl}
              target="_blank"
              color="primary"
            >
              Learn More
            </Button>
            {/* <Button
              size="small"
              variant="outlined"
              onClick={() => this.handleCopyLink(newsUrl)}
            >
              Share
            </Button> */}
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default NewsItem
