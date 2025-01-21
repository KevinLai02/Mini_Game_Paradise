import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import prettierPlugin from "eslint-plugin-prettier"; // 使用 import 引入插件
import prettierConfig from "eslint-config-prettier"; // 使用 import 引入 Prettier 配置

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // 配置 Prettier 插件
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"], // 適用檔案
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": [
        "error",
        {
            "endOfLine": "auto"
        }
     ]
    },
  },
  {
    ...prettierConfig,
  }
];

export default eslintConfig;
