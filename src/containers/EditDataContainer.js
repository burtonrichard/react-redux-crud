import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import swal from "sweetalert";
import { getDataDetail, putDataUpdate } from "../actions/dataAction";
import BackComponent from "../components/BackComponent";
import FormEditComponent from "../components/FormEditComponent";

const mapStateToProps = (state) => {
  return {
    getDataResponse: state.data.getDataResponse,
    errorDataResponse: state.data.errorDataResponse,
  };
};

class EditDataContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getDataDetail(this.props.match.params.id));
  }

  handleSubmit(data) {
    this.props.dispatch(putDataUpdate(data, this.props.match.params.id));
  }

  render() {
    if (this.props.getDataResponse || this.props.errorDataResponse) {
      if (this.props.errorDataResponse) {
        swal("Edit data failed.", this.props.errorDataResponse, "error");
      } else {
        swal(
          "Data updated!",
          "Name: " + this.props.getDataResponse.firstName + " " + this.props.getDataResponse.lastName,
          "success"
        );
      }
    }
    return (
      <Container>
        <BackComponent />
        <h1>Edit Contact</h1>
        <FormEditComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(EditDataContainer);
