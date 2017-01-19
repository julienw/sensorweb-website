import * as React from 'react';
const { default: styled } = require<any>('styled-components');
import SensorMap from './map/SensorMap';
import TransitionGroup from 'react-addons-transition-group';
import SensorListItem from './SensorListItem';
import { AppState, Sensor } from '../state';
import { observer } from 'mobx-react';
import ColorIndexOverlay from './map/ColorIndexOverlay';

interface MapPaneProps {
  appState: AppState;
}

@observer
export default class MapPane extends React.Component<MapPaneProps, {}> {
  render() {
    const appState = this.props.appState;
    return <Wrapper>
      <ColorIndexOverlay />
      <SensorMap
        style={{width: '100%', flexGrow: 1}}
        currentGpsLocation={appState.currentGpsLocation}
        knownSensors={appState.knownSensors}
        selectedSensor={appState.selectedSensor}
        onMapLoaded={appState.onMapLoaded.bind(appState)}
        onClickSensor={this.onClickSensor} />
      <SensorListItem
          onClickExpand={() => { /*this.expanded = !this.expanded;*/ }}
          onClickDetails={this.onClickDetails}
          onClickFavorite={() => appState.isFavoritingSensor = true }
          settings={appState.settings}
          sensor={appState.selectedSensor} />
    </Wrapper>;
  }

  onClickSensor = (sensor?: Sensor) => {
    this.props.appState.viewSensor(sensor);
  };

  onClickDetails = () => {
    const sensor = this.props.appState.selectedSensor!;
    this.props.appState.viewSensorDetails(sensor);
  };
};


const Wrapper = styled.div`
  flex: 1;
  position: relative;

  display: flex;
  flex-direction: column;
`;
