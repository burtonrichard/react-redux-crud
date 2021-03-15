import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { getDataDetail } from "../actions/dataAction";
import BackComponent from "../components/BackComponent";
import DetailDataComponent from "../components/DetailDataComponent";

class DetailDataContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getDataDetail(this.props.match.params.id));
  }
  
  render() {
    console.log(this.props.match.params.id);
    return (
      <Container>
        <BackComponent />
          <h5>Detail Contact</h5>
          <DetailDataComponent />
      </Container>
    );
  }
}

export default connect()(DetailDataContainer);
