function printMessage(logo = "Hello world", color) {
    console.log(logo);
    console.log(color);
}
printMessage(undefined, 'Old logo');
printMessage('New logo', 'red');