import React from "react";
import { connect } from "react-redux";
import { Container, Table, Spinner } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getDetails: state.users.getDatasDetails,
    getErrorsDetails: state.users.getErrorsDetails,
  };
};

const DataDetailComp = (props) => {
  return (
    <div>
      {props.getDetails ? (
        <Table striped>
          <tbody>
            <tr>
              <td width="200">UserId</td>
              <td width="10">:</td>
              <td>{props.getDetails.userId}</td>
            </tr>
            <tr>
              <td width="200">Id</td>
              <td width="10">:</td>
              <td>{props.getDetails.id}</td>
            </tr>
            <tr>
              <td width="200">title</td>
              <td width="10">:</td>
              <td>{props.getDetails.title}</td>
            </tr>
            <tr>
              <td width="200">Status</td>
              <td width="10">:</td>
              <td>{props.getDetails.completed ? ('true'):('false')}</td>
            </tr>
          </tbody>
        </Table>
      ) : (
        <div className="text-center">
          {props.getErrors ? (
            <h1>{props.getErrors}</h1>
          ) : (
            <Spinner color="primary" />
          )}
        </div>
      )}
    </div>
  );
};

export default connect(mapStateToProps, null)(DataDetailComp);
