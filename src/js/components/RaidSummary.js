import _ from 'lodash';
import React from 'react';

import SimcData from 'js/SimcData';

const RaidSummary = () => {
  const actors = SimcData.sim.players;
  const sorted = _.reverse(_.sortBy(actors, actor => actor.collected_data.dps.median));
  return (
    <table>
      <tbody>
        {sorted.map(actor => (
          <tr key={actor.name}>
            <td style={{ textAlign: 'right' }}>{actor.name}</td>
            <td style={{ textAlign: 'right' }}>{_.round(actor.collected_data.dps.median).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RaidSummary;
