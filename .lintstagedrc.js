export default {
  'src/**/*.{js,jsx,ts,tsx}': (filenames) => {
    const findTests = filenames.find(filename => filename.includes("test"))

    if (!findTests) return ['yarn lint']

    return ['yarn lint', `yarn vitest run related ${findTests}`]

    console.log(findTests)
  },
}
