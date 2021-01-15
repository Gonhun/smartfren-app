import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Spinner } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const columns = [
  {
    dataField: "userId",
    text: "userId",
  },
  {
    dataField: "id",
    text: "ID",
  },
  {
    dataField: "title",
    text: "title",
  },
  {
    dataField: "completed",
    text: "Complete",
  },
  {
    dataField: "link",
    text: "Action",
    formatter: (rowContent, row) => {
      return (
        <div>
          <Link to={"detail/" + row.id}>
            <Button color="dark" className="mr-2">
              Detail
            </Button>
          </Link>
        </div>
      );
    },
  },
];

const mapStateToProps = (state) => {
  return {
    getDatas: state.users.getDatas,
    getErrors: state.users.getErrors
  };
};

const TableComp = (props) => {
  return (
    <Container>
      <br></br>
      {props.getDatas ? (
        <BootstrapTable keyField="id" data={props.getDatas} columns={columns} />
      ) : (
        <div className="text-center">
          { props.getErrors ? <h1>{props.getErrors}</h1> : <Spinner color="primary" />}
        </div>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(TableComp);
