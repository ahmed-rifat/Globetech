import React from 'react';
import {
    Link,
    useMatch,
    useResolvedPath,
  } from "react-router-dom";

const CustomLink = ({ children, to, ...props })=> {
    let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true , color:'#D7F561'});

  return (
    <div>
      <Link
        style={{ color: match? "#D7F561" : "" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      
    </div>
  );
};

export default CustomLink;