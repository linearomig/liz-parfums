import { Link } from 'react-router-dom';
import '../styles/view/error.scss';

const Error = () => {
  return (
    <section className='section'>
      <h1>404</h1>
      <p>page not found</p>
      <a><Link to='/'>back home</Link></a>
    </section>
  );
};
export default Error;