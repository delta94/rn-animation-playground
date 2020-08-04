import { dark } from "../themes";

type ThemeInterface = typeof dark;

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends ThemeInterface {}
}