import { TouchableOpacity } from "react-native";
import Tag, { TagProps } from "./Tag"

interface SelectableTagProps extends TagProps {  
    selected?: boolean
    onPress: () => void
}

const SelectableTag = (props: SelectableTagProps) => {
    const bordered = props.selected
    return <TouchableOpacity onPress={props.onPress}>
        <Tag bordered={bordered} {...props}  />
    </TouchableOpacity>
}

export default SelectableTag;