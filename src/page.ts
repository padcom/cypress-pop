import { Scenario } from './scenario'

/**
 * Base class for pages
 *
 * This class implements the basics of a Page. A page can be navigated to
 * by instantiating to it and can run scenarios that start on that Page.
 */
export abstract class Page {
  constructor(url: string) {
    cy.visit(url)
  }

  protected get root() {
    return cy.get('body')
  }

  run <I extends Page, O extends Page>(scenario: Scenario<I, O>): O {
    return scenario.run(this as unknown as I)
  }
}
