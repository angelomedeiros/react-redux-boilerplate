import React from 'react'
import ReduxToastr from 'react-redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

export default props => (
  <ReduxToastr
    timeout={4000}
    newestOnTop={false}
    preventDuplicates
    position='top-right'
    transitionIn='fadeIn'
    transitionIut='fadeOut'
    progressBar
  />
)
