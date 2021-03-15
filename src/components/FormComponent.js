import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, FormGroup, Input, Label, Row, Button } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import DataValidation from "../validations/DataValidation";

const renderField = ({
  input,
  type,
  placeholder,
  label,
  disabled,
  readOnly,
  meta: { touched, error, warning },
}) => (
  <Row>
    <Col md="12">
      <Label htmlFor="{ input }" className="col-form-label">
        {label}
      </Label>
    </Col>
    <Col md="12">
      <Input
        {...input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
      ></Input>
      {touched &&
        ((error && <p style={{ color: "red" }}>{error}</p>) ||
          (warning && <p style={{ color: "brown" }}>{warning}</p>))}
    </Col>
  </Row>
);

const mapStateToProps = (state) => ({
  initialValues: {
    id: state.data.getDataDetail.id,
    firstName: state.data.getDataDetail.firstName,
    lastName: state.data.getDataDetail.lastName,
    age: state.data.getDataDetail.age,
    photo: state.data.getDataDetail.photo,
  },
});

class FormComponent extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup row>
          <Col md="6">
            <FormGroup>
              <Field type="text" name="id" component={renderField} label="ID" />
            </FormGroup>
          </Col>

          <Col md="6">
            <FormGroup>
              <Field
                type="text"
                name="firstName"
                component={renderField}
                label="First Name"
              />
            </FormGroup>
          </Col>

          <Col md="6">
            <FormGroup>
              <Field
                type="text"
                name="lastName"
                component={renderField}
                label="Last Name"
              />
            </FormGroup>
          </Col>

          <Col md="6">
            <FormGroup>
              <Field
                type="text"
                name="age"
                component={renderField}
                label="Age"
              />
            </FormGroup>
          </Col>

          <Col md="6">
            <FormGroup>
              <Field
                type="text"
                name="photo"
                component={renderField}
                label="Photo"
              />
            </FormGroup>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col md="4">
            <FormGroup>
              <Button
                color="success"
                type="submit"
                disabled={this.props.submitting}
              >
                Submit
              </Button>
            </FormGroup>
          </Col>
        </FormGroup>
      </form>
    );
  }
}

FormComponent = reduxForm({
  form: "formAddData",
  validate: DataValidation,
  enableReinitialize: true,
})(FormComponent);

export default connect(mapStateToProps, null)(FormComponent);
