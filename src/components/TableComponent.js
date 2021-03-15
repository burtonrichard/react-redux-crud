import {
  faEdit,
  faInfo,
  faTrash,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col, Spinner } from "reactstrap";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import swal from "sweetalert";
import { deleteData } from "../actions/dataAction";

const { SearchBar } = Search;

const handleClick = (dispatch, id) => {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this contact!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      dispatch(deleteData(id));
      swal("Poof! Your contact has been deleted!", {
        icon: "success",
      });
    } else {
      swal("Your contact is safe!");
    }
  });
};

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const mapStateToProps = (state) => {
  return {
    getDataList: state.data.getDataList,
    errorDataList: state.data.errorDataList,
  };
};

const TableComponent = (props) => {
  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
      headerStyle: () => {
        return { width: "12%" };
      },
      style: { overflowWrap: "break-word" },
    },
    {
      dataField: "firstName",
      text: "First Name",
      sort: true,
      headerStyle: () => {
        return { width: "14%" };
      },
    },
    {
      dataField: "lastName",
      text: "Last Name",
      sort: true,
      headerStyle: () => {
        return { width: "14%" };
      },
    },
    {
      dataField: "age",
      text: "Age",
      sort: true,
      headerStyle: () => {
        return { width: "6%" };
      },
    },
    {
      dataField: "photo",
      text: "Photo",
      headerStyle: () => {
        return { width: "17%" };
      },
      style: { overflowWrap: "break-word" },
    },
    {
      dataField: "link",
      text: "Action",
      headerStyle: () => {
        return { width: "30%" };
      },
      formatter: (rowContent, row) => {
        return (
          <div className="text-center">
            <Link to={"detail/" + row.id}>
              <Button color="dark" className="mr-2">
                <FontAwesomeIcon icon={faInfo} /> Detail
              </Button>
            </Link>
            <Link to={"edit/" + row.id}>
              <Button color="dark" className="mr-2">
                <FontAwesomeIcon icon={faEdit} /> Edit
              </Button>
            </Link>
            <Button
              color="danger"
              className="mr-2"
              onClick={() => handleClick(props.dispatch, row.id)}
            >
              <FontAwesomeIcon icon={faTrash} /> Delete
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <Container>
      {props.getDataList ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.getDataList}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <Row>
                <Col>
                  <Link to={"/add"}>
                    <Button color="dark">
                      <FontAwesomeIcon icon={faUserPlus} /> Add Contact
                    </Button>
                  </Link>
                </Col>
                <Col>
                  <div className="float-right">
                    <SearchBar {...props.searchProps} placeholder="Search" />
                  </div>
                </Col>
              </Row>
              <hr />
              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </div>
          )}
        </ToolkitProvider>
      ) : (
        <div className="text-center">
          {props.errorDataList ? (
            <h4>{props.errorDataList}</h4>
          ) : (
            <Spinner color="dark" />
          )}
        </div>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(TableComponent);
