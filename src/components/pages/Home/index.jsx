import Layout from '../../Layout';
import styles from './Home.module.sass';

const Home = () => {
  return (
    <Layout>
      <div className={styles.messageBox}>
        To get started you need to login to your account
      </div>
    </Layout>
  );
};

export default Home;
