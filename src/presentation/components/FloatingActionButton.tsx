import { useTheme } from "@shopify/restyle"
import { TouchableOpacity } from "react-native"

interface FloatingActionButtonProps {
    icon: React.ReactNode // TODO: check icon type
    onPress: () => void
}

const FloatingActionButton = (props: FloatingActionButtonProps) => {
    const theme = useTheme();

    return <TouchableOpacity style={theme.buttonVariants.fab} onPress={props.onPress} testID="fab-id">
        {props.icon}
    </TouchableOpacity>
}

export default FloatingActionButton;