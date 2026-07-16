import { createRequire } from "module";
const require = createRequire(import.meta.url);
const eslintConfigNext = require("eslint-config-next");

const config = [...eslintConfigNext];

export default config;
