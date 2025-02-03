import { useTheme } from '@shopify/restyle';
import React, { PropsWithChildren } from 'react';
import { ScrollView } from 'react-native';

const Layout = (props: PropsWithChildren) => {
    const theme = useTheme();

    return <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ backgroundColor: theme.colors.mainBackground }}
        contentContainerStyle={theme.containerVariants.page}>
        {props.children}
    </ScrollView>
}

export default Layout;
