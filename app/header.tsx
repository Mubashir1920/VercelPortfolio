'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { motion } from 'motion/react'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        {/* <AnimatedName /> */}
        <div className='overflow-hidden' >
          <motion.div
            initial={{ opacity: 0, y: 140 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link href='/' className="group primary-heading relative cursor-pointer overflow-hidden h-fit flex flex-col [perspective:800px]">
              <span
                className="font-semibold group-hover:blur-[2px] origin-bottom transition ease-in-out duration-300 blur-0 group-hover:translate-y-[-100%] ">
                MUHAMMAD MUBASHIR
              </span>
              <span
                className="font-semibold absolute origin-top transition ease-in-out duration-300 translate-y-full  group-hover:translate-y-0 ">
                MUHAMMAD MUBASHIR
              </span>
            </Link>
          </motion.div>
        </div>

        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-900 font-medium dark:text-zinc-300 "
          delay={0.5}
        >
          Full Stack Developer | Next.js | MERN | React.js
        </TextEffect>
      </div>
    </header>
  )
}
