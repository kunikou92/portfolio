import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="home page-shell">
      <div className="home-hero">
        <div className="home-copy">
          <p className="eyebrow">Kunita Kousei / Portfolio</p>
          <h1>
            つくることから、
            <br />
            新しいことを学ぶ。
          </h1>
          <p className="home-lead">
            プログラミングを学びながら、興味を持ったアイデアを形にしています。
            幅広い分野に触れ、一歩ずつできることを増やしています。
          </p>
          <Link className="detail-link" href="/about">
            詳しく <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="home-visual" aria-hidden="true">
          <span className="visual-yellow" />
          <span className="visual-cream" />
          <span className="visual-mint" />
          <span className="visual-navy" />
        </div>
      </div>
    </section>
  );
}
