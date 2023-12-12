import React, { Component } from 'react'
import NewsItem from '../NewsItem/NewsItem'
import { Grid } from '@mui/material'


export class News extends Component {
  article = [
  ];

  constructor() {
    super();
    this.state = {
      article: this.article,
      loading: false,
    };
  }
  async componentDidMount() {
    try {
      const url =
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7ee4747673844949a3f32589fed1cbdf";
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const parsedData = await response.json();
      console.log(parsedData);

      if (parsedData.articles) {
        this.setState({ article: parsedData.articles, loading: false });
      } else {
        console.error("Error fetching data:", parsedData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error, set state accordingly
      this.setState({ loading: false, error: error.message });
    }
  }

  render() {
    return (
      <>
        <h1 className="my-3">Hacker News-Top Headlines</h1>
        <Grid
          container
          rowSpacing={5}
          columnSpacing={{ xs: 5, sm: 6, md: 7 }}
          style={{ padding: "30px" }}
        >
          {this.state.article.map((elem) => {
            console.log(elem);
            return (
              <Grid item xs={4} key={elem.url}>
                <NewsItem
                  title={elem.title ? elem.title.slice(0, 45) + "..." : ""}
                  description={
                    elem.description
                      ? elem.description.slice(0, 88) + "..."
                      : ""
                  }
                  imageUrl={
                    elem.urlToImage
                      ? elem.urlToImage
                      : "https://www.teslarati.com/wp-content/uploads/2023/12/tesla-cybertruck-7.jpg"
                  }
                  newsUrl={elem.url}
                />
              </Grid>
            );
          })}
        </Grid>
      </>
    );
  }
}

export default News
