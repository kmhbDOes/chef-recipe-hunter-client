import React from "react";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const Blog = () => {
  return (
    <div>
      <div className="text-center">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <button className="btn-rec" onClick={toPdf}>
              Generate Pdf
            </button>
          )}
        </Pdf>
      </div>
      <div ref={ref} className="text-center">
        <p>
          Differences between uncontrolled and controlled components
          <span></span>
        </p>
        <p>
          How to validate React props using PropTypes?
          <span></span>
        </p>
        <p>
          Tell us the difference between nodejs and express JS
          <span></span>
        </p>
        <p>
          What is a custom hook, and why will you create a custom hook?
          <span></span>
        </p>
      </div>
    </div>
  );
};

export default Blog;
