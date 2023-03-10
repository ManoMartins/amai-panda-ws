import { Box, Button, Stack } from '@chakra-ui/react'
import { PaginationItem } from './pagination-item'

export function Pagination() {
    return (
        <Stack
            mt={'8'}
            direction={['column', 'row']}
            align={'center'}
            justify={'space-between'}
        >
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>

            <Stack direction={'row'} spacing={'2'}>
                <PaginationItem number={1} isCurrent />
                <PaginationItem number={2} />
                <PaginationItem number={3} />
            </Stack>
        </Stack>
    )
}
