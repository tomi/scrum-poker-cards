module.exports = {
	"parser": "babel-eslint",
	"env": {
		"browser": true
	},
	"plugins": [
		"react"
	],
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
	"rules": {
    "react/jsx-curly-spacing": [2, "always", { "spacing": {
      "objectLiterals": "never"
    }}]
	}
};
