import { createTheme } from '@shopify/restyle';

const palette = {
    black: '#000000',
    white: '#FFFFFF',

    lightGray: '#C4C4C4',
    gray: '#F5F5F5',
    grayDark: '#5F6367',

    blue: '#D2E0FB',
    blueDark: '#1B1A55',

    yellow: '#FEF9D9',
    green: '#DEE5D4'
};

const theme = createTheme({
    colors: {
        mainBackground: palette.white,
        cardPrimaryBackground: palette.gray,

        textPrimary: palette.black,
        textSecondary: palette.gray,

        tagPrimaryBackground: palette.blue,
        tagWarningBackground: palette.yellow,
        tagSuccessBackground: palette.green,
        tagTextPrimary: palette.grayDark,

        inputTextPrimary: palette.grayDark,
        inputPlaceholderPrimary: palette.lightGray
    },
    spacing: {
        xs: 2,
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    textVariants: {
        title: {
            fontSize: 32,
            fontFamily: 'Lato-Black',
            color: 'textPrimary'
        },
        heading: {
            fontSize: 16,
        },
        body: {
            fontSize: 16,
            fontFamily: 'Lato-Regular',
        },
        note: {
            fontSize: 12,
            fontFamily: 'Lato-Light',
            marginTop: 's'
        },
        noteItalic: {
            fontSize: 12,
            fontFamily: 'Lato-LightItalic',
            marginTop: 's'
        },
        tag: {
            color: 'tagTextPrimary',
            fontSize: 10,
            fontFamily: 'Lato-Regular',
            marginVertical: 's',
            marginHorizontal: 'm'
        },
        input: {
            fontFamily: 'Lato-Regular',
            color: palette.grayDark,
            flex: 10,
            flexDirection: 'row',
            marginVertical: 20
        },
        defaults: {
            fontFamily: 'Lato-Regular',
        },
        button: {
            fontFamily: 'Lato-Black',
            color: 'mainBackground',
            fontSize: 16,
            margin: 'm',
        }
    },
    containerVariants: {
        card: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#F5F5F5',
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 10
        },
        cardSeparator: {
            paddingVertical: 6
        },
        page: {
            flex: 1,
            marginHorizontal: 21,
            marginVertical: 24,
            backgroundColor: 'mainBackground',
            justifyContent: 'flex-start',
        },
        header: {
            flex: 1,
            alignItems: 'flex-start',
        },
        todoHeader: {
            flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12
        },
        tag: {
            border: 1.2,
            borderColor: 'red'
        }
    },
    tagVariants: {
        defaults: {
            borderRadius: 20,
            backgroundColor: palette.blue,
            flex: 0.65,
            justifyContent: 'center',
            alignItems: 'center',
        },
        success: {
            borderRadius: 20,
            backgroundColor: palette.green,
            flex: 0.65,
            justifyContent: 'center',
            alignItems: 'center'
        },
        info: {
            borderRadius: 20,
            backgroundColor: palette.yellow,
            flex: 0.65,
            justifyContent: 'center',
            alignItems: 'center'           
        },
        bordered: {
            borderWidth: 1.5,
            borderColor: palette.grayDark
        }
    },
    buttonVariants: {
        fab: {
            backgroundColor: palette.blueDark,
            position: 'absolute',
            elevation: 8, // Shadow for Android
            shadowColor: '#000', // Shadow for iOS
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            right: 20,
            bottom: 20,
            padding: 20,
            borderRadius: 50
        },
        defaults: {
            backgroundColor: palette.blueDark,
            borderRadius: 40,
            justifyContent: 'center',
            alignItems: 'center',
        },
        disabled: {
            backgroundColor: palette.blue,
        }
    },
    iconVariants: {
        m: {
            width: 40,
            height: 40
        }
    }
});

export type Theme = typeof theme;
export default theme;