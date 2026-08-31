
import Link from 'next/link';

export default function Card({ title, href, children }) {
  const inner = (
    <div>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );

  return (
    <article className="card">
      {href ? <Link href={href}>{inner}</Link> : inner}
    </article>
  );
}
