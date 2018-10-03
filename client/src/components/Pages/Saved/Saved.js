import React, { Component } from "react";
import API from "../../../utils/API";
import Jumbotron from "../../Jumbotron";
import {Col, Row, Container} from "../../Grid";
import { List, SavedListItem } from "../../List";
import DeleteBtn from "../../DeleteBtn";

class Saved extends Component {
    state = {
        savedArticles: []
    }

    componentDidMount() {
        this.loadArticles();
    } 

    loadArticles = () => {
        API.getArticles()
            .then(res => 
                this.setState({savedArticles: res.data})    
            )
            .catch(err => console.log(err));
    }

    deleteArticle = (id) => {
        API.deleteArticle(id)
        .then(res => this.loadArticles())
        .catch(err => console.log(err));
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12 sm-12">
                        <Jumbotron>
                            <h1>Saved Articles</h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12 sm-12">
                    {this.state.savedArticles.length ? (
                    <List>
                        {this.state.savedArticles.map(article => (
                        <SavedListItem 
                            key={article._id}
                            id={article._id}
                            headline={article.title}
                            date={article.date}
                            url={article.URL}
                            deleteArticle={this.deleteArticle}
                        >
                        </SavedListItem>
                        ))}
                    </List>
                    ) : (
                    <h3>No Results to Display</h3>
                    )}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Saved;