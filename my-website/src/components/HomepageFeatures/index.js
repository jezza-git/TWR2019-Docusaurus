import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Red-Bellied Woodpecker',
    Svg: require('@site/static/img/woodpecker.svg').default,
    description: (
      <>
        Woodpeckers are known for pecking wood.
      </>
    ),
  },
  {
    title: 'Peregrine Falcon',
    Svg: require('@site/static/img/falcon.svg').default,
    description: (
      <>
        Falcons are super fast.
      </>
    ),
  },
  {
    title: 'Black Vulture',
    Svg: require('@site/static/img/vulture.svg').default,
    description: (
      <>
        Vultures can be pretty spooky.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
