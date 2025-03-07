import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Modern Stack',
    description: (
      <>
        Built with FastAPI and React, RENERP provides a modern, performant, and
        scalable solution for enterprise resource planning.
      </>
    ),
  },
  {
    title: 'Real-time Updates',
    description: (
      <>
        Stay synchronized with real-time inventory updates, order processing, and
        business analytics.
      </>
    ),
  },
  {
    title: 'Secure & Reliable',
    description: (
      <>
        Enterprise-grade security with role-based access control and data encryption
        to protect your business data.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
} 