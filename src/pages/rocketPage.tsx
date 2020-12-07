import React, {useContext} from 'react';
import App from '../App';
import { Store } from '../store/reducers/rocketsReducer';
import { IRocketProps } from '../interfaces/interface';

const RocketDetails = ():JSX.Element => {
  const {state, dispatch} = useContext(Store);
  return (
    <App>
      <div>we got to the rocket details page</div>
    </App>
  )
};

export default RocketDetails;