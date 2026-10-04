import type { ReactNode } from 'react'
import { AtSign, Award, Calendar, Link, MapPin, Phone } from 'lucide-react'

/** Renders **bold** segments inside a plain string. */
export function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith('**') ? (
          <strong key={i} className="font-semibold text-ink">
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  )
}

export function Page({ children }: { children: ReactNode }) {
  return (
    <div className="page mx-auto my-6 bg-white px-[36px] pt-[30px] pb-[24px] font-sans text-body shadow-[0_2px_12px_rgba(0,0,0,0.12)]">
      {children}
    </div>
  )
}

export function Columns({ left, right }: { left: ReactNode; right: ReactNode }) {
  return (
    <div className="grid grid-cols-[1.5fr_1fr] gap-x-[30px]">
      <div>{left}</div>
      <div>{right}</div>
    </div>
  )
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-[12px]">
      <h2 className="mb-[6px] border-b-[3px] border-ink pb-[1px] text-[15.5px] leading-tight font-semibold tracking-wide text-ink uppercase">
        {title}
      </h2>
      {children}
    </section>
  )
}

/** Dashed divider between entries of a section. */
export function Entry({ children, last }: { children: ReactNode; last?: boolean }) {
  return (
    <div className={last ? 'pb-[2px]' : 'mb-[6px] border-b border-dashed border-[#c9c9c9] pb-[6px]'}>
      {children}
    </div>
  )
}

export function ItemTitle({ children }: { children: ReactNode }) {
  return <h3 className="text-[12.5px] leading-[1.25] font-semibold text-ink">{children}</h3>
}

export function Subtitle({ children }: { children: ReactNode }) {
  return <div className="text-[12.5px] leading-[1.3] font-medium text-accent">{children}</div>
}

const iconProps = { size: 10, strokeWidth: 2.2, className: 'shrink-0' }

/** Accent-coloured, underlined link. Shows the URL without its protocol. */
export function TextLink({ href, children }: { href: string; children?: ReactNode }) {
  const url = /^(https?:|mailto:|tel:)/.test(href) ? href : `https://${href}`
  return (
    <a href={url} target="_blank" rel="noreferrer" className="font-medium text-accent underline">
      {children ?? href.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
    </a>
  )
}

export function Meta({ date, location, link }: { date?: string; location?: string; link?: string }) {
  return (
    <div className="text-[9.5px] leading-[1.45] text-muted">
      {(date || location !== undefined) && (
        <div className="flex flex-wrap items-center gap-x-[14px]">
          {date && (
            <span className="flex items-center gap-[4px]">
              <Calendar {...iconProps} />
              {date}
            </span>
          )}
          {location !== undefined && (
            <span className={`flex items-center gap-[4px] ${location ? '' : 'text-[#b5b5b5]'}`}>
              <MapPin {...iconProps} />
              {location || 'Location'}
            </span>
          )}
        </div>
      )}
      {link && (
        <div className="flex items-center gap-[4px]">
          <Link {...iconProps} className="shrink-0 text-accent" />
          <TextLink href={link} />
        </div>
      )}
    </div>
  )
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-[2px] list-disc pl-[16px] text-[10.5px] leading-[1.3] marker:text-body">
      {items.map((b, i) => (
        <li key={i}>
          <Rich text={b} />
        </li>
      ))}
    </ul>
  )
}

export function Paragraph({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`text-[10.5px] leading-[1.3] ${className}`}>{children}</p>
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="border-b border-[#bdbdbd] px-[8px] pb-[3px] text-[10.5px] font-medium text-ink">{children}</span>
  )
}

export function Dots({ filled, total = 5 }: { filled: number; total?: number }) {
  return (
    <div className="flex gap-[3px]">
      {Array.from({ length: total }, (_, i) => (
        <span key={i} className={`size-[11px] rounded-full ${i < filled ? 'bg-accent' : 'bg-[#dcdcdc]'}`} />
      ))}
    </div>
  )
}

export function AwardIcon() {
  return <Award size={17} strokeWidth={2.2} className="mt-[1px] shrink-0 text-accent" />
}

export const ContactIcons = { Phone, AtSign, Link, MapPin, Calendar }
