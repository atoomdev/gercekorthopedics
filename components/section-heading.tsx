type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignment =
    align === 'center'
      ? 'mx-auto max-w-3xl text-center'
      : 'max-w-3xl text-left'

  return (
    <div className={alignment}>
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.85rem]">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
        {description}
      </p>
    </div>
  )
}
