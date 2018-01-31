import React from 'react';

import SimcData from 'js/SimcData';

import Panel from 'js/components/Panel';
import ActorDetail from 'js/components/ActorDetail';

const ActorPanels = () => {
  const actors = SimcData.sim.players;

  return (
    <React.Fragment>
      {actors.map(actor => (
        <Panel>
          <ActorDetail actor={actor} />
        </Panel>
      ))}
    </React.Fragment>
  );
};

export default ActorPanels;
