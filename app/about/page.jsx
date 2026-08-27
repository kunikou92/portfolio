import PageHeading from '../components/PageHeading';

const history = [
  {
    date: '2026.04',
    title: '明治大学 総合数理学部 FMS 入学',
    description: '先端メディアサイエンス学科で、表現とテクノロジーについて学んでいます。',
  },
];

const skills = ['Processing', 'HTML', 'CSS', 'JavaScript', 'Python'];

export default function AboutPage() {
  return (
    <div className="page-shell">
      <PageHeading eyebrow="About me" title="つくりながら、学ぶ。">
          國田航聖です。明治大学でメディアとテクノロジーを学びながら、
          Web制作やプログラミングに取り組んでいます。興味を持ったことを実際に形にし、
          試行錯誤の中でできることを増やしています。
      </PageHeading>

      <div className="about-grid">
        <section className="content-panel profile-panel">
          <p className="section-number">01</p>
          <p className="profile-name">Kunita Kousei</p>
          <h2>Creative Developer / Student</h2>
          <p>
            見た目の心地よさと、触れて楽しい体験の両方を大切にしています。
            今は基礎を一つずつ身につけながら、自分ならではの表現を探しています。
          </p>
        </section>

        <section className="content-panel">
          <div className="section-title-row">
            <div>
              <p className="section-number">02</p>
              <h2>History</h2>
            </div>
            <span>これまで</span>
          </div>
          <div className="timeline">
            {history.map((item) => (
              <article className="timeline-item" key={`${item.date}-${item.title}`}>
                <time>{item.date}</time>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-panel skills-panel">
          <div className="section-title-row">
            <div>
              <p className="section-number">03</p>
              <h2>Skills</h2>
            </div>
            <span>学んだこと</span>
          </div>
          <ul className="skill-list">
            {skills.map((skill, index) => (
              <li key={skill}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {skill}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
