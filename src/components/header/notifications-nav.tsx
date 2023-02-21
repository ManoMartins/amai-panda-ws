import { HStack, Icon } from '@chakra-ui/react'
import { BellIcon, UserPlusIcon } from 'lucide-react'

export function NotificationsNav() {
    return (
        <HStack
            spacing={['6', '8']}
            mx={['6', '8']}
            pr={['6', '8']}
            py={'1'}
            color={'gray.300'}
            borderRightWidth={1}
            borderColor={'gray.700'}
        >
            <Icon as={BellIcon} fontSize={20} />
            <Icon as={UserPlusIcon} fontSize={20} />
        </HStack>
    )
}
