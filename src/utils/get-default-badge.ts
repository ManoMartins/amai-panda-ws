import { Status } from '../@types/coupon/status'
import { WithBadge } from '../@types/with-badge'

export function getDefaultBadge<T extends string>(value: string[]) {
    return value.reduce((acc, cur) => {
        return {
            ...acc,
            [cur]: {
                label: cur,
                colorScheme: 'pink',
            },
        }
    }, {} as Record<T, WithBadge>)
}
