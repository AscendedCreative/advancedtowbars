/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        "atb-p-blue": "#144EDA",
        "atb-p-blue-light": "#E6F0FF",
        "atb-p-blue-dark": "#0E3A8D",
        "atb-p-blue-trans": "rgba(20,78,218,0.25)",
        "atb-s-white": "#FFFFFF",
        "atb-s-white-light": "#F8F9FA",
        "atb-s-white-dark": "#E9ECEF",
        "atb-t-gray": "#D5D5D5",
        "atb-t-gray-light": "#F8F9FA",
        "atb-t-gray-dark": "#CED4DA",
        "atb-black": "#000000",
        "atb-black-light": "#343A40",
        "atb-black-dark": "#212529",
      },
    },
  },
  safelist: ["grow-line", "timeline-line-start"], // <- this protects custom classes
  plugins: [],
};
