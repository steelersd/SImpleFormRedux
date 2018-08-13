import NameForm from '../components/NameForm'
import PropTypes from 'prop-types';
import initialState from '../store/initialState'
import {bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/actions'
import {compose} from 'ramda'

import api from '../api/api'

const mapStateToProps = (state, ownProps) => ({
  ...state.all
})

function mapDispatchToProps(dispatch, ownProps) {
  
  const createGuid = ownProps.createGuid ? ownProps.createGuid: api.getGuid
  const updateGUID = () => {
    bindActionCreators(actions.updateGUID, dispatch)(createGuid())
  }
  
  const updateGUIDWithCreator = createGuid => {
    const that = this
    return function(val) {
       if (typeof createGuid !== 'function') {
         throw new Error(
            `updateGUIDWithCreator expected function, instead received ${
              createGuid === null ? 'null' : typeof createGuid
            }. `
          )
       }
      
      debugger
       compose(
         dispatch,
         actions.updateGUID,
         createGuid
       )(val) 
    }
  }
  
   const handleInputChange = event => {
    event.preventDefault();
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    dispatch(actions.updateFormfield(name,value))
  }
  
  return {
     updateGUID,
     updateGUIDWithCreator,
     onChange : handleInputChange
  };
}

 function mergeProps(stateProps, dispatchProps, ownProps) {
   debugger
    console.log(stateProps)
    
   const handleSubmit =  (event) => {
    event.preventDefault();
    const {firstName, lastName, age, description} = stateProps
    const message = `
      First Name : ${firstName}
      Last Name : ${lastName}
      Age : ${age}
      Description: ${description}
    `
    alert(message);
   } 
    
    return {
      ...ownProps,
      ...dispatchProps,
      handleSubmit 
    };
}
// function mergeProps(stateProps, dispatchProps, ownProps) {
//   const createGuid = ownProps.createGuid ? ownProps.createGuid: dispatchProps.createGuid 
//   console.log('mergeProps')
//   console.log(...stateProps, ...dispatchProps, ...ownProps)
//   const updateGUID = (args) => dispatchProps.updateGUID(dispatchProps.createGuid(...args))
//   return {...stateProps, ...dispatchProps, ...ownProps, updateGUID: updateGUID}
// }


export default connect(
  mapStateToProps,
  mapDispatchToProps, 
  mergeProps
//   actions : {...actions},
//   mergeProps
)(NameForm)





// class NameFormContainer extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return <NameForm {...this.props} />
//   }
// }

// NameFormContainer.propTypes = {
//   firstName: PropTypes.string
// };

// NameFormContainer.defaultProps = {
//   firstsName: 'Adam' 
// }

//export default NameFormContainer