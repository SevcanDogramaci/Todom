import { useTheme } from "@shopify/restyle";
import { TextInput, View } from "react-native";
import Text from "../../components/Text";
import Button from "../../components/Button";
import useViewModel from "./ViewModel";
import Layout from "../../components/Layout";
import StatusTagGroup from "./components/StatusTagGroup";

const CreateTodoPage = () => {
    const { detail, onCreateTodoPress, onDetailChange, isTodoCreatable } = useViewModel();
    const theme = useTheme();

    return <Layout>
        <Text variant="body">Status</Text>
        <StatusTagGroup />

        <Text variant="body">Details</Text>
        <TextInput style={theme.textVariants.input}
            placeholder="Write your todo"
            placeholderTextColor={theme.colors.inputPlaceholderPrimary}
            multiline value={detail}
            onChangeText={onDetailChange} />

        <Button text="ADD" onPress={onCreateTodoPress} disabled={isTodoCreatable} />
    </Layout>
}

export default CreateTodoPage;