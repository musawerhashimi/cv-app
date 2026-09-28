import {
  AwardIcon,
  Bullets,
  Columns,
  ContactIcons,
  Dots,
  Entry,
  ItemTitle,
  Meta,
  Page,
  Paragraph,
  Rich,
  Section,
  Subtitle,
  Tag,
} from './components'
import {
  awards,
  certifications,
  education,
  experience,
  header,
  languages,
  projects,
  publications,
  references,
  skills,
  summary,
} from './data'

const { Phone, AtSign, Link, MapPin, Calendar } = ContactIcons

function Header() {
  const contact = [
    { icon: Phone, text: header.phone },
    { icon: AtSign, text: header.email },
    { icon: Link, text: header.linkedin },
    { icon: Link, text: header.github },
  ]
  const personal = [
    { icon: MapPin, text: header.location },
  ]
  const row = (items: typeof contact) => (
    <div className="flex flex-wrap items-center gap-x-[12px] text-[10px] leading-[1.5] font-medium text-ink">
      {items.map(({ icon: Icon, text }) => (
        <span key={text} className="flex items-center gap-[4px]">
          <Icon size={10} strokeWidth={2.4} className="text-accent" />
          {text}
        </span>
      ))}
    </div>
  )
  return (
    <header className="mb-[14px]">
      <h1 className="text-[29px] leading-none font-bold tracking-[0.2px] text-ink uppercase">{header.name}</h1>
      <div className="mt-[6px] mb-[4px] text-[13.5px] font-medium text-accent">{header.titles.join(' | ')}</div>
      {row(contact)}
      {row(personal)}
    </header>
  )
}

function PageOne() {
  const left = (
    <>
      <Section title="Summary">
        <Paragraph className="text-justify">{summary}</Paragraph>
      </Section>

      <Section title="Experience">
        {experience.map((e, i) => (
          <Entry key={e.company} last={i === experience.length - 1}>
            <ItemTitle>{e.role}</ItemTitle>
            <Subtitle>{e.company}</Subtitle>
            <Meta date={e.date} location={e.location} link={e.link} />
            <Bullets items={e.bullets} />
          </Entry>
        ))}
      </Section>

      <Section title="Certifications">
        {certifications.map((c, i) => (
          <Entry key={c.title} last={i === certifications.length - 1}>
            <ItemTitle>{c.title}</ItemTitle>
            <div className="text-[10px] text-body">{c.sub}</div>
          </Entry>
        ))}
      </Section>

      <Section title="Languages">
        <div className="grid grid-cols-2 gap-x-[20px] gap-y-[4px]">
          {languages.map((l) => (
            <div key={l.name} className="flex items-start justify-between border-b border-dashed border-[#c9c9c9] pb-[4px]">
              <div>
                <div className="text-[11.5px] leading-tight font-semibold text-ink">{l.name}</div>
                <div className="text-[10px] text-body">{l.level}</div>
              </div>
              <div className="mt-[3px]">
                <Dots filled={l.dots} />
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  )

  const right = (
    <>
      <Section title="Education">
        {education.map((e, i) => (
          <Entry key={e.school} last={i === education.length - 1}>
            <ItemTitle>{e.degree}</ItemTitle>
            <div className="flex justify-between gap-2">
              <div>
                <Subtitle>{e.school}</Subtitle>
                <Meta date={e.date} location={e.location} />
              </div>
              {e.gpa && (
                <div className="-mt-[10px] border-l border-[#d5d5d5] pl-[12px] text-center">
                  <div className="text-[8.5px] text-muted uppercase">GPA</div>
                  <div className="text-[12px] whitespace-nowrap">
                    <span className="font-semibold text-accent">{e.gpa.value}</span>
                    <span className="text-muted"> / {e.gpa.max}</span>
                  </div>
                </div>
              )}
            </div>
            <Bullets items={e.bullets} />
          </Entry>
        ))}
      </Section>

      <Section title="Skills">
        {skills.map((s) => (
          <div key={s.group} className="mb-[8px]">
            <Subtitle>{s.group}</Subtitle>
            <div className="mt-[6px] flex flex-wrap gap-x-[6px] gap-y-[10px]">
              {s.items.map((it) => (
                <Tag key={it}>{it}</Tag>
              ))}
            </div>
          </div>
        ))}
      </Section>

      <Section title="Awards">
        {awards.map((a, i) => (
          <Entry key={a.title + a.sub} last={i === awards.length - 1}>
            <div className="flex gap-[10px] pl-[2px]">
              <AwardIcon />
              <div>
                <ItemTitle>{a.title}</ItemTitle>
                <div className="text-[10px] text-body">{a.sub}</div>
              </div>
            </div>
          </Entry>
        ))}
      </Section>
    </>
  )

  return (
    <Page>
      <Header />
      <Columns left={left} right={right} />
    </Page>
  )
}

function PageTwo() {
  const left = (
    <Section title="Projects">
      {projects.map((p, i) => (
        <Entry key={p.title} last={i === projects.length - 1}>
          <ItemTitle>{p.title}</ItemTitle>
          <Meta date={p.date} link={p.link} />
          <div className="mt-[3px]">
            <Paragraph>
              <Rich text={p.description} />
            </Paragraph>
          </div>
          <Bullets items={p.bullets} />
        </Entry>
      ))}
    </Section>
  )

  const right = (
    <>
      <Section title="Publications">
        {publications.map((p, i) => (
          <Entry key={p.title} last={i === publications.length - 1}>
            <ItemTitle>{p.title}</ItemTitle>
            <div className="mt-[3px]">
              <Subtitle>{p.venue}</Subtitle>
            </div>
            <div className="text-[9.5px] text-muted italic">{p.authors}</div>
            <div className="flex items-center gap-x-[14px] text-[9.5px] leading-[1.45] text-muted">
              <span className="flex items-center gap-[4px]">
                <Calendar size={10} strokeWidth={2.2} />
                {p.date}
              </span>
              <span className="flex items-center gap-[4px]">
                <Link size={10} strokeWidth={2.2} />
                {p.status}
              </span>
            </div>
            <div className="mt-[3px]">
              <Paragraph>{p.description}</Paragraph>
            </div>
          </Entry>
        ))}
      </Section>

      <Section title="References">
        {references.map((r, i) => (
          <Entry key={r.name} last={i === references.length - 1}>
            <ItemTitle>{r.name}</ItemTitle>
            <a href={`mailto:${r.email}`} className="text-[10px] text-body underline">
              {r.email}
            </a>
          </Entry>
        ))}
      </Section>
    </>
  )

  return (
    <Page>
      <Columns left={left} right={right} />
    </Page>
  )
}

export default function App() {
  return (
    <>
      <div className="no-print sticky top-0 z-10 flex justify-center bg-[#eef0f4]/90 py-3 backdrop-blur">
        <button
          onClick={() => window.print()}
          className="rounded-md bg-accent px-5 py-2 font-sans text-sm font-medium text-white shadow hover:brightness-110"
        >
          Download PDF
        </button>
      </div>
      <PageOne />
      <PageTwo />
    </>
  )
}
