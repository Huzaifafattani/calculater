    let input = "";
let result = null;
let operator = null;

function updateDisplay(value) {
	input += value;
	document.getElementById("result").value = input;
}

function clear() {
	input = "";
	result = null;
	operator = null;
	document.getElementById("result").value = "";
}

function backspace() {
	input = input.slice(0, -1);
	document.getElementById("result").value = input;
}

function calculate() {
	let num1 = parseFloat(result);
	let num2 = parseFloat(input);
	if (operator === "+") {
		result = num1 + num2;
	} else if (operator === "-") {
		result = num1 - num2;
	} else if (operator === "*") {
		result = num1 * num2;
	} else if (operator === "/") {
		result = num1 / num2;
	} else if (operator === "%") {
		result = num1 % num2;
	}
	input = "";
	operator = null;
	document.getElementById("result").value = result;
}

document.getElementById("clear").addEventListener("click", clear);

document.getElementById("backspace").addEventListener("click", backspace);

document.getElementById("decimal").addEventListener("click", function () {
	if (!input.includes(".")) {
		updateDisplay(".");
	}
});

document.getElementById("equals").addEventListener("click", function () {
	if (result === null) {
		result = input;
	} else {
		calculate();
	}
});

document.getElementById("add").addEventListener("click", function () {
	if (operator !== null) {
		calculate();
	}
	operator = "+";
	result = input;
	input = "";
});

document.getElementById("subtract").addEventListener("click", function () {
	if (operator !== null) {
		calculate();
	}
	operator = "-";
	result = input;
	input = "";
});

document.getElementById("multiply").addEventListener("click", function () {
	if (operator !== null) {
		calculate();
	}
	operator = "*";
	result = input;
	input = "";
});

document.getElementById("divide").addEventListener("click", function () {
	if (operator !== null) {
		calculate();
	}
	operator = "/";
	result = input;
	input = "";
});

document.getElementById("mod").addEventListener("click", function () {
	if (operator !== null) {
		calculate();
	}
	operator = "%";
	result = input;
	input = "";
});

document.getElementById("zero").addEventListener("click", function () {
	updateDisplay("0");
});

document.getElementById("one").addEventListener("click", function () {
	updateDisplay("1");
});

document.getElementById("two").addEventListener("click", function () {
	updateDisplay("2");
});

document.getElementById("three").addEventListener("click", function () {
	updateDisplay("3");
});

document.getElementById("four").addEventListener("click", function () {
	updateDisplay("4");
});

document.getElementById("five").addEventListener("click", function () {
	updateDisplay("5");
});

document.getElementById("six").addEventListener("click", function () {
	updateDisplay("6");
});

document.getElementById("seven").addEventListener("click", function () {
	updateDisplay("7");
});

document.getElementById("eight").addEventListener("click", function () {
	updateDisplay("8");
});

document.getElementById("nine").addEventListener("click", function () {
	updateDisplay("9");
});





