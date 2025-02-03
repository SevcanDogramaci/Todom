import { View } from "react-native";
import { useTheme } from "@shopify/restyle";
import useViewModel from '../ViewModel';
import SelectableTag from "../../../components/SelectableTag";
import Status from "../../../../domain/models/Status";
import { TagType } from "../../../components/Tag";

const statuses = [
    { status: Status.PENDING, type: TagType.PRIMARY },
    { status: Status.IN_PROGRESS, type: TagType.INFO },
    { status: Status.COMPLETED, type: TagType.SUCCESS },
];

const StatusTagGroup = () => {
    const theme = useTheme();
    const { onStatusChange, isTagSelected } = useViewModel();

    return (
        <View style={theme.containerVariants.tagGroup}>
            {statuses.map(({ status, type }) => (
                <SelectableTag
                    key={status}
                    text={status}
                    type={type}
                    selected={isTagSelected(status)}
                    onPress={() => onStatusChange(status)}
                />
            ))}
        </View>
    );
}

export default StatusTagGroup;