import { Status } from '../../@types/coupon/status.d'
import { WithBadge } from '../../@types/with-badge'
import { getDefaultBadge } from '../../utils/get-default-badge'

export const mapStatus: Record<keyof typeof Status, WithBadge> = {
    ...getDefaultBadge<keyof typeof Status>(Object.keys(Status)),
    NEW: {
        label: 'Novo',
        colorScheme: 'green',
    },
    USED: {
        label: 'Usado',
        colorScheme: 'red',
    },
    AWAITING_PERMISSION: {
        label: 'Aguardando permissão',
        colorScheme: 'blue',
    },
}
