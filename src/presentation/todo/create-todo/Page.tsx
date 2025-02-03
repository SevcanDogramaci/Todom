import { useTheme } from "@shopify/restyle";
import { TextInput, View } from "react-native";
import Text from "../../components/Text";
import { TagType } from "../../components/Tag";
import Button from "../../components/Button";
import SelectableTag from "../../components/SelectableTag";
import useViewModel from "./ViewModel";
import Status from "../../../domain/models/Status";

const CreateTodoPage = () => {
    const { detail, status, onCreateTodoPress, onDetailChange, onStatusChange, isTagSelected, isCreateTodoButtonActive } = useViewModel();
    const theme = useTheme();

    return <View style={theme.containerVariants.page}>
        <Text variant="body">Status</Text>
        <View style={{ flexDirection: 'row', flex:1,  justifyContent: 'space-around', marginVertical: 20 }}>
            <SelectableTag selected={isTagSelected(Status.PENDING)} text={"pending"} type={TagType.PRIMARY} onPress={() => onStatusChange(Status.PENDING)} />
            <SelectableTag selected={isTagSelected(Status.IN_PROGRESS)} text={"in progress"} type={TagType.INFO} onPress={() => onStatusChange(Status.IN_PROGRESS)} />
            <SelectableTag selected={isTagSelected(Status.COMPLETED)} text={"completed"} type={TagType.SUCCESS} onPress={() => onStatusChange(Status.COMPLETED)} />
        </View>

        <Text variant="body">Details</Text>
        <TextInput style={theme.textVariants.input} placeholder="Write your todo" placeholderTextColor={theme.colors.inputPlaceholderPrimary}
            multiline value={detail} onChangeText={onDetailChange} />

        <Button text="ADD" onPress={onCreateTodoPress} disabled={isCreateTodoButtonActive} />
    </View>
}

export default CreateTodoPage;