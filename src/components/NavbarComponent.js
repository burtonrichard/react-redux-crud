import React from "react";
import { Navbar, NavbarBrand, Container } from "reactstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    title: state.data.title,
  };
};

const NavbarComponent = (props) => {

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand href="/">{props.title}</NavbarBrand>
        </Container>
      </Navbar>
    </div>
  );
};

export default connect(mapStateToProps, null)(NavbarComponent);
