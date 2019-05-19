import React from 'react'
import {Jumbotron as Jumbo, Container} from 'react-bootstrap'
import styled from 'styled-components'
import natureImage from '../assets/nature-1.jpg'

const Styles = styled.div`
    .jumbo {
        background: url(${natureImage}) no-repeat fixed bottom;
        background-size: cover;
        color: whitesmoke;
        height: 200px;
        position: relative;
        z-index: -2;

    }

    .overlay {
        background-colr : #000;
        opacity: 1;
        position: absolute;
        top: 0; left: 0; bottom: 0;
        right: 0;
    }
    .vert-center {
        margin: 0;
        position: absolute;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }
`;

const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"> 
                <Container>
                    <div className = "vert-center">
                    <h1>Welcome</h1>
                    <p>Learn How to Code</p>
                    </div>
                </Container>
            </div>

        </Jumbo>
    </Styles>
)

export default Jumbotron