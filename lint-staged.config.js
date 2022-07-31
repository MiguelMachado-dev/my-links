export default {
  'src/**/*.{js,jsx,ts,tsx}': (filenames) => {
    console.log({ filenames })

    return [`yarn eslint`, `yarn vitest related ${filenames.join(' ')}`]
  },
}
