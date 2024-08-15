//Creating a Re-Usable Validation Functionality


// Validation interface and function
interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

function validate(validatableInput: Validatable) {
  let isValid = true;
  if (validatableInput.required) {
    isValid = isValid && validatableInput.value.toString().trim().length !== 0;
  }
  if (
    validatableInput.minLength != null &&
    typeof validatableInput.value === 'string'
  ) {
    isValid = isValid && validatableInput.value.length >= validatableInput.minLength;
  }
  if (
    validatableInput.maxLength != null &&
    typeof validatableInput.value === 'string'
  ) {
    isValid = isValid && validatableInput.value.length <= validatableInput.maxLength;
  }
  if (
    validatableInput.min != null &&
    typeof validatableInput.value === 'number'
  ) {
    isValid = isValid && validatableInput.value >= validatableInput.min;
  }
  if (
    validatableInput.max != null &&
    typeof validatableInput.value === 'number'
  ) {
    isValid = isValid && validatableInput.value <= validatableInput.max;
  }
  return isValid;
}

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
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    // Get the template and host elements from the DOM
    this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
    this.hostElement = document.getElementById('app')! as HTMLDivElement;

    // Import the template content into the DOM
    const importedNode = document.importNode(this.templateElement.content, true);
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

  // Private method to gather user input and validate it
  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    const titleValidatable: Validatable = {
      value: enteredTitle,
      required: true
    };
    const descriptionValidatable: Validatable = {
      value: enteredDescription,
      required: true,
      minLength: 5
    };
    const peopleValidatable: Validatable = {
      value: +enteredPeople,
      required: true,
      min: 1,
      max: 5
    };

    if (
      !validate(titleValidatable) ||
      !validate(descriptionValidatable) ||
      !validate(peopleValidatable)
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

// Create an instance of the ProjectInput class to render the form and handle input
const prjInput = new ProjectInput();




// Validation interface and function
// Validatable interface defines the structure for input that can be validated, including optional properties like required, minLength, maxLength, min, and max.
// validate function checks if the input meets the criteria defined in the Validatable interface.

// Autobind decorator to bind 'this' context
// Ensures the method submitHandler always uses the correct 'this' context when it is called. This is useful when adding event listeners where the context of 'this' might change.

// ProjectInput Class to handle user input for a project

// Class Members
// templateElement, hostElement, element: These represent the template element, the host element where the form will be inserted, and the form element itself.
// titleInputElement, descriptionInputElement, peopleInputElement: References to the input elements within the form for the project title, description, and number of people.

// Constructor
// Fetches the template and host elements from the DOM.
// Imports the content of the template into the DOM.
// Assigns the imported content's first child element to this.element and sets its id to 'user-input'.
// Gets references to the form's input elements.
// Configures the form to handle submit events.
// Attaches the form element to the host element.

// Private method gatherUserInput
// Fetches user input from the input fields.
// Creates Validatable objects for each input and validates them using the validate function.
// Returns a tuple of the input values if valid, otherwise shows an alert.

// Private method clearInputs
// Clears the values of the input fields after the form is submitted.

// Submit Handler Method
// Prevents the default form submission behavior.
// Calls gatherUserInput to fetch and validate user input.
// If the input is valid, logs the values to the console and clears the input fields.

// Private method configure
// Adds an event listener for the form submission event, binding the submitHandler method.

// Private method attach
// Inserts the form element into the host element at the beginning.

// Instance Creation
// Creates an instance of the ProjectInput class, which renders the form and sets up input handling.
