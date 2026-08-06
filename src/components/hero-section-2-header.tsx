'use client'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { X } from 'lucide-react'
import React from 'react'

const menuItems = [
    { name: 'Work', href: '/projects' },
    { name: 'About', href: '/#about' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Contact', href: '/#contact' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)

    React.useEffect(() => {
        if (!menuState) return

        const mediaQuery = window.matchMedia('(max-width: 1023px)')
        const updateOverflow = () => {
            document.documentElement.classList.toggle('overflow-hidden', mediaQuery.matches)
        }
        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setMenuState(false)
        }

        updateOverflow()
        mediaQuery.addEventListener('change', updateOverflow)
        window.addEventListener('keydown', closeOnEscape)

        return () => {
            mediaQuery.removeEventListener('change', updateOverflow)
            window.removeEventListener('keydown', closeOnEscape)
            document.documentElement.classList.remove('overflow-hidden')
        }
    }, [menuState])

    return (
        <header>
            <nav className="bg-paper/85 fixed top-0 z-40 w-full border-b border-ink/15 backdrop-blur">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="flex items-center justify-between gap-12 py-4 lg:py-5">
                        <Link
                            href="/"
                            aria-label="goto home"
                            onClick={() => setMenuState(false)}
                            className="relative z-50 flex items-center"
                        >
                            <Logo />
                        </Link>

                        <ul className="hidden gap-8 text-sm lg:flex">
                            {menuItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="nav-link text-ink/60"
                                    >
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={() => setMenuState(!menuState)}
                            aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                            aria-expanded={menuState}
                            aria-controls="mobile-menu"
                            className="relative z-50 block size-6 cursor-pointer lg:hidden"
                        >
                            <div
                                className={`m-auto flex size-5 flex-col items-center justify-center gap-[7px] transition duration-200 ${menuState ? 'rotate-180 scale-0 opacity-0' : ''}`}
                            >
                                <span className="bg-ink h-0.5 w-full rounded-full" />
                                <span className="bg-ink h-0.5 w-full rounded-full" />
                            </div>

                            <X
                                className={`absolute inset-0 m-auto size-6 transition duration-200 ${menuState ? 'rotate-0 scale-100 opacity-100' : '-rotate-180 scale-0 opacity-0'}`}
                            />
                        </button>
                    </div>
                </div>
            </nav>

            <div
                id="mobile-menu"
                aria-hidden={!menuState}
                className={`bg-paper fixed inset-0 z-30 flex flex-col justify-between px-6 pb-12 pt-28 transition-opacity duration-300 lg:hidden ${menuState ? 'opacity-100' : 'pointer-events-none invisible opacity-0'}`}
            >
                <nav>
                    <ul className="border-t border-ink/15">
                        {menuItems.map((item, index) => (
                            <li
                                key={item.name}
                                className="border-b border-ink/15"
                            >
                                <Link
                                    href={item.href}
                                    onClick={() => setMenuState(false)}
                                    className="group flex items-baseline gap-4 py-5 transition hover:text-orange"
                                >
                                    <span className="eyebrow group-hover:text-orange">0{index + 1}</span>
                                    <span className="font-display text-5xl leading-none tracking-[-.04em] sm:text-6xl">{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="space-y-6">
                    <div className="flex items-center gap-3 text-sm font-medium text-ink/60">
                        <span className="status-dot" /> Available for selected projects
                    </div>
                    <Link
                        href="/#contact"
                        onClick={() => setMenuState(false)}
                        className="bg-ink text-paper inline-flex rounded-full px-6 py-3 text-sm font-semibold transition hover:bg-orange hover:text-ink"
                    >
                        Let&apos;s talk
                    </Link>
                </div>
            </div>
        </header>
    )
}
