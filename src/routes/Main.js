import React from 'react';
import { connect } from 'dva';
import styles from './Main.css';

function Main() {
  return (
    <div className={styles.normal}>
      Route Component: Main
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Main);
