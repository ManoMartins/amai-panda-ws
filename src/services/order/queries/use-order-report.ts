import { formatISO, isSameDay } from 'date-fns'
import { useQuery } from 'react-query'
import { api } from '../../api'

interface InputOrderReport {
    startDate: string
    endDate: string
}

interface GetOrderReportReturn {
    series: Array<{ name: string; data: number[] }>
    categories: string[]
}

function getDates(startDate: Date, stopDate: Date) {
    const dateArray = new Array()
    let currentDate = startDate

    while (currentDate <= stopDate) {
        dateArray.push(new Date(currentDate))
        currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1))
    }
    return dateArray
}

async function getOrderReport(
    input: InputOrderReport
): Promise<GetOrderReportReturn> {
    const response = await api.get(
        `/orders/report?startDate=${input.startDate}&endDate=${input.endDate}`
    )

    const startDate = response.data.data.startDate
    const endDate = response.data.data.endDate

    const days = getDates(new Date(startDate), new Date(endDate))

    return {
        series: response.data.data.series?.map((item: any) => {
            return {
                name: item.categoryName,
                data: days.map((day) => {
                    const orders = item.orders.filter((i: any) => {
                        return isSameDay(new Date(day), new Date(i.createdAt))
                    })

                    if (orders.length === 0) return 0

                    return orders.reduce(
                        (acc: number, cur: { priceInCents: any }) =>
                            acc + cur.priceInCents,
                        0
                    )
                }),
            }
        }),
        categories: days.map((day) => formatISO(day)),
    }
}

export function useOrderReport(input: InputOrderReport) {
    return useQuery(['order-report', input.startDate, input.endDate], () =>
        getOrderReport(input)
    )
}
