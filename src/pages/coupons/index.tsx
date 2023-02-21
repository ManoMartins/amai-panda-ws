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
import { useListCoupons } from '../../queries/coupons/use-list-coupons'
import dayjs from 'dayjs'
import { formatCurrency } from '../../utils/format-currency'

export default function CouponListPage() {
    const { data } = useListCoupons()

    return (
        <Box>
            <Header />

            <Flex w={'100%'} maxW={1480} mx={'auto'} px={'6'}>
                <Sidebar />

                <Box flex={'1'} borderRadius={8} bg={'gray.800'} p={'8'}>
                    <Flex mb={'8'} justify={'space-between'} align={'center'}>
                        <Heading size={'lg'} fontWeight={'normal'}>
                            Cupons
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
                                <Th>Código do voucher</Th>
                                <Th>Valor</Th>
                                <Th>Data de cadastro</Th>
                                <Th>Status</Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            {data?.data.map((coupon) => (
                                <Tr key={coupon.id}>
                                    <Td>{coupon.voucherCode}</Td>

                                    <Td>{formatCurrency(coupon.amount)}</Td>

                                    <Td>
                                        {dayjs(coupon.createdAt).format(
                                            'MMMM DD[,] YYYY'
                                        )}
                                    </Td>

                                    <Td>
                                        <Badge
                                            colorScheme={
                                                coupon.status.colorScheme
                                            }
                                        >
                                            {coupon.status.label}
                                        </Badge>
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
