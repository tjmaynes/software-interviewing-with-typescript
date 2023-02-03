install:
	yarn $@

test:
	yarn $@

lint:
	yarn $@

fix:
	yarn $@

deploy: install test

ship_it: test
	git push
