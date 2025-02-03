import { TouchableOpacity } from "react-native"
import { Theme } from "../../infrastructure/theme/Theme"
import { useTheme } from "@shopify/restyle"
import Text from "./Text"

interface ButtonProps {
    text: string
    disabled?: boolean
    onPress: () => void
}

const Button = (props: ButtonProps) => {
    const theme = useTheme<Theme>();
    const style =[theme.buttonVariants.defaults, props.disabled && theme.buttonVariants.disabled ];

    return <TouchableOpacity disabled={props.disabled} style={style} onPress={props.onPress}>
        <Text variant="button">{props.text}</Text>
    </TouchableOpacity>
}

export default Button;