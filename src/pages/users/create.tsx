import React from 'react'
import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    HStack,
    SimpleGrid,
    VStack,
} from '@chakra-ui/react'
import { Header } from '../../components/header'
import { Sidebar } from '../../components/sidebar'
import { Input } from '../../components/form/input'
import { Link } from 'react-router-dom'

export default function UserCreatePage() {
    return (
        <Box>
            <Header />

            <Flex w={'100%'} maxW={1480} mx={'auto'} px={'6'}>
                <Sidebar />

                <Box flex={'1'} borderRadius={8} bg={'gray.800'} p={['6', '8']}>
                    <Heading size={'lg'} fontWeight={'normal'}>
                        Criar usuário
                    </Heading>

                    <Divider my={'6'} borderColor={'gray.700'} />

                    <VStack spacing={['6', '8']}>
                        <SimpleGrid
                            minChildWidth={'240px'}
                            spacing={'8'}
                            w={'100%'}
                        >
                            <Input name={'name'} label={'Nome'} />
                            <Input
                                name={'email'}
                                type={'email'}
                                label={'E-mail'}
                            />
                        </SimpleGrid>
                    </VStack>

                    <Flex my={'8'} justify={'flex-end'}>
                        <HStack spacing={'4'}>
                            <Link to={'/users'}>
                                <Button>Cancelar</Button>
                            </Link>
                            <Button colorScheme={'pink'}>Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}
