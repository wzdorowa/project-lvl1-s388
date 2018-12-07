install:
	npm install

start-games:
	npx babel-node -- src/bin/brain-games.js

publish:
	npm publish

lint:
	npx eslint .

fix-lint:
	npx eslint . --fix
