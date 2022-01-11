import React from 'react';

import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head';

import styles from '../styles/Home.module.css'
import CallFilter, { getStaticCallFilter } from './callFilter';

const Home: NextPage = function Home({ callFilter }: any) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Agent Dashboard</title>
        <meta name="description" content="Agents Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>
          <code className={styles.code}>Call Details</code>
        </p>

        <div className={styles.grid}>
          <CallFilter callFilter={callFilter}></CallFilter>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const agentsList = await fetch(`https://damp-garden-93707.herokuapp.com/getlistofagents`)
  const agentsListResult = await agentsList.json()

  const callDuration = await fetch(`https://damp-garden-93707.herokuapp.com/getdurationrange`)
  const callDurationResult = await callDuration.json()

  const callDurationArray: number[] = [];
  callDurationArray.push(callDurationResult.data.minimum, callDurationResult.data.maximum)

  // update below line with dynamic input from user to make filters work
  const callFilter = await getStaticCallFilter(["Janet Nelson", "Wayne Brown"], [24, 25]);

  return {
    props: {
      agents: agentsListResult.data.listofagents,
      callDuration: callDurationArray,
      callFilter
    }
  }
}

export default Home
