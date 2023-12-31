import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";
import { Button, Container } from "react-bootstrap";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  main,
  intro,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div>
      <FullWidthImage img={heroImage} title={title} subheading={subheading} />

      <section className="py-5 text-center">
        <Container>
          <h1 className="title">{mainpitch.title}</h1>
          <p className="lead">{mainpitch.description}</p>
          <p>{description}</p>
        </Container>
      </section>

      <section className="bg-black bg-opacity-25 py-5">
        <Container>
          <div className="pb-3">
            <h3>{heading}</h3>
            <p>{description}</p>
          </div>
        </Container>
      </section>
      <section className="bg-black bg-opacity-25 py-5">
        <Container>
          <div className="pb-3">
            <h3>{intro.heading}</h3>
            <p>{intro.description}</p>
          </div>
          <Features gridItems={intro.blurbs} />
          <div className="text-center">
            <Button variant="warning" as={Link} size="lg" to="/products">
              more...
            </Button>
          </div>
        </Container>
      </section>
      <section className="section bg-gradient py-5">
        <div className="container">
          <h3 className="has-text-weight-semibold is-size-3">{main.heading}</h3>
          <p>{main.description}</p>

          <article className="tile is-child">
            <PreviewCompatibleImage imageInfo={main.image1} />
          </article>

          <article className="tile is-child">
            <PreviewCompatibleImage imageInfo={main.image2} />
          </article>

          <article className="tile is-child">
            <PreviewCompatibleImage imageInfo={main.image3} />
          </article>
        </div>
      </section>
      <section className="py-5">
        <Container>
          <h3>Latest stories</h3>
          <BlogRoll />
          <div className="text-center">
            <Button as={Link} size="lg" to="/blog">
              Read more
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                gatsbyImageData(width: 526, quality: 92, layout: CONSTRAINED)
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                gatsbyImageData(width: 526, quality: 92, layout: CONSTRAINED)
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                gatsbyImageData(quality: 72, layout: FULL_WIDTH)
              }
            }
          }
        }
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
