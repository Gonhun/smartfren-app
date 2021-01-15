import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComp from "../components/BackComp";
import { getDataDetails } from '../actions/UserAction';
import {connect} from 'react-redux';
import DataDetailComp from "../components/DataDetailComp";

class DetailContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getDataDetails(this.props.match.params.id));
  }

  render() {
    console.log();
    return (
      <Container>
        <br></br>
        <BackComp />
        <br></br>
        <DataDetailComp/>
      </Container>
    );
  }
}

export default connect()(DetailContainer)