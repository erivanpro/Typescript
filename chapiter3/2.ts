// Define an interface for the object that can be greeted
interface Greeter {
    name: string;
    greet(): string;
}

// Function that greets an object implementing the Greeter interface
function greet(greeter: Greeter) {
    return `Hello, ${greeter.name}! ${greeter.greet()}`;
}

// Example usage
const person = {
    name: "Erivan",
    greet() {
        return "Nice to meet you!";
    }
};

console.log(greet(person)); // Output: Hello, Erivan! Nice to meet you!
