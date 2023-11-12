import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import { Card, Col, Row } from "react-bootstrap";

const FeatureGrid = ({ gridItems }) => (
  <Row>
    {gridItems.map((item) => (
      <Col key={item.text} sm={6}>
        <Card body className="border-0 mb-4 pt-5">
          <div className="pb-3 m-auto" style={{ width: "75%" }}>
            <div className="text-center">
              <PreviewCompatibleImage imageInfo={item} />
            </div>
            {item.title ? <h4>{item.title}</h4> : null}
            <p className="mt-4">{item.text}</p>
          </div>
        </Card>
      </Col>
    ))}
  </Row>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
