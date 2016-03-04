
import React, {
  PropTypes,
} from 'react';

import Column from './Column.jsx';

export {
  default as Column,
} from './Column.jsx';

const ColumnLayout = props => {
  return (
    <div
      className="columnLayout"
    >
      {props.children}
    </div>
  );
};

ColumnLayout.propTypes = {
  children: PropTypes.arrayOf(Column).isRequired,
};

export default ColumnLayout;
