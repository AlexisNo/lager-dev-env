Lager development environment
===

This repository is an example of development environment to work on the Lager core and/or plugins.

The principle is to provide a sample Lager application and to clone the repositories we want to work on in `node_modules/@lager`.
Therefore, the repositories will be threated in the sample application as node dependencies as if the code had been installed
using `npm install <lager-module>`.

Setup
---

*   Fork this this and the repositories of the Lager modules you want to work on
*   Clone your fork of this repository

```bash
git clone git@github.com:<Username>/lager-dev-env.git
```

*   Create a directory `src/node_modules/@lager`

```bash
cd lager-dev-env
mkdir -p src/node_modules/@lager
```

*   In this directory, clone the Lager repositories you want to work on and install their dependencies

```bash
cd src/node_modules/@lager

# Case you want to work on the lager core
git clone git@github.com:<Username>/lager.git
cd lager && npm install && cd ..

# Case you want to work on the @lager/iam plugin
git clone git@github.com:<Username>/iam.git
cd iam && npm install && cd ..

# Case you want to work on the @lager/api-gateway plugin
git clone git@github.com:<Username>/api-gateway.git
cd api-gateway && npm install && cd ..

# Case you want to work on the @lager/node-lambda plugin
git clone git@github.com:<Username>/node-lambda.git
cd node-lambda && npm install && cd ..
```

*   Go to the root of the application and install modules that you did not installed via `git clone`.

```bash
# Go to the src directory
cd ../..

# Only install the Lager core or plugins you did not forked and cloned in previous steps
npm install @lager/lager @lager/iam @lager/api-gateway @lager/node-lambda
```

*   Install and execute the Lager command line.

```bash
# Install the latest version of the Lager cli
npm install -g @lager/cli

# Run the lager command to test that plugins are loaded by lager
# Plugins can be activated/desativated in lager.json file
lager
```
