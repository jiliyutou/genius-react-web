import React from 'react';
import { connect } from 'dva';
import styles from './HomePage.css';
import NavHeader from '../components/MainLayout/NavHeader';

function HomePage() {
  return (
    <div className={styles.normal}>
      <NavHeader />
    </div>
  );
}

HomePage.propTypes = {
};


export default HomePage;
//export default connect()(HomePage);
