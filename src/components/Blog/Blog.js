import React from 'react';
const Blog = () => {
    return (
        <div className='row'>
          <div>
            <h3>What is purpose of react-router?</h3>
            <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
          </div>
          <div>
            <h3>How does API works?</h3>
            <p>React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state</p>
          </div>
          <div>
            <h3>What is useRef Hook?</h3>
            <p>The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property</p>
          </div>
      </div>
    );
};

export default Blog;