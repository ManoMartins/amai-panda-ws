import { Status } from '../../@types/order/status.d'
import { WithBadge } from '../../@types/with-badge'
import { getDefaultBadge } from '../../utils/get-default-badge'

export const mapStatus: Record<keyof typeof Status, WithBadge> = {
    ...getDefaultBadge<keyof typeof Status>(Object.keys(Status)),
    WAITING_PAYMENT: {
        label: 'Aguardando pagamento',
        colorScheme: 'yellow',
    },
    DELIVERED: {
        label: 'Entregue',
        colorScheme: 'green',
    },
    IN_TRANSIT: {
        label: 'Em trânsito',
        colorScheme: 'blue',
    },
    PREPARING: {
        label: 'Preparando',
        colorScheme: 'blue',
    },
    ACCEPT_EXCHANGE_REQUEST: {
        label: 'Troca aceita',
        colorScheme: 'green',
    },
    DENY_EXCHANGE_REQUEST: {
        label: 'Troca negada',
        colorScheme: 'red',
    },
    EXCHANGE_RECEIVED: {
        label: 'Troca realizada',
        colorScheme: 'green',
    },
    EXCHANGE_REQUEST: {
        label: 'Troca solicitada',
        colorScheme: 'yellow',
    },
}
