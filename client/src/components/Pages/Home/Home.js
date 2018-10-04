import React, { Component } from "react";
import API from "../../../utils/API";
import Jumbotron from "../../Jumbotron";
import {Col, Row, Container} from "../../Grid";
import {Input, FormBtn} from "../../Form";
import { List, ListItem } from "../../List";
import moment from "moment";
import "./Home.css";


class Home extends Component {
    state = {
        articles: [],
        startYear: "",
        endYear: "",
        query: ""
    }

    saveArticle = (title, date, url) => {
        console.log(url);
        API.saveArticle({
            title: title,
            date: (date) ? date : "No date available",
            URL: url
        })
            .catch(err => console.log(err));
    }

    handleFormSubmit = event => {
        event.preventDefault();
        const startYear = (this.state.startYear) ? this.state.startYear + "0101" : "";
        const endYear = (this.state.endYear) ? this.state.endYear + "0101" : "";
        const query = this.state.query;
        console.log(query, startYear, endYear);
          API.nytSearch(query, startYear, endYear)
            .then(res => {
                res.data.forEach(function(element, index){
                    const currentDate = element.pub_date;
                    const formattedDate = moment(currentDate).format("MMMM DD, YYYY");
                    element.pub_date = formattedDate;
                });
                return this.setState({articles: res.data})
            })
            .catch(err => console.log(err));
    }

    handleOnChange = event => {
        const { name, value } = event.target;
        this.setState({
            [ name ]: value
        });
    }

    render() {
        return (
            <Container fluid>
            <Row>
            <Col size="md-1 sm-12"></Col>
                <Col size="md-10 sm-12">
                    <Jumbotron id="jumbo">
                        <h1>Search NYT Articles</h1>
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col size="md-1 sm-12"></Col>
                <Col size="md-10 sm-12">
                <form>
                  <Input
                    value={this.state.query}
                    onChange={this.handleOnChange}
                    name="query"
                    placeholder="Search Term (required)"
                  />
                  <Input
                    value={this.state.startYear}
                    onChange={this.handleOnChange}
                    name="startYear"
                    placeholder="Start Year (optional)"
                  />
                  <Input
                    value={this.state.endYear}
                    onChange={this.handleOnChange}
                    name="endYear"
                    placeholder="End Year (optional)"
                  />
                  <FormBtn
                    disabled={!(this.state.query)}
                    onClick={this.handleFormSubmit}
                  >
                    Search
                  </FormBtn>
                </form>
                </Col>
              </Row>
              <Row>
              <Col size="md-1 sm-12"></Col>
              <Col size="md-10 sm-12">
                <Jumbotron>
                  <h1>Article Results</h1>
                </Jumbotron>
              </Col>
              </Row>
              <Row>
                  <Col size="md-1 sm-8"></Col>
                  <Col size ="md-10 sm-12">
                    {this.state.articles.length ? (
                    <List>
                        {this.state.articles.map(article => (
                        <ListItem 
                            key={article._id}
                            id={article._id}
                            headline={article.headline.main}
                            date={(article.pub_date) ? "Published on " + article.pub_date : "No publishing date available"}
                            url={article.web_url}
                            saveArticle={this.saveArticle}
                        >
                        </ListItem>
                        ))}
                    </List>
                    ) : (
                    <h3>No Results to Display</h3>
                    )}
                  </Col>
              </Row>
          </Container>
        );
      }
};

export default Home;