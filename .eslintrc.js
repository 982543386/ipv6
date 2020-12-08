// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent':'off','key-spacing':'off','spaced-comment':'off',
    'space-before-function-paren':'off','block-spacing':'off',
    'space-before-blocks':'off','keyword-spacing':'off',
    'eol-last':'off','no-new':'off','space-infix-ops':'off',
    'no-unused-expressions':'off','no-sequences':'off',
    'no-trailing-spaces':'off','no-multiple-empty-lines':'off',
    'comma-spacing':'off','no-unused-vars':'off',
    'no-template-curly-in-string':'off','padded-blocks':'off',
    'no-multi-spaces':'off','no-tabs':'off','no-mixed-spaces-and-tabs':'off',
    'quotes':'off'
  }
}
