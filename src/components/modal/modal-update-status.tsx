import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
} from '@chakra-ui/react'
import { useCallback, useRef } from 'react'
import { Status } from '../../@types/order/status.d'
import { useUpdateStatus } from '../../services/order/mutations/use-update-status'

interface ModalUpdateStatusProps {
    id: string
    isOpen: boolean
    onClose: () => void
}

export function ModalUpdateStatus({
    id,
    isOpen,
    onClose,
}: ModalUpdateStatusProps) {
    const updateStatus = useUpdateStatus()

    const ref = useRef<HTMLSelectElement | null>(null)

    const handleUpdate = useCallback(async () => {
        if (!ref.current) return

        try {
            await updateStatus.mutateAsync({
                id,
                status: ref.current.value as Status,
            })
            onClose()
        } catch (error) {
            console.log('ERROR: ', error)
        }
    }, [id])

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Atualizar status</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Select id={'status'} ref={ref}>
                        <option value={Status.WAITING_PAYMENT}>
                            Aguardando pagamento
                        </option>
                        <option value={Status.PREPARING}>Preparando</option>
                        <option value={Status.IN_TRANSIT}>Em trânsito</option>
                        <option value={Status.DELIVERED}>Entregue</option>
                    </Select>
                </ModalBody>

                <ModalFooter>
                    <Button variant="ghost" mr={3} onClick={onClose}>
                        Fechar
                    </Button>
                    <Button
                        data-test={'update'}
                        colorScheme="pink"
                        onClick={handleUpdate}
                        isLoading={updateStatus.isLoading}
                    >
                        Atualizar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
