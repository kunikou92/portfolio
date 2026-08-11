import Card from './components/Card';

export default function HomePage() {
  return (
    <section>
      <div className="hero">
        <h1 id="name-placeholder">國田航聖(くにたこうせい)</h1>
        <p id="tagline-placeholder">プログラミング勉強中のかけだし初心者。幅広い分野に足を踏み入れながら知識を深め中。</p>
        <nav className="hero-nav">
          <a href="/about">About</a>
          <a href="/works">Works</a>
        </nav>
      </div>

      <div className="cards">
        <Card title="About" href="/about">About page</Card>
        <Card title="Works" href="/works">Works page</Card>
      </div>
    </section>
  );
}
