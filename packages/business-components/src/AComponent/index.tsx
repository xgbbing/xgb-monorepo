import * as React from 'react';
import Header from '@xgb/common-components';
import styles from './index.module.less';

interface ComponentProps {
  /** Title for ComponentA. */
  title: string;
}

const AComponent = (props: ComponentProps) => {
  const { title = 'Hello World!' } = props;

  return (
    <div className={styles.ComponentA} >
      <Header />
      { title }
    </div>
  );
};

export default AComponent;