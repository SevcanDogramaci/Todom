import { useTheme } from '@shopify/restyle';
import React, { PropsWithChildren } from 'react';
import { ScrollView } from 'react-native';

// TODO: unused
const Layout = (props: PropsWithChildren) => {
    const theme = useTheme();

    return <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ backgroundColor: theme.colors.mainBackground }}>
        {props.children}
    </ScrollView>
}

export default Layout;
