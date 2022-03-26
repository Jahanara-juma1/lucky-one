import React from 'react';

const Question = () => {
    return (
        <div>
            <h2>Question: How react works?</h2>
            <p>Ans: React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.
          React just maintains a tree for you and it will do efficient diff computations on the nodes. Your HTML code is pretty much a tree, or at least that’s how your browser treats it. It constructs what is called the Document Object Model or DOM as it’s often referred to.
          The HTML DOM is pretty much an interface (API) to modify the nodes in it. It contains different methods like getElementById or the new querySelector to target each node and we use JS to work with the DOM.ReactJS is simply a JavaScript library for building user interfaces. It was created by Facebook and now has a large community, including FB, that actively maintains it.</p>

          <h2>Question: How useState works?</h2>
          <p>Ans: useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.
You create a functional component and throw some React hook at it that tracks state, can also update it, and it just works.
The useState Hook allows you to declare only one state variable.useState(0) returns a tuple where the first parameter count is the current state of the counter and setCounter is the method that will allow us to update the counter's state.useState is one of the hooks available in React v16.8.0. It basically lets you turn your otherwise non-stateful/functional components to one that can have its own state.</p>
        </div>
    );
};

export default Question;