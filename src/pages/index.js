import { observer } from 'mobx-react-lite';

const Home = observer(() => <div />);

Home.getInitialProps = async (ctx) => {
  const { initialStore } = ctx;
  return { initialStore };
};

export default Home;
