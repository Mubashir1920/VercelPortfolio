'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Muhammad Mubashir
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-300 "
          delay={0.5}
        >
          Full Stack Developer | Next.js | MERN Stack | React.js | Wordpress Expert
        </TextEffect>
      </div>
    </header>
  )
}
