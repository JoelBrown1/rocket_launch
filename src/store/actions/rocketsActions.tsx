import { Dispatch, IRocketLaunchSummary } from '../../interfaces/interface';

export const fetchRocketDataAction = async (dispatch: Dispatch) => {
  const url = 'https://api.spacexdata.com/v3/launches';
  const data = await fetch(url);
  const dataJSON = await data.json();
  const lauchData = dataJSON.map((item: any) => {
    const img = item.links.mission_patch_small ? item.links.mission_patch_small : item.links.mission_patch;
    const isReused = (item.rocket.first_stage.cores[0].reused && item.rocket.second_stage.payloads[0].reused) ? true : false;
    
    return {
      flightId: item.flight_number + '_' + item.launch_date_unix,
      patchImage: img,
      missionName: item.mission_name,
      launchDateUTC: item.launch_date_utc,
      launchSuccess: item.launch_success,
      rocketName: item.rocket.rocket_name,
      rocketType: item.rocket.rocket_type,
      reused: isReused
    }
  })
  
  return dispatch({
    type: 'FETCH_DATA',
    payload: lauchData
  })
}

// create action to set launch details into store