import React, { useState } from 'react';
import PropTypes from 'prop-types';

const WikipediaViewerContext = React.createContext();

const WikipediaViewer = ({ children }) => {
  const [viewingPageId, setViewingPageId] = useState();

  return (
    <WikipediaViewerContext.Provider
      value={{
        viewingPageId,
        setViewingPageId,
      }}
    >
      {children}
    </WikipediaViewerContext.Provider>
  );
};

WikipediaViewer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default WikipediaViewer;

export { WikipediaViewerContext };
