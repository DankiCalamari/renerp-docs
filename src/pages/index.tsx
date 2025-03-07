import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={`hero hero--primary ${styles.heroBanner}`}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/intro">
            Get Started - 5min ⏱️
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="https://github.com/DankiCalamari/renerp">
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Modern Enterprise Resource Planning System">
      <HomepageHeader />
      <main className="container margin-vert--lg">
        <HomepageFeatures />
        <div className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <div className="card">
                  <h2>Inventory Management</h2>
                  <p>Track products, manage stock levels, and automate reordering.</p>
                  <Link to="/features/inventory">Learn more →</Link>
                </div>
              </div>
              <div className="col col--4">
                <div className="card">
                  <h2>Sales Management</h2>
                  <p>Process orders, manage customers, and generate invoices.</p>
                  <Link to="/features/sales">Learn more →</Link>
                </div>
              </div>
              <div className="col col--4">
                <div className="card">
                  <h2>Purchase Management</h2>
                  <p>Handle suppliers, track purchases, and manage costs.</p>
                  <Link to="/features/purchase">Learn more →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
} 