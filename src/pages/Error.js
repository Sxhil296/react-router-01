import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className='section'>
      <h1>404</h1>
      <h2>page not found</h2>
      <Link to="/" className="btn">Back to Home</Link>
    </section>
  );
};
export default Error;
