/** @returns {Promise<import('jest').Config>} */
module.exports = async () => {
  return {
    verbose: true,
    testEnvironment: "jsdom",
    rootDir: "./src",
  };
};
