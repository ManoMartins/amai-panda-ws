import React from 'react'
import {
    Badge,
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
import { useOrders } from '../../queries/orders/use-orders'
import dayjs from 'dayjs'
import { formatCurrency } from '../../utils/format-currency'

export default function OrderListPage() {
    const { data } = useOrders()

    return (
        <Box>
            <Header />

            <Flex w={'100%'} maxW={1480} mx={'auto'} px={'6'}>
                <Sidebar />

                <Box flex={'1'} borderRadius={8} bg={'gray.800'} p={'8'}>
                    <Flex mb={'8'} justify={'space-between'} align={'center'}>
                        <Heading size={'lg'} fontWeight={'normal'}>
                            Pedidos
                        </Heading>
                    </Flex>

                    <Table colorScheme={'whiteAlpha'}>
                        <Thead>
                            <Tr>
                                <Th>ID do pedido</Th>
                                <Th>Quantidade</Th>
                                <Th>Valor total</Th>
                                <Th>Data da compra</Th>
                                <Th>Status</Th>
                                <Th w={8} />
                            </Tr>
                        </Thead>

                        <Tbody>
                            {data?.data.map((order) => (
                                <Tr key={order.id}>
                                    <Td>
                                        <Text maxW={'120px'} isTruncated>
                                            {order.id}
                                        </Text>
                                    </Td>

                                    <Td>
                                        {order.orderItems?.reduce(
                                            (acc, cur) => acc + cur.quantity,
                                            0
                                        ) || 0}
                                    </Td>

                                    <Td>
                                        {formatCurrency(order.totalInCents)}
                                    </Td>

                                    <Td>
                                        {dayjs(order.createdAt).format(
                                            'MMMM DD[,] YYYY'
                                        )}
                                    </Td>

                                    <Td data-test={'status'}>
                                        <Badge
                                            colorScheme={
                                                order.status.colorScheme
                                            }
                                        >
                                            {order.status.label}
                                        </Badge>
                                    </Td>

                                    <Td>
                                        <Link to={`/orders/${order.id}`}>
                                            <Button
                                                as={'a'}
                                                size={'sm'}
                                                fontSize={'sm'}
                                                colorScheme={'pink'}
                                                variant={'outline'}
                                                data-test={'more-details'}
                                            >
                                                Mais detalhes
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
