
import React from 'react';

import type { NextPage } from 'next';
import PropTypes from 'prop-types';


// ###########
// DEPRICATED DONOT USE
// ###########

type Props = {
  agents: string[]
}

const AgentFilter: NextPage<Props> = function AgentFilter({ agents }) {
  return (
    <div>
      { agents.map( (agent) => (<li key={agent}> {agent} </li>)) }
    </div>
  )
}

AgentFilter.propTypes = {
  agents: PropTypes.array.isRequired
}

export default AgentFilter
