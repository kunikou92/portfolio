const works = [
  {
    title: '電卓アプリ',
    description: '計算履歴を保存・削除できる、関数電卓アプリです。日常の計算から関数を使った計算まで、ひとつの画面で操作できます。',
    date: '2026.07',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    image: '/images/calculator-app.png',
    github: 'https://github.com/kunikou92/calculate-app',
  },
];

export default function WorksPage() {
  return (
    <div className="page-shell">
      <section className="page-heading works-heading">
        <p className="eyebrow">Selected works</p>
        <h1>制作実績。</h1>
        <p className="page-lead">
          学びの中で制作した作品を紹介します。考え、手を動かし、完成させるまでの
          一つひとつが、次の制作につながっています。
        </p>
      </section>

      <section className="works-grid" aria-label="制作実績">
        {works.map((work, index) => (
          <article className="work-card" key={work.title}>
            <div className="work-image-wrap">
              <img src={work.image} alt={`${work.title}の画面`} className="work-image" />
              <span className="work-index">{String(index + 1).padStart(2, '0')}</span>
            </div>
            <div className="work-body">
              <div className="work-meta">
                <time>{work.date}</time>
                <span>Web application</span>
              </div>
              <h2>{work.title}</h2>
              <p>{work.description}</p>
              <ul className="tag-list" aria-label="使用技術">
                {work.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              <a className="work-link" href={work.github} target="_blank" rel="noreferrer">
                GitHubで見る <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
