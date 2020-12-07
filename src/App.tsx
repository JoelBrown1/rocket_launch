import React, { useContext, Fragment } from 'react'
import { Store } from './store/reducers/rocketsReducer'
import { Link } from '@reach/router'

 const App = ({
  children
}: {
  children: JSX.Element
   }): JSX.Element => {
   const { state } = useContext(Store)
   
  return (
    <Fragment>
      <header className='header'>
        <div className="links">
          {/* <Link to='/'>Home</Link> */}
          {/* <Link to='/faves'>
            favourite
            <span className="Badge">
              {state.favourites.length}
            </span>
          </Link> */}
        </div>
      </header>
      {children}
    </Fragment>
  )
 }

export default App