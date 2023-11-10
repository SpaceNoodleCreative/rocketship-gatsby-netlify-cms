import { Link } from "gatsby";
import * as React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";

const FooterLink = (props) => (
  <Link {...props} className="nav-link link-light" />
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-checked gradient-border border-top border-5">
      <div className="py-5">
        <Container>
          <Row>
            <Col>
              <Nav className="flex-column">
                <FooterLink to="/">Home</FooterLink>
                <FooterLink to="/about">About</FooterLink>
                <FooterLink to="/bootstrap">Bootstrap</FooterLink>
                <FooterLink to="/products">Products</FooterLink>
                <FooterLink to="/blog">Blog</FooterLink>
                <FooterLink to="/contact">Contact</FooterLink>
                <FooterLink to="/examples">Form Examples</FooterLink>
              </Nav>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-black bg-opacity-25 p-2 d-flex justify-content-between">
        <div className="opacity-75">&copy; TheRocketship {currentYear}</div>
        <div className="opacity-75">
          Made with{" "}
          <span role="img" aria-label="heart">
            💜
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
