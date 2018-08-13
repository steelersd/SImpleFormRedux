import React from 'react'
import NameForm from './NameForm'
import PropTypes from 'prop-types';

class NameFormContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <NameForm {...this.props} />
  }
}

NameFormContainer.propTypes = {
  firstName: PropTypes.string
};

NameFormContainer.defaultProps = {
  firstsName: 'Adam' 
}

export default NameFormContainer