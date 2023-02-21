import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
    showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align={'center'}>
            {showProfileData && (
                <Box mr={'4'} textAlign={'right'}>
                    <Text>Manoel Martins</Text>
                    <Text color={'gray.300'} fontSize={'sm'}>
                        mano.martins29@gmail.com
                    </Text>
                </Box>
            )}

            <Avatar
                size={'md'}
                name={'Manoel Martins'}
                src={'https://github.com/manomartins.png'}
            />
        </Flex>
    )
}
