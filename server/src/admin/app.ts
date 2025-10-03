// ./src/admin/app.ts
import AuthLogo from "../extensions/my-auth-logo.png";
import MenuLogo from "../extensions/my-menu-logo.png";

export default {
  config: {
    head: {
      title: "ABCD Of Money",
    },
    auth: {
      logo: AuthLogo,
      title: "ABCD Of Money",
    },
    menu: {
      logo: MenuLogo,
    },
    locales: ["en"],
    translations: {
      en: {
        "Auth.form.welcome.title": "Welcome to ABCD Of Money",
        "Auth.form.welcome.subtitle": "Log in to your ABCD Of Money account",
      },
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
  bootstrap() {
    document.title = "ABCD Of Money";
  },
};
