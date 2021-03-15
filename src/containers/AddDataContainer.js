import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { postDataAdd } from "../actions/dataAction";
import BackComponent from "../components/BackComponent";
import FormComponent from "../components/FormComponent";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getDataResponse: state.data.getDataResponse,
    errorDataResponse: state.data.errorDataResponse,
  };
};

class AddDataContainer extends Component {
  handleSubmit(data) {
    this.props.dispatch(postDataAdd(data));
  }

  render() {
    if (
      this.props.getDataResponse ||
      this.props.errorDataResponse
    ) {
      if (this.props.errorDataResponse) {
        swal("Add data failed.", this.props.errorDataResponse, "error");
      } else {
        swal(
          "Data added!",
          "Name: " + this.props.getDataResponse.firstName,
          "success"
        );
      }
    }
    return (
      <Container>
        <BackComponent />
        <h1>Add Contact</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(AddDataContainer);
