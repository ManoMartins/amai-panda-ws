import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { Logo } from './logo'
import { SearchBox } from './search-box'
import { Profile } from './profile'
import { NotificationsNav } from './notifications-nav'
import { useSidebarDrawer } from '../../contexts/sidebar-drawer-context'
import { MenuIcon } from 'lucide-react'

export function Header() {
    const { onOpen } = useSidebarDrawer()
    const isWideVersion = useBreakpointValue({ base: false, lg: true })

    return (
        <Flex
            as={'header'}
            w={'100%'}
            maxW={1480}
            h={'20'}
            mx={'auto'}
            mt={'4'}
            px={'6'}
            align={'center'}
        >
            {!isWideVersion && (
                <IconButton
                    aria-label={'Abre a navegação'}
                    icon={<Icon as={MenuIcon} alignSelf={'center'} />}
                    fontSize={'24'}
                    variant={'unstyled'}
                    onClick={onOpen}
                    mr={'2'}
                    alignSelf={'center'}
                    color={'gray.300'}
                />
            )}

            <Logo />

            {isWideVersion && <SearchBox />}

            <Flex align={'center'} ml={'auto'}>
                <NotificationsNav />

                <Profile showProfileData={isWideVersion} />
            </Flex>
        </Flex>
    )
}
