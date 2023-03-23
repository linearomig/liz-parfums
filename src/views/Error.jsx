import { Link } from 'react-router-dom';
import PublicNavbar from '../components/PublicNavbar';
import '../styles/view/error.scss';



const Error = () => {
  return (
    <div>
    <PublicNavbar/>
    <section className='section'>
      <h1>404</h1>
      <p>page not found</p>
      <a><Link to='/'>back home</Link></a>
    </section>
    </div>
  );
};
export default Error;