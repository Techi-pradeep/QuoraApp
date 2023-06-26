import { useState, createContext } from "react";
import PropTypes from "prop-types";

// Create Context
const PostContext = createContext();

// Provider component
const PostProvider = ({ children }) => {
  const [postBoxes, setPostBoxes] = useState([]);
  console.log("PostProvider:", postBoxes);
  return (
    <PostContext.Provider value={{ postBoxes, setPostBoxes }}>
      {children}
    </PostContext.Provider>
  );
};

/**
 The PropTypes.node.isRequired validation ensures that children is passed as a prop to the PostProvider component. Without that validation, you'll get a warning in the console when using the component.

 */

PostProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { PostProvider, PostContext };
