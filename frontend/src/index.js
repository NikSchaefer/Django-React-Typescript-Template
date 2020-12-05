import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

function Root() {
    return (
        <div>
            <App />
        </div>
    )
}
console.log('this')
ReactDOM.render(<Root />, document.getElementById('root'))