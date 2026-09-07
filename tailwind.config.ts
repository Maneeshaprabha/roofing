import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // src folder eka athule thiyena onima file ekak meken gannawa
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;