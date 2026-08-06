import { cn } from '@/utils'

/**
 * Wordmark: lowercase "studenic" set in the display face with the same tight
 * tracking as the section titles, closed by the mint accent dot.
 * `uniColor` collapses the accent into the surrounding text colour.
 */
export const Logo = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <span
            className={cn(
                'text-ink font-display inline-flex select-none items-baseline text-2xl font-medium leading-none tracking-[-.06em]',
                className
            )}
        >
            studenic
            <span className={cn('ml-px', uniColor ? 'text-current' : 'text-orange')}>.</span>
        </span>
    )
}

/**
 * Compact monogram for tight spots (footer, favicons, mobile bars).
 */
export const LogoIcon = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <span
            className={cn(
                'text-ink font-display inline-flex select-none items-baseline text-2xl font-medium leading-none tracking-[-.08em]',
                className
            )}
        >
            ms
            <span className={cn('ml-px', uniColor ? 'text-current' : 'text-orange')}>.</span>
        </span>
    )
}
