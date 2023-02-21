import { Header } from '../components/header'
import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react'
import { Sidebar } from '../components/sidebar'
import Chart from 'react-apexcharts'

const options: ApexCharts.ApexOptions = {
    chart: {
        toolbar: {
            show: false,
        },
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
    tooltip: {
        enabled: false,
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: theme.colors.gray[600],
        },
        categories: [
            '2023-03-18T00:00:00.000Z',
            '2023-03-19T00:00:00.000Z',
            '2023-03-20T00:00:00.000Z',
            '2023-03-21T00:00:00.000Z',
            '2023-03-22T00:00:00.000Z',
            '2023-03-23T00:00:00.000Z',
            '2023-03-24T00:00:00.000Z',
        ],
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
}

const series: ApexAxisChartSeries | ApexNonAxisChartSeries = [
    {
        name: 'series one',
        data: [31, 100, 43, 10, 90, 6, 12],
    },
]

export default function DashboardPage() {
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
                        <Text fontSize={'lg'} mb={4}>
                            Total de vendas
                        </Text>

                        <Chart
                            type={'area'}
                            height={160}
                            options={options}
                            series={series}
                        />
                    </Box>

                    <Box
                        p={{ base: '6', lg: '8' }}
                        bg={'gray.800'}
                        borderRadius={8}
                    >
                        <Text fontSize={'lg'} mb={4}>
                            Total de usuários
                        </Text>

                        <Chart
                            type={'area'}
                            height={160}
                            options={options}
                            series={series}
                        />
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}
