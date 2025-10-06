import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.json'
      }
    },
    plugins: {
      '@typescript-eslint': tseslint
    },
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: 'CallExpression[callee.property.name="exec"] TemplateLiteral',
          message: 'SECURITY: Template literals in db.exec() can lead to SQL injection. Use parameterized queries with db.prepare().all() instead. See: https://github.com/czlonkowski/n8n-mcp/issues/265 (HIGH-01)'
        }
      ]
    }
  }
];
