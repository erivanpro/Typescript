//Fetching User Input

// Autobind decorator to bind 'this' context
function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    }
  };
  return adjDescriptor;
}

// ProjectInput Class to handle user input for a project
class ProjectInput {
  templateElement: HTMLTemplateElement; // Reference to the HTML template element
  hostElement: HTMLDivElement; // Reference to the host element where the form will be rendered
  element: HTMLFormElement; // The form element itself
  titleInputElement: HTMLInputElement; // Input element for the project title
  descriptionInputElement: HTMLInputElement; // Input element for the project description
  peopleInputElement: HTMLInputElement; // Input element for the number of people involved

  constructor() {
    // Get the template and host elements from the DOM
    this.templateElement = document.getElementById(
      'project-input'
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById('app')! as HTMLDivElement;

    // Import the template content into the DOM
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    // Assign the first element of the imported node to this.element and set its id
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = 'user-input';

    // Get references to the input elements within the form
    this.titleInputElement = this.element.querySelector(
      '#title'
    ) as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      '#description'
    ) as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      '#people'
    ) as HTMLInputElement;

    // Configure the form to handle submit events
    this.configure();
    // Attach the form element to the host element
    this.attach();
  }

  // Private method to gather user input and validate it
  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    // Validate input fields
    if (
      enteredTitle.trim().length === 0 ||
      enteredDescription.trim().length === 0 ||
      enteredPeople.trim().length === 0
    ) {
      alert('Invalid input, please try again!');
      return;
    } else {
      return [enteredTitle, enteredDescription, +enteredPeople];
    }
  }

  // Private method to clear the input fields after form submission
  private clearInputs() {
    this.titleInputElement.value = '';
    this.descriptionInputElement.value = '';
    this.peopleInputElement.value = '';
  }

  // Submit handler method to handle form submission
  @autobind
  private submitHandler(event: Event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput;
      console.log(title, desc, people); // Log the input values to the console
      this.clearInputs(); // Clear the input fields
    }
  }

  // Private method to add event listeners to the form
  private configure() {
    this.element.addEventListener('submit', this.submitHandler);
  }

  // Private method to attach the form element to the host element
  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }
}

// Create an instance of the ProjectInput c
