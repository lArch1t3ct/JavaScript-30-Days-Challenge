const inputs = document.querySelectorAll('.controls input'); // select the input element that are children of the div with 'controls' class attribute.

// Event Handler
function handleUpdate(){
    // not all inputs have a data-sizing attribute set.
    // Therefore when undefined is returned set suffix to empty string.
    const suffix = this.dataset.sizing ?? '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// Let's add a listener for a 'change' event on each input element:
inputs.forEach(element => element.addEventListener('change', handleUpdate));

// Instead of taking a value on the range is set to a particular value which will have as a result jumping to the final result,
// omiting the intermediate values. Thus instead of adding spacing smoothly, it will be added abruptly.
inputs.forEach(element => element.addEventListener('mousemove', handleUpdate));