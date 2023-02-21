import { Link, LinkProps, useLocation } from 'react-router-dom'
import { cloneElement, ReactElement } from 'react'

interface ActiveLink extends LinkProps {
    children: ReactElement
    shouldMatchExactHref?: boolean
}

export function ActiveLink({
    children,
    shouldMatchExactHref = false,
    ...rest
}: ActiveLink) {
    let isActive = false

    const { pathname } = useLocation()

    if (shouldMatchExactHref && pathname === rest.to) {
        isActive = true
    }

    if (!shouldMatchExactHref && pathname.startsWith(String(rest.to))) {
        isActive = true
    }

    return (
        <Link {...rest}>
            {cloneElement(children, {
                color: isActive ? 'pink.400' : 'gray.50',
            })}
        </Link>
    )
}
