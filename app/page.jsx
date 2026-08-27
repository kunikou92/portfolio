import Link from 'next/link';
import PageHeading from './components/PageHeading';

export default function HomePage() {
  return (
    <section className="home page-shell">
      <div className="home-hero">
        <PageHeading
          as="div"
          className="home-copy"
          leadClassName="home-lead"
          eyebrow="Kunita Kousei / Portfolio"
          title={
            <>
              つくることから、
              <br />
              新しいことを学ぶ。
            </>
          }
          action={
            <Link className="detail-link" href="/about">
              詳しく <span aria-hidden="true">→</span>
            </Link>
          }
        >
            プログラミングを学びながら、興味を持ったアイデアを形にしています。
            幅広い分野に触れ、一歩ずつできることを増やしています。
        </PageHeading>

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
