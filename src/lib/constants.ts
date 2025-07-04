export const colors = {
    primary: {
      DEFAULT: "hsl(222.2 47.4% 11.2%)",
      foreground: "hsl(210 40% 98%)",
    },
    secondary: {
      DEFAULT: "hsl(210 40% 96.1%)",
      foreground: "hsl(222.2 47.4% 11.2%)",
    },
    destructive: {
      DEFAULT: "hsl(0 84.2% 60.2%)",
      foreground: "hsl(210 40% 98%)",
    },
    muted: {
      DEFAULT: "hsl(210 40% 96.1%)",
      foreground: "hsl(215.4 16.3% 46.9%)",
    },
    accent: {
      DEFAULT: "hsl(210 40% 96.1%)",
      foreground: "hsl(222.2 47.4% 11.2%)",
    },
    popover: {
      DEFAULT: "hsl(0 0% 100%)",
      foreground: "hsl(222.2 47.4% 11.2%)",
    },
    card: {
      DEFAULT: "hsl(0 0% 100%)",
      foreground: "hsl(222.2 47.4% 11.2%)",
    },
  }
  
  export type Color = keyof typeof colors