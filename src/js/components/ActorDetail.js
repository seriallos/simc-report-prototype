import React from 'react';

const ActorDetail = ({ actor }) => {
  return (
    <React.Fragment>
      <h2>{actor.name}: {_.round(actor.collected_data.dps.median).toLocaleString()} dps</h2>
    </React.Fragment>
  );
};

export default ActorDetail;
