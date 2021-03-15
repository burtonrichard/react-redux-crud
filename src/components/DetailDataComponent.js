import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getDataDetail: state.data.getDataDetail,
    errorDataDetail: state.data.errorDataDetail,
  };
};

const DetailDataComponent = (props) => {
  return (
    <Table striped>
      <tbody>
        <tr>
          <td width="200">ID</td>
          <td width="10">:</td>
          <td>{props.getDataDetail.id}</td>
        </tr>
        <tr>
          <td width="200">First Name</td>
          <td width="10">:</td>
          <td>{props.getDataDetail.firstName}</td>
        </tr>
        <tr>
          <td width="200">Last Name</td>
          <td width="10">:</td>
          <td>{props.getDataDetail.lastName}</td>
        </tr>
        <tr>
          <td width="200">Age</td>
          <td width="10">:</td>
          <td>{props.getDataDetail.age}</td>
        </tr>
        <tr>
          <td width="200">Photo</td>
          <td width="10">:</td>
          <td><img src={props.getDataDetail.photo} alt="" /></td>
        </tr>
      </tbody>
    </Table>
  );
};

export default connect(mapStateToProps, null)(DetailDataComponent);
