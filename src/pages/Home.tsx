import css from './Home.module.css';

const Home = () => {
    return (
        <>
        <section className={css.heroSection}>
  <div className={css.heroContent}>
    <h1>Unlock your potential with the best <span>language</span> tutors</h1>
    <p>Embark on an exciting language journey...</p>
    <button className={css.primaryBtn}>Get started</button>
  </div>

  <div className={css.heroImage}>
    <img src="..." alt="hero" />
  </div>
</section>

<ul className={css.stats}>
  <li>
    <strong>32,000+</strong>
    <span>Experienced tutors</span>
  </li>
  ...
</ul>
</>
    )
};

export default Home;