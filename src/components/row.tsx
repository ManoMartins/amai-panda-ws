import { Flex, Text } from '@chakra-ui/react'
import { isValidElement, ReactNode } from 'react'

interface RowProps {
    label: string
    children: ReactNode
}

export function Row({ label, children }: RowProps) {
    return (
        <Flex direction={['column', 'row']}>
            <Text as={'strong'} minW={'200px'}>
                {label}:
            </Text>

            {!isValidElement(children) ? <Text>{children}</Text> : children}
        </Flex>
    )
}
