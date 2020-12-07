export interface IRocketLaunchSummary {
  flightId: string
  patchImage: any,
  missionName: string,
  launchDateUTC: string,
  launchSuccess: boolean,
  rocketName: string,
  rocketType: string,
  reused: boolean
}

export interface IAction {
  type: string,
  payload: Array<IRocketLaunchSummary> | any
}

export interface IState {
  launches: Array<IRocketLaunchSummary>,
  specificLaunch: any
}

export type Dispatch = React.Dispatch<IAction>

export interface ILaunchProps {
  launches: Array<IRocketLaunchSummary>
  store: { state: IState; dispatch: Dispatch }
}

export interface IProps {
  launches: Array<IRocketLaunchSummary>
  store: { state: IState; dispatch: Dispatch }
}

export interface IRocketProps {
  rocketName: string,
  rocketType: string,
  reused: boolean
}