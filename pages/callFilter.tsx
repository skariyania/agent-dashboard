
import React from 'react';

import type { NextPage } from 'next';
import { any } from 'prop-types';

type Props = {
    callFilter: any
}

const CallFilter: NextPage<Props> = function CallFilter({ callFilter }) {

    return (
        <div>
            <div>{callFilter.map((call: any) => (
                <li key={call.call_id}>
                    agent: {call.agent_id},
                    call_id: {call.call_id},
                    duration: {call.call_time}
                </li>))}
            </div>
        </div>
    )
}

CallFilter.propTypes = {
    callFilter: any
}

export async function getStaticCallFilter(agents: string[], callRange: number[]) {
    const response = await fetch(`https://damp-garden-93707.herokuapp.com/getfilteredcalls`, {
        method: "POST",
        body: JSON.stringify({
            "info": {
                "filter_agent_list": agents,
                "filter_time_range": callRange
            }
        }),

        // Adding headers to the request
        headers: {
            "Content-type": "application/json;"
        }
    })
    const result = await response.json()
    return result.data
}

export default CallFilter