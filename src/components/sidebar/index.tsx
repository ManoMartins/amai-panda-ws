import {
    Box,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    useBreakpointValue,
} from '@chakra-ui/react'

import { NavSidebar } from './nav-sidebar'
import { useSidebarDrawer } from '../../contexts/sidebar-drawer-context'

export function Sidebar() {
    const { isOpen, onClose } = useSidebarDrawer()
    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false,
    })

    if (isDrawerSidebar) {
        return (
            <Drawer isOpen={isOpen} placement={'left'} onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent bg={'gray.800'} p={'4'}>
                        <DrawerCloseButton mt={'6'} />

                        <DrawerHeader>Navegação</DrawerHeader>

                        <DrawerBody>
                            <NavSidebar />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        )
    }

    return (
        <Box as={'aside'} w={'64'} mr={'8'}>
            <NavSidebar />
        </Box>
    )
}
