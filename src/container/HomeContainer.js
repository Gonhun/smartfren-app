import React, { Component } from "react";
import TableComp from "../components/TableComp";
import {connect} from 'react-redux';
import { clearDataDetails, getDatas } from '../actions/UserAction';

class HomeContainer extends Component {
  componentDidMount(){
    this.props.dispatch(getDatas());
    this.props.dispatch(clearDataDetails());
  }

  render() {
    return (
      <div>
        <TableComp/>
      </div>
    );
  }
}

export default connect()(HomeContainer);
