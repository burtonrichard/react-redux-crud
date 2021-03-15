import React, { Component } from "react";
import { connect } from "react-redux";
import TableComponent from "../components/TableComponent";
import { deleteDataDetail, getDataList } from "../actions/dataAction";

class HomeContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getDataList());
    this.props.dispatch(deleteDataDetail());
  }
  render() {
    return (
      <div>
        <TableComponent />
      </div>
    );
  }
}

export default connect()(HomeContainer);
