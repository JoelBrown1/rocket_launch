import React, { Fragment} from 'react';
import { IRocketLaunchSummary , IProps } from '../interfaces/interface';

const RocketList = (props: IProps): Array<JSX.Element> => {
  const { launches } = props;

  const handleClick = (data: any) => {
    console.log('handleClick data: ', data);
  }

  
  return launches.map(((launchItem: IRocketLaunchSummary) => {
    const patchImgURL = launchItem.patchImage;
    const d = new Date(launchItem.launchDateUTC);
    const n = d.toUTCString();
    let status = 'upcoming';
    switch (launchItem.launchSuccess) {
      case true:
        status = 'success';
        break;
      case false:
        status = 'failure';
        break;
      default:
        break;
    }


    return (
      <div key={launchItem.flightId} onClick={() => {
        handleClick(launchItem)}
        }>
        <div>
          <img src={patchImgURL} alt='Mission patch' />
        </div>
        <div>
          <h1>{launchItem.missionName}</h1>
          <p>{n}</p>
        </div>
        <div>
          {status}
        </div>
      </div>
    )
  }))
}

export default RocketList;