import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import './index.css'
import light from './theme'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const Main = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(light)}>
    <App/>
  </MuiThemeProvider>
)

render(<Main/>, document.getElementById('root'))
