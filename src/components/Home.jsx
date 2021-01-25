import { useEffect } from 'react';

const Home = ({ company }) => {
  useEffect(() => {
    document.title = company.name;
  });

  return (
    <section className="hero is-primary is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1">{company.name}</h1>
          <h2 className="subtitle">{company.phrase}</h2>
        </div>
      </div>
    </section>
  );
};

export default Home;
