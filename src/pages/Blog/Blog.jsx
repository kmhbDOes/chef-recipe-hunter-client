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
            <Pdf
              targetRef={ref}
              filename="Blog.pdf "
              options={{ height: "100%", width: "100%" }}
            >
              {({ toPdf }) => (
                <button className="btn-rec" onClick={toPdf}>
                  Generate Pdf
                </button>
              )}
            </Pdf>
          </div>
          <div ref={ref} className="my-4 mx-auto text-center md:mx-0">
            <p className="py-4">
              <span className="font-bold">
                Differences between uncontrolled and controlled components
              </span>
              <br />
              <span className="font-semibold">
                In React, components can either be controlled or uncontrolled,
                depending on how they handle their data. Uncontrolled components
                refer to components that handle their own state internally. For
                example, an uncontrolled input element stores its value
                internally and manages it by itself. In other words, the
                component manages its own state, which is independent of the
                React state. Uncontrolled components use refs to get their
                values. Controlled components are the opposite of uncontrolled
                components, where the state is managed by the parent component
                through props. In other words, the state is controlled by the
                React state, which means that the parent component passes down
                the values and the onChange handler to update the value. In this
                case, the parent component controls the state and behavior of
                the child component. Controlled components are useful when the
                parent component needs to have access to the child component's
                state. Controlled components provide more control over the input
                data and make it easier to enforce constraints on the input
                data. On the other hand, uncontrolled components provide less
                boilerplate code, making them easier to use for simple cases.
              </span>
            </p>
            <p className="py-4">
              <span className="font-bold">
                How to validate React props using PropTypes?
              </span>
              <br />
              <span className="font-semibold">
                PropTypes is a library in React that is used to validate the
                properties of components. PropTypes provide a way to check the
                type of a prop at runtime and issue a warning in the console if
                it's not of the expected type. To use PropTypes, you need to
                import it from the 'prop-types' package and then define the
                PropTypes for the component. For example, you can specify that a
                prop called 'title' is expected to be a string data type, and
                that a prop called 'count' is expected to be a number data type.
                If the actual props passed to the component do not match the
                specified PropTypes, then a warning message will be displayed in
                the console. PropTypes also allows you to specify whether a prop
                is required or not, by using the 'isRequired' method. If a
                required prop is not passed to the component, then a warning
                message will be displayed in the console. Using PropTypes is an
                effective way to catch errors early on in the development
                process, and can help ensure that your components receive the
                expected props.
              </span>
            </p>
            <p className="py-4">
              <span className="font-bold">
                Tell us the difference between nodejs and express JS
              </span>
              <br />
              <span className="font-semibold">
                Node.js is an open-source JavaScript runtime environment that
                allows you to run JavaScript code outside of a web browser, on a
                server or local machine. It provides a set of built-in modules
                that allow you to perform various operations, such as reading
                and writing files, making HTTP requests, and creating network
                sockets. Node.js is often used for building server-side
                applications, command-line tools, and desktop applications.
                Express.js is a popular web application framework for Node.js.
                It provides a set of features and tools for building web
                applications, such as routing, middleware, and template engines.
                Express.js is built on top of Node.js, so it inherits all the
                features of Node.js, but also adds a layer of abstraction that
                makes it easier to build web applications. Express.js is often
                used for building web APIs, single-page applications, and
                full-stack web applications.The main difference between Node.js
                and Express.js is that Node.js is a runtime environment for
                executing JavaScript code outside of a web browser, while
                Express.js is a framework for building web applications in
                Node.js. In other words, Node.js is a platform, while Express.js
                is a tool that runs on top of Node.js to make it easier to build
                web applications.
              </span>
            </p>
            <p className="py-4">
              <span className="font-bold">
                What is a custom hook, and why will you create a custom hook?
              </span>
              <br />
              <span className="font-semibold">
                In React, a custom hook is a JavaScript function that starts
                with the prefix use and allows you to extract reusable logic
                from a component. You can use custom hooks to share stateful
                logic between components, make your code more modular and
                reusable, and reduce code duplication. Creating a custom hook
                can be useful when you find yourself repeating the same code in
                different components or when you need to share stateful logic
                across multiple components. For example, you might create a
                custom hook for handling form validation or for fetching data
                from an API. Once you've created the custom hook, you can use it
                in multiple components throughout your application. One of the
                key benefits of using custom hooks is that they follow the same
                rules as React's built-in hooks, such as useState and useEffect.
                This means that you can leverage all the features of hooks,
                including managing component state and side effects, with your
                own custom logic. Overall, custom hooks provide a clean,
                reusable way to share and manage stateful logic in your React
                applications.
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
