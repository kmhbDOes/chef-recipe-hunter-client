import React, { useEffect, useState } from "react";
import Pdf from "react-to-pdf";
import Spinner from "../../layout/Spinner";

const ref = React.createRef();
const Blog = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulating a delay of 2 seconds to simulate data loading
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <>
      {loading ? (
        <Spinner></Spinner>
      ) : (
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
      )}
    </>
  );
};

export default Blog;
