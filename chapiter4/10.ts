// Interacting with DOM Elements



// Class to handle the project input form
class ProjectInput {
  templateElement: HTMLTemplateElement; // Reference to the template element
  hostElement: HTMLDivElement; // Reference to the host element where the form will be rendered
  element: HTMLFormElement; // The form element itself
  titleInputElement: HTMLInputElement; // Input element for title
  descriptionInputElement: HTMLInputElement; // Input element for description
  peopleInputElement: HTMLInputElement; // Input element for number of people

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
    // Assign the first element of the imported node to this.element and set its id
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = 'user-input';

    // Get references to the input elements within the form
    this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;

    // Configure the form to handle submit events
    this.configure();
    // Attach the form element to the host element
    this.attach();
  }

  // Private method to handle the form submission
  private submitHandler(event: Event) {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log(this.titleInputElement.value); // Log the title input value to the console
  }

  // Private method to add the event listener for the form submission
  private configure() {
    this.element.addEventListener('submit', this.submitHandler.bind(this));
  }

  // Private method to attach the form element to the host element
  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }
}

// Create an instance of the ProjectInput class to render the form and handle input
const prjInput = new ProjectInput();
