module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
  rules: {
    "prettier/prettier": [
      'prettier/prettier': ['error', { ebdOfLine: 'auto'}]
    ]
  }
}
