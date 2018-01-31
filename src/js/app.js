import React from 'react';
import { render } from 'react-dom';

import { validSimcData } from 'js/SimcData';

import Panel from 'js/components/Panel';

import Header from 'js/components/Header';
import RaidSummary from 'js/components/RaidSummary';
import ActorPanels from 'js/components/ActorPanels';

const App = () => {
  if (!validSimcData()) {
    return (
      <div>
        Error with embedded SimC data!
      </div>
    );
  }

  return (
    <div>
      <Panel>
        <Header />
      </Panel>
      <Panel>
        <RaidSummary />
      </Panel>

      <ActorPanels />

    </div>
  );
};

render(
  <App />,
  document.getElementById('simc-report'),
);
