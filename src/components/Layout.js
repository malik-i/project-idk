import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from "react-bootstrap"

const Layout = (props) => {
    return(
    <Container>
        {props.children}
    </Container>
    )
}

export default Layout