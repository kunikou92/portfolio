export default function PageHeading({
  as: Component = 'section',
  eyebrow,
  title,
  children,
  className = 'page-heading',
  leadClassName = 'page-lead',
  action,
}) {
  return (
    <Component className={className}>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className={leadClassName}>{children}</p>
      {action}
    </Component>
  );
}
