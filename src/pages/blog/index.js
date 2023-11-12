import * as React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import { Container } from "react-bootstrap";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        {/* <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1>Latest Stories</h1>
        </div> */}
        <div className="radial-gradient-inverse">
          <Container>
            <h1 className="py-3 mb-4">Latest news</h1>
          </Container>
        </div>
        <section className="py-4">
          <Container>
            <BlogRoll />
          </Container>
        </section>
      </Layout>
    );
  }
}
