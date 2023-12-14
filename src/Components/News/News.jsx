import React, { Component } from 'react'
import NewsItem from '../NewsItem/NewsItem'
import { Button, Grid } from '@mui/material'
import Spinner from '../Spinner/Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
  static PropTypes = {
    pageSize: PropTypes.number,
    catagory: PropTypes.string,
  };
  static defaultProps = {
    pageSize: 21,
    catagory: "general",
  };
  article = [];

  constructor() {
    super();
    this.state = {
      article: this.article,
      loading: false,
      page: 1,
    };
  }
  fetchNewsApi = async (psize, pstate) => {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.catagory}&apiKey=7ee4747673844949a3f32589fed1cbdf&page=${psize}&pageSize=${this.props.pageSize}`;
      const response = await fetch(url);
      this.setState({ loading: true });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const parsedData = await response.json();
      console.log(parsedData);
      if (parsedData.articles) {
        this.setState({
          article: parsedData.articles,
          loading: false,
          totalArticles: parsedData.totalResults,
          page: pstate,
        });
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        console.error("Error fetching data:", parsedData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error, set state accordingly
      this.setState({ loading: false, error: error.message });
    }
  };
  async componentDidMount() {
    this.fetchNewsApi(1, this.state.page);
  }
  handlePreButton = async () => {
    console.log("previous");
    let prePage = this.state.page - 1;
    await this.fetchNewsApi(prePage, prePage);
  };

  handleNextButton = async () => {
    if (this.state.page > Math.ceil(this.state.totalArticles / 21)) {
    } else {
      console.log("next");
      let nextPage = this.state.page + 1;
      await this.fetchNewsApi(nextPage, nextPage);
    }
  };

  render() {
    return (
      <div style={{ color: "#FCE8FF", minHeight: "100vh" }}>
        <h1 className="my-3">Hacker News-Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <Grid
          container
          rowSpacing={5}
          columnSpacing={{ xs: 2, sm: 3, md: 4, lg:5, xl:6 }}
          // style={{ padding: "30px" }}
        >
          {!this.state.loading &&
            this.state.article.map((elem) => {
              console.log(elem);
              return (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={7}
                  lg={4}
                  xl={4}
                  key={elem.url}
                  alignItems="center"
                  justify="center"
                  style={{ maxWidth: "350px" }}
                >
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

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className="py-5"
        >
          <Button
            variant="contained"
            color="secondary"
            onClick={this.handlePreButton}
            disabled={this.state.page <= 1}
          >
            &larr; Prevoious
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.handleNextButton}
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalArticles / 21)
            }
          >
            Next &rarr;
          </Button>
        </Grid>
      </div>
    );
  }
}

export default News
