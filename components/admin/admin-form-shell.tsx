import Link from 'next/link'
import type { ReactNode } from 'react'
import { ArrowLeft } from 'lucide-react'

type AdminFormShellProps = {
  title: string
  description: string
  backHref: string
  children: ReactNode
}

export function AdminFormShell({
  title,
  description,
  backHref,
  children,
}: AdminFormShellProps) {
  return (
    <main className="min-h-screen bg-[#f5f7fb] py-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-sm font-medium text-[#383086] transition hover:text-[#2b2467]"
        >
          <ArrowLeft className="size-4" />
          Panele dön
        </Link>

        <div className="mt-6 rounded-[28px] border border-[#e3e8f0] bg-white p-6 shadow-[0_24px_80px_rgba(32,41,72,0.08)] sm:p-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-semibold tracking-tight text-[#1f2953]">
              {title}
            </h1>
            <p className="mt-3 text-sm leading-7 text-[#667085]">
              {description}
            </p>
          </div>

          <div className="mt-8">{children}</div>
        </div>
      </div>
    </main>
  )
}
