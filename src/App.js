import './App.css';
import Header from "./components/header";
import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";

import "firebase/database"
import firebase from "firebase";
import {PeopleContext} from "./contexts";
import {LeaderBoard} from "./components/leaderboardTable";

export default class App extends Component {

    constructor(props) {
        super(props)
        let database = firebase.database()
        this.state = {
            people: [],
            addBin: (idx) => {
                this.state.people[idx].score += 1;
                this.setState(this.state);

                // noinspection JSIgnoredPromiseFromCall
                database.ref("people").set(this.state.people)
            },
            weeks: 4
        }
    }

    componentDidMount() {
        let database = firebase.database()

        let updateState = (snapshot) => {
            if (snapshot.exists()) {
                this.state.people = snapshot.val();
                this.state.people.sort((x1, x2) => {
                    return x1.score - x2.score
                })
                this.setState(this.state);
            }
        }

        database.ref("people").get().then(updateState)
        database.ref("people").on("value", updateState)
    }

    render() {
        let title = "Bin tally";

        return (
            <PeopleContext.Provider value={this.state}>
                <Header title={title}/>
                <Container fluid='md'>
                    <Row className={"d-none d-sm-block"} style={{height: 100 + 'px'}}/>
                    <Row className={".d-block .d-sm-none"} style={{height: 10 + 'px'}}/>
                    <Row>
                        <Col/>
                        <Col md={6}>
                            <LeaderBoard/>
                        </Col>
                        <Col/>
                    </Row>
                </Container>
            </PeopleContext.Provider>
        );
    }
}

