// ./src/admin/app.ts
import AuthLogo from "../extensions/my-auth-logo.png";
import MenuLogo from "../extensions/my-menu-logo.png";

export default {
  config: {
    auth: {
      logo: AuthLogo,
    },
    menu: {
      logo: MenuLogo,
    },
    theme: {
      light: {
        colors: {
          primary100: "#fde7e9",
          primary200: "#f6b7bd",
          primary500: "#e21c23", // Main red (Publish button)
          primary600: "#c0181d", // Hover
          primary700: "#a11216", // Active
          buttonPrimary500: "#b12f2f",
          buttonPrimary600: "#b12f2f",
        },
      },
    },
  },
  bootstrap() {},
};
