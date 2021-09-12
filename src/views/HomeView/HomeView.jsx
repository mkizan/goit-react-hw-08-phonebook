import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
// import styles from './HomeView.module.scss';

export default function HomeView() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // const name = useSelector(authSelectors.getUserName);

  return <>{!isLoggedIn ? <p>hello</p> : <p>welcome</p>}</>;
}
