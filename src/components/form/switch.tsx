import {
    FormControl,
    FormLabel,
    Switch as ChakraSwitch,
    SwitchProps as ChakraSwitchProps,
} from '@chakra-ui/react'

interface SwitchProps extends ChakraSwitchProps {
    name: string
    label?: string
}

export function Switch({ name, label, ...rest }: SwitchProps) {
    return (
        <FormControl display="flex" alignItems="center">
            {label && (
                <FormLabel htmlFor={name} mb={0}>
                    {label}
                </FormLabel>
            )}

            <ChakraSwitch
                id={name}
                colorScheme={'pink'}
                size={'lg'}
                {...rest}
            />
        </FormControl>
    )
}
