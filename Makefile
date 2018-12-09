install:
	npm install

start-games:
	npx babel-node -- src/bin/brain-games.js

start-even:
	npx babel-node -- src/bin/brain-even.js
	
start-calc:
	npx babel-node -- src/bin/brain-calc.js

start-gcd:
	npx babel-node -- src/bin/brain-gcd.js

start-progression:
	npx babel-node -- src/bin/brain-progression.js

start-prime:
	npx babel-node -- src/bin/brain-prime.js

start-balance:
	npx babel-node -- src/bin/brain-balance.js

publish:
	npm publish

lint:
	npx eslint .

fix-lint:
	npx eslint . --fix
