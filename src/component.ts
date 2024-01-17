/**
 * Base class for components
 *
 * A Component is a construct that encapsulates part of the user interface.
 * It can be a dialog, a search box, a panel, a grid of data - anything that
 * can be understood as a concept in the application.
 *
 * Components can live on many different pages, just like components in the
 * source code of the application.
 *
 * A good example of components are:
 * - search box in a search engine
 * - cookies acceptance popup
 * - list of emails containing individual components for rows
 * - tree of files
 * - login widget (any kind of widget is a prime candidate for a Component)
 *
 * Components can have and should have methods. Methods should perform the actual
 * operations, like typing in text into different inputs.
 *
 * It is advised that components don't expose results of the call to `cy.find()`
 * to the outside world. Instead there should be functions that interact with Cypress
 * objects. That way the tests don't even call Cypress directly which makes them
 * much easier to fix if the internal structure of the component changes.
 *
 * It is also advised to create smaller components and favor composition over inheritance.
 * What that means is, it is better to create n different classes that have 2-3 properties
 * and a couple of methods rather than a massive class that can handle an entire part of
 * the application, like a tab for entering financial data. In the given example, it is
 * better to group fields into components that deal with the same data - like address which
 * would contain the street, country, and postal code. Then there should be another
 * component that groups those together. The grouping component (for example a tab) could,
 * but doesn't necessarily have to, expose business methods to interact with those individual
 * sub-components.
 */
export abstract class Component {
  #root: Cypress.Chainable

  constructor(root: Cypress.Chainable) {
    this.#root = root
  }

  protected get root() {
    return this.#root
  }
}
