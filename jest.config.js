module.exports = {
  preset: 'react-native',
  modulePathIgnorePatterns: ['src/presentation/__tests__/ComponentTestUtils.tsx'],
  "transformIgnorePatterns": [
    "node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)"
  ]
};