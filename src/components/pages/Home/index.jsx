import Layout from '../../Layout';

const Home = () => {
  const messageStyles = {
    fontSize: '24px',
    fontWeight: '500',
  };
  return (
    <Layout>
      <div style={messageStyles}>
        To get started you need to login to your account
      </div>
    </Layout>
  );
};

export default Home;
