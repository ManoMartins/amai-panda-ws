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
import { useListProducts } from '../../queries/products/use-list-products'
import dayjs from 'dayjs'
import { formatCurrency } from '../../utils/format-currency'

export default function ProductListPage() {
    const { data } = useListProducts()

    return (
        <Box>
            <Header />

            <Flex w={'100%'} maxW={1480} mx={'auto'} px={'6'}>
                <Sidebar />

                <Box flex={'1'} borderRadius={8} bg={'gray.800'} p={'8'}>
                    <Flex mb={'8'} justify={'space-between'} align={'center'}>
                        <Heading size={'lg'} fontWeight={'normal'}>
                            Produtos
                        </Heading>

                        <Link to={'/products/create'}>
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
                                <Th>Nome</Th>
                                <Th>Descrição</Th>
                                <Th>Preço</Th>
                                <Th>Estoque</Th>
                                <Th>Data de cadastro</Th>
                                <Th w={8} />
                            </Tr>
                        </Thead>

                        <Tbody>
                            {data?.data.map((product) => (
                                <Tr key={product.id}>
                                    <Td>{product.name}</Td>

                                    <Td>{product.description}</Td>

                                    <Td>
                                        {formatCurrency(product.priceInCents)}
                                    </Td>

                                    <Td>{product.quantity}</Td>

                                    <Td>
                                        {dayjs(product.createdAt).format(
                                            'MMMM DD[,] YYYY'
                                        )}
                                    </Td>

                                    <Td>
                                        <Link to={`/products/${product.id}`}>
                                            <Button
                                                as={'a'}
                                                size={'sm'}
                                                fontSize={'sm'}
                                                colorScheme={'pink'}
                                                variant={'outline'}
                                                leftIcon={
                                                    <Icon as={PencilIcon} />
                                                }
                                            >
                                                Editar
                                            </Button>
                                        </Link>
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
