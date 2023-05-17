/*import React from "react";

const Footer = () => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;*/

import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { colOne, colTwo, colThree } from '../data/footerLinks'

const Footer = () => {
  return (
    <Container>
        <Row>
            <Col>
                <ul>
                    {
                        colOne.map((item) => {
                            return (
                                <li key={item.title}><a href={item.href}>{item.title}</a></li>
                            )
                        })
                    }
                </ul>
            </Col>
            <Col>
                <ul>
                    {
                        colTwo.map((item) => {
                            return (
                                <li key={item.title}><a href={item.href}>{item.title}</a></li>
                            )
                        })
                    }
                </ul>
            </Col>
            <Col>
                <ul>
                    {
                        colThree.map((item) => {
                            return (
                                <li key={item.title}>{item.title}</li>
                            )
                        })
                    }
                </ul>
            </Col>
        </Row>
    </Container>
  )
}

export default Footer
