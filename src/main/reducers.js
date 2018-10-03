import { combineReducers }          from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'

// import ClienteReducers         from '../common/reducers/clienteReducers'

const rootReducer = combineReducers({
  toastr: toastrReducer
})

export default rootReducer
