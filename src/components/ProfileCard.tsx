import { experience, site, skills } from '../data/portfolio';

// Decorative editor-style card for wide screens. It only repeats data shown
// elsewhere on the page, so it is hidden from assistive technology.
export function ProfileCard() {
  const current = experience[0];
  const learningTier = skills.find((tier) => tier.learning);

  const fields: [string, string | string[]][] = [
    ['name', site.name],
    ...(current
      ? ([
          ['role', current.role],
          ['company', current.company],
        ] as [string, string][])
      : []),
    ['stack', site.coreStack],
    ...(learningTier ? ([['learning', learningTier.items]] as [string, string[]][]) : []),
  ];

  const str = (value: string) => <span className="code-string">'{value}'</span>;

  return (
    <div className="code-card" aria-hidden="true">
      <div className="code-bar">
        <span />
        <span />
        <span />
        <p>profile.ts</p>
      </div>
      <div className="code-body">
        <p>
          <span className="code-keyword">const</span> engineer = {'{'}
        </p>
        {fields.map(([key, value]) =>
          Array.isArray(value) ? (
            <div key={key}>
              <p className="code-indent">{key}: [</p>
              {value.map((item) => (
                <p key={item} className="code-indent-2">
                  {str(item)},
                </p>
              ))}
              <p className="code-indent">],</p>
            </div>
          ) : (
            <p key={key} className="code-indent">
              {key}: {str(value)},
            </p>
          ),
        )}
        <p>{'}'};</p>
      </div>
    </div>
  );
}
