# eslint-plugin-n8n-nodes

ESLint plugin for linting n8n nodes

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-n8n-nodes`:

```sh
npm install eslint-plugin-n8n-nodes --save-dev
```

## Usage

In your [configuration file](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file), import the plugin `eslint-plugin-n8n-nodes` and add `n8n-nodes` to the `plugins` key:

```js
import { defineConfig } from "eslint/config";
import n8n-nodes from "eslint-plugin-n8n-nodes";

export default defineConfig([
    {
        plugins: {
            n8n-nodes
        }
    }
]);
```


Then configure the rules you want to use under the `rules` key.

```js
import { defineConfig } from "eslint/config";
import n8n-nodes from "eslint-plugin-n8n-nodes";

export default defineConfig([
    {
        plugins: {
            n8n-nodes
        },
        rules: {
            "n8n-nodes/rule-name": "warn"
        }
    }
]);
```



## Configurations

<!-- begin auto-generated configs list -->
TODO: Run eslint-doc-generator to generate the configs list (or delete this section if no configs are offered).
<!-- end auto-generated configs list -->



## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


