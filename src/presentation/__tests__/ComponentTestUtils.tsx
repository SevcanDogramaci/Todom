import * as React from "react";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "@shopify/restyle";
import theme from "../../infrastructure/theme/Theme";

type ProvidersProps = {
  children?: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender: typeof render = (component, options) => {
  return render(component, { wrapper: Providers, ...options });
};

export * from "@testing-library/react-native";
export { customRender as render };