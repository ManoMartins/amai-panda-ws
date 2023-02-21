import React from 'react'
import {
    Box,
    Button,
    Flex,
    Heading,
    Icon,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
} from '@chakra-ui/react'
import { Header } from '../../components/header'
import { Sidebar } from '../../components/sidebar'
import { PencilIcon, PlusIcon } from 'lucide-react'
import { Pagination } from '../../components/pagination'
import { Link } from 'react-router-dom'
import { useListUsers } from '../../queries/users/use-list-users'
import dayjs from 'dayjs'

export default function UserListPage() {
    const { data } = useListUsers()

    return (
        <Box>
            <Header />

            <Flex w={'100%'} maxW={1480} mx={'auto'} px={'6'}>
                <Sidebar />

                <Box flex={'1'} borderRadius={8} bg={'gray.800'} p={'8'}>
                    <Flex mb={'8'} justify={'space-between'} align={'center'}>
                        <Heading size={'lg'} fontWeight={'normal'}>
                            Usuários
                        </Heading>

                        <Link to={'/users/create'}>
                            <Button
                                as={'a'}
                                size={'sm'}
                                fontSize={'sm'}
                                colorScheme={'pink'}
                                leftIcon={
                                    <Icon as={PlusIcon} fontSize={'20'} />
                                }
                            >
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>

                    <Table colorScheme={'whiteAlpha'}>
                        <Thead>
                            <Tr>
                                <Th>Usuário</Th>
                                <Th>Data de cadastro</Th>
                                <Th w={8} />
                            </Tr>
                        </Thead>

                        <Tbody>
                            {data?.data.map((user) => (
                                <Tr key={user.id}>
                                    <Td>
                                        <Box>
                                            <Text fontWeight={'bold'}>
                                                {user.name}
                                            </Text>
                                            <Text
                                                fontSize={'sm'}
                                                color={'gray.300'}
                                            >
                                                {user.email}
                                            </Text>
                                        </Box>
                                    </Td>

                                    <Td>
                                        {dayjs(user.createdAt).format(
                                            'MMMM DD[,] YYYY'
                                        )}
                                    </Td>

                                    <Td>
                                        <Button
                                            as={'a'}
                                            size={'sm'}
                                            fontSize={'sm'}
                                            colorScheme={'pink'}
                                            variant={'outline'}
                                            leftIcon={<Icon as={PencilIcon} />}
                                        >
                                            Editar
                                        </Button>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>

                    <Pagination />
                </Box>
            </Flex>
        </Box>
    )
}
