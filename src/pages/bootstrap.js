import React from "react";
import Link from "gatsby-link";
import Layout from "../components/Layout";

export default function Component() {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="content">
            <h1>Hi people. This is a bootstrap page</h1>
            <section className="py-5 text-center linear-gradient">
              <h1 className="display-1 mt-5 fw-bold text-dark">
                BIIIG TEXT here
              </h1>
              <h1 className="display-5 mb-5 fw-bold text-dark">SMALLER TEXT</h1>
            </section>
          </div>
        </div>
      </section>

      <section className="py-5 text-center linear-gradient">
        <h1 className="display-1 mt-5 fw-bold text-dark">BIIIG TEXT</h1>
        <h1 className="display-5 mb-5 fw-bold text-dark">SMALLER TEXT</h1>
      </section>
      <section className="py-5 text-center radial-gradient">
        <h1 className="display-1 mt-5">more text</h1>
        <h1 className="display-4 mb-5">Some more text</h1>
      </section>
      <section className="py-5 container">
        <div className="row py-lg-5 text-center mb-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="display-4">Boostrap styles</h1>
            <p className="lead">
              Here's an overview of the bootiful compontents and styles
            </p>
          </div>
        </div>
        <h2 className="mt-5">Colors</h2>
        <div className="row g-0 mb-3">
          <div
            className="col p-3 align-items-center"
            style={{ background: "var(--lightblue1)" }}
          >
            lightblue1
          </div>
          <div className="col p-3" style={{ background: "var(--lightblue2)" }}>
            lightblue2
          </div>
          <div className="col p-3" style={{ background: "var(--blue-ag)" }}>
            blue-ag
          </div>
          <div className="col p-3" style={{ background: "var(--bluepurple1)" }}>
            bluepurple1
          </div>
          <div className="col p-3" style={{ background: "var(--bluepurple2)" }}>
            bluepurple2
          </div>
          <div className="col p-3" style={{ background: "var(--purple2)" }}>
            purple2
          </div>
          <div className="col p-3" style={{ background: "var(--purple1)" }}>
            purple1
          </div>
          <div className="col p-3" style={{ background: "var(--fuchsia)" }}>
            fuchsia
          </div>
          <div className="col p-3" style={{ background: "var(--salmon-ag)" }}>
            salmon-ag
          </div>
          <div className="col p-3" style={{ background: "var(--orange)" }}>
            orange
          </div>
          <div className="col p-3" style={{ background: "var(--yellow-ag)" }}>
            yellow-ag
          </div>
          <div className="col p-3" style={{ background: "var(--yellow)" }}>
            yellow
          </div>
        </div>

        <div className="row g-0">
          <div className="col bg-primary bg-gradient p-3">Primary gradient</div>
          <div className="col bg-secondary bg-gradient p-3">
            Secondary gradient
          </div>
          <div className="col bg-success text-dark bg-gradient p-3">
            Success gradient
          </div>
          <div className="col bg-danger bg-gradient p-3">Danger gradient</div>
          <div className="col bg-warning text-dark bg-gradient p-3">
            Warning gradient
          </div>
          <div className="col bg-info text-dark bg-gradient p-3">
            Info gradient
          </div>
          <div className="col bg-light text-dark bg-gradient p-3">
            Light gradient
          </div>
          <div className="col bg-body bg-gradient p-3">Body-bg gradient</div>
          <div className="col bg-dark bg-gradient p-3">Dark gradient</div>
        </div>

        <div className="row g-0">
          <div className="col text-bg-primary p-3">
            Primary with contrasting text
          </div>
          <div className="col text-bg-secondary p-3">
            Secondary with contrasting text
          </div>
          <div className="col text-bg-success p-3">
            Success with contrasting text
          </div>
          <div className="col text-bg-danger p-3">
            Danger with contrasting text
          </div>
          <div className="col text-bg-warning p-3">
            Warning with contrasting text
          </div>
          <div className="col text-bg-info p-3">Info with contrasting text</div>
          <div className="col text-bg-light p-3">
            Light with contrasting text
          </div>
          <div className="col bg-body text-white p-3">
            Body with contrasting text
          </div>
          <div className="col text-bg-dark p-3">Dark with contrasting text</div>
        </div>

        <div className="row g-0">
          <div className={`col bg-primary p-3`}>Primary with body color</div>
          <div className={`col bg-secondary p-3`}>
            Secondary with body color
          </div>
          <div className={`col bg-success text-dark p-3`}>
            Success with body color
          </div>
          <div className={`col bg-danger p-3`}>Danger with body color</div>
          <div className={`col bg-warning text-dark p-3`}>
            Warning with body color
          </div>
          <div className={`col bg-info text-dark p-3`}>
            Info with body color
          </div>
          <div className={`col bg-light text-dark p-3`}>
            Light with body color
          </div>
          <div className={`col bg-body p-3`}>Body with body color</div>
          <div className={`col bg-dark p-3`}>Dark with body color</div>
        </div>

        {[75, 50, 25, 10].map((o) => (
          <div className="row g-0">
            <div
              className={`col bg-primary bg-opacity-${o} p-3`}
              key={`primary${o}`}
            >
              Primary with body color
            </div>
            <div
              className={`col bg-secondary bg-opacity-${o} p-3`}
              key={`secondary${o}`}
            >
              Secondary with body color
            </div>
            <div
              className={`col bg-success text-dark bg-opacity-${o} p-3`}
              key={`success${o}`}
            >
              Success with body color
            </div>
            <div
              className={`col bg-danger bg-opacity-${o} p-3`}
              key={`danger${o}`}
            >
              Danger with body color
            </div>
            <div
              className={`col bg-warning bg-opacity-${o} text-dark p-3`}
              key={`warning${o}`}
            >
              Warning with body color
            </div>
            <div
              className={`col bg-info bg-opacity-${o} text-dark p-3`}
              key={`info${o}`}
            >
              Info with body color
            </div>
            <div
              className={`col bg-light bg-opacity-${o} text-dark p-3`}
              key={`light${o}`}
            >
              Light with body color
            </div>
            <div className={`col bg-body bg-opacity-${o} p-3`} key={`body${o}`}>
              Body with body color
            </div>
            <div className={`col bg-dark bg-opacity-${o} p-3`} key={`dark${o}`}>
              Dark with body color
            </div>
          </div>
        ))}

        <h2 className="mt-5">Buttons</h2>
        <div className="hstack gap-2 mb-3">
          <button type="button" className="btn btn-lg btn-primary">
            Primary
          </button>
          <button type="button" className="btn btn-lg btn-secondary">
            Secondary
          </button>
          <button type="button" className="btn btn-lg btn-success">
            Success
          </button>
          <button type="button" className="btn btn-lg btn-danger">
            Danger
          </button>
          <button type="button" className="btn btn-lg btn-warning">
            Warning
          </button>
          <button type="button" className="btn btn-lg btn-info">
            Info
          </button>
          <button type="button" className="btn btn-lg btn-light">
            Light
          </button>
          <button type="button" className="btn btn-lg btn-dark">
            Dark
          </button>
          <button type="button" className="btn btn-lg btn-link">
            Link
          </button>
        </div>
        <div className="hstack gap-2 mb-3">
          <button type="button" className="btn btn-primary">
            Primary
          </button>
          <button type="button" className="btn btn-secondary">
            Secondary
          </button>
          <button type="button" className="btn btn-success">
            Success
          </button>
          <button type="button" className="btn btn-danger">
            Danger
          </button>
          <button type="button" className="btn btn-warning">
            Warning
          </button>
          <button type="button" className="btn btn-info">
            Info
          </button>
          <button type="button" className="btn btn-light">
            Light
          </button>
          <button type="button" className="btn btn-dark">
            Dark
          </button>
          <button type="button" className="btn btn-link">
            Link
          </button>
        </div>
        <div className="hstack gap-2 mb-3">
          <button type="button" className="btn btn-sm btn-primary">
            Primary
          </button>
          <button type="button" className="btn btn-sm btn-secondary">
            Secondary
          </button>
          <button type="button" className="btn btn-sm btn-success">
            Success
          </button>
          <button type="button" className="btn btn-sm btn-danger">
            Danger
          </button>
          <button type="button" className="btn btn-sm btn-warning">
            Warning
          </button>
          <button type="button" className="btn btn-sm btn-info">
            Info
          </button>
          <button type="button" className="btn btn-sm btn-light">
            Light
          </button>
          <button type="button" className="btn btn-sm btn-dark">
            Dark
          </button>
        </div>
        <div className="hstack gap-2 mb-3">
          <button type="button" className="btn btn-lg btn-outline-primary">
            Primary
          </button>
          <button type="button" className="btn btn-lg btn-outline-secondary">
            Secondary
          </button>
          <button type="button" className="btn btn-lg btn-outline-success">
            Success
          </button>
          <button type="button" className="btn btn-lg btn-outline-danger">
            Danger
          </button>
          <button type="button" className="btn btn-lg btn-outline-warning">
            Warning
          </button>
          <button type="button" className="btn btn-lg btn-outline-info">
            Info
          </button>
          <button type="button" className="btn btn-lg btn-outline-light">
            Light
          </button>
          <button type="button" className="btn btn-lg btn-outline-dark">
            Dark
          </button>
        </div>
        <div className="hstack gap-2 mb-3">
          <button type="button" className="btn btn-outline-primary">
            Primary
          </button>
          <button type="button" className="btn btn-outline-secondary">
            Secondary
          </button>
          <button type="button" className="btn btn-outline-success">
            Success
          </button>
          <button type="button" className="btn btn-outline-danger">
            Danger
          </button>
          <button type="button" className="btn btn-outline-warning">
            Warning
          </button>
          <button type="button" className="btn btn-outline-info">
            Info
          </button>
          <button type="button" className="btn btn-outline-light">
            Light
          </button>
          <button type="button" className="btn btn-outline-dark">
            Dark
          </button>
        </div>
        <div className="hstack gap-2 mb-3">
          <button type="button" className="btn btn-sm btn-outline-primary">
            Primary
          </button>
          <button type="button" className="btn btn-sm btn-outline-secondary">
            Secondary
          </button>
          <button type="button" className="btn btn-sm btn-outline-success">
            Success
          </button>
          <button type="button" className="btn btn-sm btn-outline-danger">
            Danger
          </button>
          <button type="button" className="btn btn-sm btn-outline-warning">
            Warning
          </button>
          <button type="button" className="btn btn-sm btn-outline-info">
            Info
          </button>
          <button type="button" className="btn btn-sm btn-outline-light">
            Light
          </button>
          <button type="button" className="btn btn-sm btn-outline-dark">
            Dark
          </button>
        </div>
        <h2 className="mt-5">Links</h2>
        <div className="hstack gap-2">
          <Link to="/" className="link-primary">
            Primary link
          </Link>
          <Link to="/" className="link-secondary">
            Secondary link
          </Link>
          <Link to="/" className="link-success">
            Success link
          </Link>
          <Link to="/" className="link-danger">
            Danger link
          </Link>
          <Link to="/" className="link-warning">
            Warning link
          </Link>
          <Link to="/" className="link-info">
            Info link
          </Link>
          <Link to="/" className="link-light">
            Light link
          </Link>
          <Link to="/" className="link-dark">
            Dark link
          </Link>
        </div>
        <h2 className="mt-5">Typography</h2>
        <h3 className="mt-5">Large headings</h3>
        <div className="vstack gap-2">
          <p className="display-1">h1. Display heading</p>
          <p className="display-2">h2. Display heading</p>
          <p className="display-3">h3. Display heading</p>
          <p className="display-4">h4. Display heading</p>
          <p className="display-5">h5. Display heading</p>
          <p className="display-6">h6. Display heading</p>

          <h3 className="mt-5">Headings</h3>
          <p className="h1">h1. Bootstrap heading</p>
          <p className="h2">h2. Bootstrap heading</p>
          <p className="h3">h3. Bootstrap heading</p>
          <p className="h4">h4. Bootstrap heading</p>
          <p className="h5">h5. Bootstrap heading</p>
          <p className="h6">h6. Bootstrap heading</p>
        </div>
        <p className="lead mt-5">
          This is a lead paragraph. It stands out from regular paragraphs.
        </p>
        <p>
          This is a long paragraph. In{` `}
          <Link to="/wiki/Publishing" title="Publishing">
            {` `}
            publishing
          </Link>
          {` `}
          and{` `}
          <Link to="/wiki/Graphic_design" title="Graphic design">
            {` `}
            graphic design{` `}
          </Link>
          {` `},
          <i>
            {` `}
            <b>Lorem ipsum</b>
          </i>
          is a{" "}
          <Link
            to="/wiki/Placeholder_text"
            className="mw-redirect"
            title="Placeholder text"
          >
            placeholder text
          </Link>
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. <i>Lorem ipsum</i> may
          be used as a placeholder before final{" "}
          <Link to="/wiki/Copy_(publishing)" title="Copy (publishing)">
            copy
          </Link>{" "}
          is available. It is also used to temporarily replace text in a process
          called{` `}
          <Link to="/wiki/Greeking" title="Greeking">
            greeking
          </Link>
          , which allows designers to consider the form of a webpage or
          publication, without the meaning of the text influencing the design.
        </p>
        <p>
          You can use the mark tag to <mark>highlight</mark> text.
          <br />
          <span className="mark">This line uses a utility class</span>
        </p>
        <p>
          <del>This line of text is meant to be treated as deleted text.</del>
          <br />
          <s>This line of text is meant to be treated as no longer accurate.</s>
        </p>
        <p>
          <ins>
            This line of text is meant to be treated as an addition to the
            document.
          </ins>
          <br />
          <u>This line of text will render as underlined.</u>
        </p>

        <p>
          <small>This line of text is meant to be treated as fine print.</small>
          <br />
          <span className="small">This line uses a utility class</span>
        </p>

        <p>
          <strong>This line rendered as bold text.</strong>
          <br />
          <span className="fw-bold">Bold text.</span>
          <br />
          <span className="fw-bolder">
            Bolder weight text (relative to the parent element).
          </span>
        </p>
        <p className="fw-semibold">Semibold weight text.</p>
        <p className="fw-normal">Normal weight text.</p>
        <p className="fw-light">
          Light weight text. <br />
          <span className="fw-lighter">
            Lighter weight text (relative to the parent element).
          </span>
        </p>
        <p>
          <em>This line rendered as italicized text.</em>
          <br />
          <span className="fst-italic">And this.</span>
        </p>

        <h2 className="mt-5">Blockquote</h2>
        <figure>
          <blockquote className="blockquote">
            <p>A well-known quote, contained in a blockquote element.</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </figcaption>
        </figure>
        <figure className="text-center mt-4">
          <blockquote className="blockquote">
            <p>A well-known quote, contained in a blockquote element.</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </figcaption>
        </figure>
        <figure className="text-end mt-4">
          <blockquote className="blockquote">
            <p>A well-known quote, contained in a blockquote element.</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </figcaption>
        </figure>

        <h3>Text color</h3>
        <p className="text-primary">.text-primary</p>
        <p className="text-secondary">.text-secondary</p>
        <p className="text-success">.text-success</p>
        <p className="text-danger">.text-danger</p>
        <p className="text-warning">.text-warning</p>
        <p className="text-info">.text-info</p>
        <p className="text-light">.text-light</p>
        <p className="text-dark">.text-dark</p>
        <p className="text-body">.text-body</p>
        <p className="text-muted">.text-muted</p>
        <p className="text-white">.text-white</p>

        <h3 className="mt-5">Lists</h3>
        <ul>
          <li>This is a list.</li>
          <li>Structurally, it's still a list.</li>
          <li>However, this style only applies to immediate child elements.</li>
          <li>
            Nested lists:
            <ul>
              <li>are unaffected by this style</li>
              <li>will still show a bullet</li>
              <li>and have appropriate left margin</li>
            </ul>
          </li>
        </ul>
        <ul className="list-unstyled">
          <li>This is a list.</li>
          <li>It appears completely unstyled.</li>
          <li>However, this style only applies to immediate child elements.</li>
        </ul>
        <ul className="list-inline">
          <li className="list-inline-item">This is a list item.</li>
          <li className="list-inline-item">And another one.</li>
          <li className="list-inline-item">But they're displayed inline.</li>
        </ul>
      </section>
      <section className="py-5 gradient-border border-top border-5">
        <div className="container">
          <h2>Accordion</h2>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Accordion Item #1
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Accordion Item #2
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Accordion Item #3
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          </div>
          <h2 className="mt-5">Alerts</h2>
          <div
            className="alert alert-primary alert-dismissible fade show"
            role="alert"
          >
            A simple primary alert with{" "}
            <Link to="/bootstrap" className="alert-link">
              an example link
            </Link>
            . Give it a click if you like.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
          <div
            className="alert alert-secondary alert-dismissible fade show"
            role="alert"
          >
            A simple secondary alert with{" "}
            <Link to="/bootstrap" className="alert-link">
              an example link
            </Link>
            . Give it a click if you like.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
          <div
            className="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            A simple success alert with{" "}
            <Link to="/bootstrap" className="alert-link">
              an example link
            </Link>
            . Give it a click if you like.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
          <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            A simple danger alert with{" "}
            <Link to="/bootstrap" className="alert-link">
              an example link
            </Link>
            . Give it a click if you like.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
          <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            A simple warning alert with{" "}
            <Link to="/bootstrap" className="alert-link">
              an example link
            </Link>
            . Give it a click if you like.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
          <div
            className="alert alert-info alert-dismissible fade show"
            role="alert"
          >
            A simple info alert with{" "}
            <Link to="/bootstrap" className="alert-link">
              an example link
            </Link>
            . Give it a click if you like.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
          <div
            className="alert alert-light alert-dismissible fade show"
            role="alert"
          >
            A simple light alert with{" "}
            <Link to="/bootstrap" className="alert-link">
              an example link
            </Link>
            . Give it a click if you like.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
          <div
            className="alert alert-dark alert-dismissible fade show"
            role="alert"
          >
            A simple dark alert with{" "}
            <Link to="/bootstrap" className="alert-link">
              an example link
            </Link>
            . Give it a click if you like.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
          <h2 className="mt-5">Badges</h2>
          <span className="badge rounded-pill text-bg-primary">
            Primary
          </span>{" "}
          <span className="badge rounded-pill text-bg-secondary">
            Secondary
          </span>{" "}
          <span className="badge rounded-pill text-bg-success">Success</span>{" "}
          <span className="badge rounded-pill text-bg-danger">Danger</span>{" "}
          <span className="badge rounded-pill text-bg-warning">Warning</span>{" "}
          <span className="badge rounded-pill text-bg-info">Info</span>{" "}
          <span className="badge rounded-pill text-bg-light">Light</span>{" "}
          <span className="badge rounded-pill text-bg-dark">Dark</span>
          <h2 className="mt-5">Breadcrumbs</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/bootstrap">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/bootstrap">Library</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Data
              </li>
            </ol>
          </nav>
          <h2 className="mt-5">Cards</h2>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/bootstrap" className="card-link">
                Card link
              </Link>
              <Link to="/bootstrap" className="card-link">
                Another link
              </Link>
            </div>
          </div>
          <h2 className="mt-5">Carousel</h2>
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div
                  className="radial-gradient-inverse"
                  style={{ width: "100%", height: "25vh" }}
                ></div>
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <div
                  className="radial-gradient"
                  style={{ width: "100%", height: "25vh" }}
                ></div>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <h2 className="mt-5">List group</h2>
          <div className="row">
            <div className="col">
              <ul className="list-group">
                <li className="list-group-item disabled" disabled>
                  A disabled item
                </li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
              </ul>
            </div>
            <div className="col">
              <div className="list-group">
                <Link
                  to="/bootstrap"
                  className="list-group-item list-group-item-action active"
                  aria-current="true"
                >
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small>3 days ago</small>
                  </div>
                  <p className="mb-1">
                    Some placeholder content in a paragraph.
                  </p>
                  <small>And some small print.</small>
                </Link>
                <Link
                  to="/bootstrap"
                  className="list-group-item list-group-item-action"
                >
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-muted">3 days ago</small>
                  </div>
                  <p className="mb-1">
                    Some placeholder content in a paragraph.
                  </p>
                  <small className="text-muted">
                    And some muted small print.
                  </small>
                </Link>
                <Link
                  to="/bootstrap"
                  className="list-group-item list-group-item-action"
                >
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-muted">3 days ago</small>
                  </div>
                  <p className="mb-1">
                    Some placeholder content in a paragraph.
                  </p>
                  <small className="text-muted">
                    And some muted small print.
                  </small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
