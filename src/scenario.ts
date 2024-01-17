import { Page } from './page'

/**
 * Scenario definition
 *
 * A scenario is a set of reusable operations that start at a given Page
 * and lead to either the same Page or a different Page.
 *
 * A good example of a scenario is the login process. It starts at the LoginPage
 * and (if successful) leads to some application Page.
 */
export interface Scenario <I extends Page, O extends Page> {
  run(entry: I): O;
}
