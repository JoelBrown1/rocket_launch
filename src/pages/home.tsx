import React, { useContext, useEffect, lazy, Suspense} from 'react';
import App from '../App';
import { Store } from '../store/reducers/rocketsReducer';
import { ILaunchProps } from '../interfaces/interface';
import { fetchRocketDataAction } from '../store/actions/rocketsActions';

const LaunchList = lazy<any>(()=> import('../components/Rocket_List'));
const HomePage = ():JSX.Element => {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.launches.length === 0 && fetchRocketDataAction(dispatch)
  });

  const props: ILaunchProps = {
    launches: state.launches,
    store: { state, dispatch }
  };

  return (
    <App>
      <Suspense fallback={<div>loading...</div>}>
        <section className='launch-layout'>
          <LaunchList {...props} />
        </section>
      </Suspense>
    </App>
  )

}

export default HomePage;
