# Page Object Pattern for Cypress

This package implements the basics of the [PageObject Pattern](https://www.awesome-testing.com/2019/03/selenium-page-object-pattern-how-to) for use with Cypress.

For a long and boring explanation read those two ancient articles:
- [Writing Selenium tests with style](https://padcom13.blogspot.com/2014/01/writing-selenium-tests-with-style.html)
- [Selenium and reusable scenarios](https://padcom13.blogspot.com/2014/02/selenium-and-reusable-scenarios.html)

Yes, those are about writing tests with Selenium and yes they talk about Java implementation but the concepts are exactly the same and the 3 base concepts (`Component`, `Page` and `Scenario`) are exactly the same.

You could also scaffold an project for use with this library by running the following command:

```
npm create from-github padcom/cypress example
```

In there you will find a test that exercises the https://www.duckduckgo.com site. It does so by defining a page, a few components and one search scenario. It's the best place to get started.
