import { useTheme } from "@shopify/restyle"
import Text from "./Text"

interface HeaderProps {
  title: string
}

const Header = (props: HeaderProps) => {
  const theme = useTheme();

  return <Text variant='title' style={theme.containerVariants.header}>
    {props.title}
  </Text>
}

export default Header;