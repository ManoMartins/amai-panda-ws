import { Stack } from '@chakra-ui/react'
import { NavSection } from './nav-section'
import { NavLink } from './nav-link'
import {
    LayoutDashboardIcon,
    PackageIcon,
    ShoppingBagIcon,
    TicketIcon,
    UsersIcon,
} from 'lucide-react'

export function NavSidebar() {
    return (
        <Stack spacing={'12'} align={'flex-start'}>
            <NavSection title={'GERAL'}>
                <NavLink href={'/dashboard'} icon={LayoutDashboardIcon}>
                    Dashboard
                </NavLink>
                <NavLink href={'/users'} icon={UsersIcon}>
                    Usuários
                </NavLink>
                <NavLink href={'/orders'} icon={ShoppingBagIcon}>
                    Pedidos
                </NavLink>
                <NavLink href={'/products'} icon={PackageIcon}>
                    Produtos
                </NavLink>
                <NavLink href={'/coupons'} icon={TicketIcon}>
                    Cupons
                </NavLink>
            </NavSection>
        </Stack>
    )
}
