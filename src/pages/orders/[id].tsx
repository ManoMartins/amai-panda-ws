import React, { useCallback } from 'react'
import { useParams } from 'react-router'
import {
    Box,
    Flex,
    Text,
    Button,
    Divider,
    Heading,
    useDisclosure,
    Spinner,
    Stack,
    ButtonGroup,
} from '@chakra-ui/react'

import { Row } from '../../components/row'
import { Header } from '../../components/header'
import { Sidebar } from '../../components/sidebar'
import { ModalUpdateStatus } from '../../components/modal/modal-update-status'

import { formatCurrency } from '../../utils/format-currency'
import { useOrder } from '../../services/order/queries/use-order'
import { Status } from '../../@types/order/status.d'
import { useDenyExchangeRequestOrder } from '../../services/order/mutations/use-deny-exchange-request-order'
import { useAcceptExchangeRequestOrder } from '../../services/order/mutations/use-accept-exchange-request-order'

export default function OrderDetailsPage() {
    const { id } = useParams()

    const { data, isLoading } = useOrder(id)
    const denyExchangeRequestOrder = useDenyExchangeRequestOrder()
    const acceptExchangeRequestOrder = useAcceptExchangeRequestOrder()

    const disclosure = useDisclosure()

    const handleAcceptExchangeRequest = useCallback(async () => {
        if (!id) return

        try {
            await acceptExchangeRequestOrder.mutateAsync({
                id,
                voucherCode: '',
            })
        } catch (error) {
            console.log(error)
        }
    }, [id, acceptExchangeRequestOrder])

    const handleDenyExchangeRequest = useCallback(async () => {
        if (!id) return

        try {
            await denyExchangeRequestOrder.mutateAsync({ id, voucherCode: '' })
        } catch (error) {
            console.log(error)
        }
    }, [id, denyExchangeRequestOrder])

    return (
        <Box>
            {id && (
                <ModalUpdateStatus
                    id={id}
                    isOpen={disclosure.isOpen}
                    onClose={disclosure.onClose}
                />
            )}

            <Header />

            <Flex w={'100%'} maxW={1480} mx={'auto'} px={'6'}>
                <Sidebar />

                {isLoading ? (
                    <Spinner />
                ) : !data ? (
                    <Text>Não encontramos nada.</Text>
                ) : (
                    <Box
                        flex={'1'}
                        borderRadius={8}
                        bg={'gray.800'}
                        p={['6', '8']}
                    >
                        <Heading size={'lg'} fontWeight={'normal'}>
                            Detalhes do pedido
                        </Heading>

                        <Divider my={'6'} borderColor={'gray.700'} />

                        <Stack>
                            <Row label={'ID'}>#{data.data.id}</Row>
                            <Row label={'Status'}>
                                {data.data.statusText.label}

                                {data.data.status ===
                                Status.EXCHANGE_REQUEST ? (
                                    <ButtonGroup
                                        ml={'4'}
                                        size={'xs'}
                                        colorScheme={'pink'}
                                    >
                                        <Button>Aceitar</Button>
                                        <Button variant={'outline'}>
                                            Recusar
                                        </Button>
                                    </ButtonGroup>
                                ) : (
                                    <Button
                                        ml={2}
                                        size={'xs'}
                                        variant={'ghost'}
                                        colorScheme={'pink'}
                                        onClick={disclosure.onOpen}
                                    >
                                        Alterar status
                                    </Button>
                                )}
                            </Row>
                            <Row label={'Nome do cliente'}>
                                {data.data.user.name}
                            </Row>
                            <Row label={'E-mail do cliente'}>
                                {data.data.user.email}
                            </Row>
                        </Stack>

                        <Divider my={'6'} borderColor={'gray.700'} />

                        <Stack>
                            <Row label={'Logradouro'}>
                                {data.data.address.street}{' '}
                                {data.data.address.number}
                            </Row>
                            <Row label={'Bairro'}>
                                {data.data.address.neighborhood}
                            </Row>
                            {/*<Row label={'Complemento'}>{data.data.address.com}</Row>*/}
                            <Row label={'Cidade'}>{data.data.address.city}</Row>
                            <Row label={'Estado'}>
                                {data.data.address.state}
                            </Row>
                            <Row label={'CEP'}>{data.data.address.zipCode}</Row>
                        </Stack>

                        <Divider my={'6'} borderColor={'gray.700'} />

                        <Stack>
                            <Row label={'Produtos'}>
                                {data.data.orderItems.map((orderItem) => (
                                    <Text>
                                        {orderItem.product.name} (
                                        {orderItem.quantity})
                                    </Text>
                                ))}
                            </Row>

                            <Row label={'Total'}>
                                {formatCurrency(data.data.totalInCents)}
                            </Row>
                        </Stack>
                    </Box>
                )}
            </Flex>
        </Box>
    )
}
