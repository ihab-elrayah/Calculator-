const keys = document.querySelectorAll('.key');
const display_input = document.querySelector('.display .input');
const display_output = document.querySelector('.display .output');

let input = "";

for (let key of keys) {
	const value = key.dataset.key;

	key.addEventListener('click', () => {
		if (value == "clear") {
			input = "";
			display_input.innerHTML = "";
			display_output.innerHTML = "";
		} else if (value == "backspace") {
			input = input.slice(0, -1);
			display_input.innerHTML = CleanInput(input);
		} else if (value == "=") {
			let result = eval(PerpareInput(input));

			display_output.innerHTML = CleanOutput(result);
		} else if (value == "brackets") {
			if (
				input.indexOf("(") == -1 || 
				input.indexOf("(") != -1 && 
				input.indexOf(")") != -1 && 
				input.lastIndexOf("(") < input.lastIndexOf(")")
			) {
				input += "(";
			} else if (
				input.indexOf("(") != -1 && 
				input.indexOf(")") == -1 || 
				input.indexOf("(") != -1 &&
				input.indexOf(")") != -1 &&
				input.lastIndexOf("(") > input.lastIndexOf(")")
			) {
				input += ")";
			}

			display_input.innerHTML = CleanInput(input);
		} else {
			if (ValidateInput(value)) {
				input += value;
				display_input.innerHTML = CleanInput(input);
			}
		}
	})
}

function CleanInput(input) {
	let input_array = input.split("");
	let input_array_length = input_array.length;

	for (let i = 0; i < input_array_length; i++) {
		if (input_array[i] == "*") {
			input_array[i] = ` <span class="operator">x</span> `;
		} else if (input_array[i] == "/") {
			input_array[i] = ` <span class="operator">÷</span> `;
		} else if (input_array[i] == "+") {
			input_array[i] = ` <span class="operator">+</span> `;
		} else if (input_array[i] == "-") {
			input_array[i] = ` <span class="operator">-</span> `;
		} else if (input_array[i] == "(") {
			input_array[i] = `<span class="brackets">(</span>`;
		} else if (input_array[i] == ")") {
			input_array[i] = `<span class="brackets">)</span>`;
		} else if (input_array[i] == "%") {
			input_array[i] = `<span class="percent">%</span>`;
		}
	}

	return input_array.join("");
}

function CleanOutput (output) {
	let output_string = output.toString();
	let decimal = output_string.split(".")[1];
	output_string = output_string.split(".")[0];

	let output_array = output_string.split("");
	
	if (output_array.length > 3) {
		for (let i = output_array.length - 3; i > 0; i -= 3) {
			output_array.splice(i, 0, ",");
		}
	}

	if (decimal) {
		output_array.push(".");
		output_array.push(decimal);
	}

	return output_array.join("");
}

function ValidateInput (value) {
	let last_input = input.slice(-1);
	let operators = ["+", "-", "*", "/"];

	if (value == "." && last_input == ".") {
		return false;
	}

	if (operators.includes(value)) {
		if (operators.includes(last_input)) {
			return false;
		} else {
			return true;
		}
	}

	return true;
}

function PerpareInput (input) {
	let input_array = input.split("");

	for (let i = 0; i < input_array.length; i++) {
		if (input_array[i] == "%") {
			input_array[i] = "/100";
		}
	}

	return input_array.join("");
}





















































/* 
// for loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
*/


/*
// Comparison/ operatpors/ polymorphism

10==10; //t
10===10 //t
10=="10"; //t
10==="10"; //f
null == undefined //t

null === undefined //f
*

/*
// prototype/ constuctiion/ scopes/ constuctions
function Apple(color, weight ){

    this.color = color;
    this.weight = weight;
    
}

Apple.prototype = {
    
    eat : function(){return this;},
    throw : function(){return "throw the apple";}
    
};


var apple1= new Apple( "red", 200);
var apple2= new Apple( "yellow", 300);
var apple3= new Apple( "green", 400);
*/



/*
// callable objects

function name(fullname){
    
    return fullname.firstname + fullname.lastname;

}


console.log(
    name({firstname: "Ihab", lastname: "Elrayah"})

);

*/


/* 
//function fun

 function getFullName() {
    var firstname = "ihab";
    var lastname = "elrayah";
    var fullname = firstname + " " + lastname; 

    return fullname;
}

console.log(getFullName()); // This will correctly print "ihab elrayah" to the console

 */

/*
//object and array recap

var pointer = "open";

var closet ={
    open: "doors open",
    neat: function(){return "everything is washed.";},

    inside: [{
        hanger: "sliver hanger",
        clothes: "red shirt, blue shirt",
        shelve:{ insideShelve: "folded clothes"},
    }],

        shut:[
            {shelveShut:"shelve shut"},
            {shirtTake: "take out shirt"}
        ],
    
    close: "doors close"


};


var cerealBox= [
    "openBox1",
    "openbag2",
    ["pourCeral3","inBowl", "addMilk", "getSpoon", "eat"],
    "washBowl",
    function(){return "everything is washed.";}

]
  */  