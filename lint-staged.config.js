export default {
  'src/**/*.{js,jsx,ts,tsx}': (filenames) => {
    return [`yarn eslint`, `yarn vitest run related ${filenames.join(' ')}`]
  },
}
