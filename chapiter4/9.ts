//teste building
// Class to handle the project input form
class ProjectInput {
  templateElement: HTMLTemplateElement; // Reference to the template element
  hostElement: HTMLDivElement; // Reference to the host element where the form will be rendered
  element: HTMLFormElement; // The form element itself
  constructor() {
    // Get the template element from the DOM
    this.templateElement = document.getElementById(
      'project-input'
    )! as HTMLTemplateElement;
    // Get the host element from the DOM
    this.hostElement = document.getElementById('app')! as HTMLDivElement;
    // Import the content of the template element
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    // Assign the first element of the imported node to this.element
    this.element = importedNode.firstElementChild as HTMLFormElement;
    // Attach the form element to the host element
    this.attach();
  }

  // Private method to attach the form element to the host element
  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }
}

// Create an instance of the ProjectInput class to render the form
const prjInput = new ProjectInput();
