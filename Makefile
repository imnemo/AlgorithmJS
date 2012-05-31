MOCHA = "mocha"
REPORTER = spec

test: test-unit
test-unit:
	@$(MOCHA) --reporter $(REPORTER)