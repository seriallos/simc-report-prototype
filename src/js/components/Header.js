import React from 'react';

import SimcData from 'js/SimcData';

import imgLogo from 'assets/simc-logo.jpg';

const Header = () => {
  const { version, git_revision, sim } = SimcData;
  const { options } = sim;
  const dbcLive = sim.options.dbc.Live;
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div>
        <img src={imgLogo} height={150} />
      </div>
      <div style={{ marginLeft: 20 }}>
        <h2>
          <a href="http://www.simulationcraft.org/">
            SimulationCraft {version}
          </a>
        </h2>
        <p>
          for World of Warcraft {dbcLive.wow_version}
          &nbsp;
          (wow build level {dbcLive.build_level},
            git build
            &nbsp;
            <a href={`https://github.com/simulationcraft/simc/commit/${git_revision}`}>
              {git_revision}
            </a>
          )
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            Iterations: {options.iterations}
          </div>
          <div>
            Fight Length: {options.max_time}
          </div>
          <div>
            Fight Style: {options.fight_style}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
