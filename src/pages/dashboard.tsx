import DatePicker from 'react-datepicker'

import { Header } from '../components/header'
import {
    Box,
    Flex,
    SimpleGrid,
    Spinner,
    HStack,
    Text,
    theme,
} from '@chakra-ui/react'
import { Sidebar } from '../components/sidebar'
import Chart from 'react-apexcharts'
import { useOrderReport } from '../services/order/queries/use-order-report'
import { formatCurrency } from '../utils/format-currency'
import React, { useState } from 'react'
import dayjs from 'dayjs'

const series: ApexAxisChartSeries | ApexNonAxisChartSeries = [
    {
        name: 'series one',
        data: [31, 100, 43, 10, 90, 6, 12],
    },
    {
        name: 'series two',
        data: [11, 32, 45, 32, 34, 52, 41],
    },
]

export default function DashboardPage() {
    const [startDate, setStartDate] = useState<Date | null>(
        dayjs().month(1).toDate()
    )
    const [endDate, setEndDate] = useState<Date | null>(dayjs().toDate())

    const orderReport = useOrderReport({
        startDate: dayjs(startDate || dayjs().toDate()).format('YYYY-MM-DD'),
        endDate: dayjs(endDate || dayjs().toDate()).format('YYYY-MM-DD'),
    })

    const options: ApexCharts.ApexOptions = {
        chart: {
            height: 140,
            zoom: {
                enabled: false,
            },
            foreColor: theme.colors.gray[500],
        },
        grid: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            type: 'datetime',
            axisBorder: {
                color: theme.colors.gray[600],
            },
            categories: orderReport.data?.categories,
        },
        yaxis: {
            labels: {
                formatter(val: number): string {
                    return formatCurrency(val)
                },
            },
        },
        fill: {
            opacity: 0.3,
            type: 'gradient',
            gradient: {
                shade: 'dark',
                opacityFrom: 0.7,
                opacityTo: 0.3,
            },
        },
        tooltip: {
            theme: 'dark',
            x: {
                format: 'dd/MM/yy',
            },
            y: {
                formatter(val: number): string {
                    return formatCurrency(val)
                },
            },
        },
    }

    return (
        <Flex direction={'column'} h={'100vh'}>
            <Header />

            <Flex w={'100%'} maxW={1480} mx={'auto'} px={'6'}>
                <Sidebar />

                <SimpleGrid
                    flex={1}
                    gap={'4'}
                    minChildWidth={'320px'}
                    alignItems={'flex-start'}
                >
                    <Box
                        p={{ base: '6', lg: '8' }}
                        bg={'gray.800'}
                        borderRadius={8}
                    >
                        <HStack align={'center'} justify={'space-between'}>
                            <Text fontSize={'lg'} mb={4} m={0}>
                                Total de vendas
                            </Text>

                            <HStack>
                                <DatePicker
                                    dateFormat="dd/MM/yyyy"
                                    selected={startDate}
                                    onChange={(date) =>
                                        setStartDate(
                                            date && dayjs(date).toDate()
                                        )
                                    }
                                    selectsStart
                                    startDate={startDate}
                                    endDate={endDate}
                                    maxDate={endDate}
                                    required
                                />
                                <DatePicker
                                    dateFormat="dd/MM/yyyy"
                                    selected={endDate}
                                    onChange={(date) =>
                                        setEndDate(date && dayjs(date).toDate())
                                    }
                                    selectsEnd
                                    startDate={startDate}
                                    endDate={endDate}
                                    minDate={startDate}
                                    maxDate={new Date()}
                                    required
                                />
                            </HStack>
                        </HStack>

                        {orderReport.isLoading ? (
                            <Text>
                                <Spinner /> Carregando...
                            </Text>
                        ) : !orderReport.data ? (
                            <Text>Não foi possível encontrar o relatorio.</Text>
                        ) : (
                            <Chart
                                type={'area'}
                                height={200}
                                options={options}
                                series={orderReport.data?.series as any}
                            />
                        )}
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}
