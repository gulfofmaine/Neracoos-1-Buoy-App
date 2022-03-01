module.exports = {
  stories: ["../src/**/*.stories.[jt]s", "../src/**/*.stories.[jt]sx", "../src/**/*.stories.mdx"],
  addons: ["@storybook/preset-create-react-app", "@storybook/addon-essentials", "@storybook/addon-a11y"],
  core: {
    builder: "webpack5"
  }
};