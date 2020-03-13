module.exports = function toReadable(number) {

    var stringArray = [];
    var numberArray = number.toString().split("");

    if (number == 0) {
        return "zero"
    } else {
        for (var i = 0; i < numberArray.length; i++) {
            if (i == numberArray.length - 1) {
                if (numberArray[numberArray.length - 2] == "1") {
                    stringArray.push(convertNumber3(numberArray[numberArray.length - 1]));

                }
                else {
                    stringArray.push(convertNumber(numberArray[i]))
                }
            }
            else if (i == numberArray.length - 2) {
                if (numberArray[i] == "1" || numberArray[i] == "0") {
                    continue;
                }
                else {
                    stringArray.push(convertNumber2(numberArray[i]))
                }
            }
            else if (i == numberArray.length - 3) {
                stringArray.push(convertNumber(numberArray[i]));
                stringArray.push("hundred");
            }
        }
        return stringArray.join(" ").trim();
    }

    function convertNumber(x) {
        var num;
        switch (x) {
            case "9":
                num = "nine";
                break;
            case "8":
                num = "eight";
                break;
            case "7":
                num = "seven";
                break;
            case "6":
                num = "six";
                break;
            case "5":
                num = "five";
                break;
            case "4":
                num = "four";
                break;
            case "3":
                num = "three";
                break;
            case "2":
                num = "two";
                break;
            case "1":
                num = "one";
                break;
        }
        return num;
    }

    function convertNumber2(x) {
        var num;
        switch (x) {
            case "9":
                num = "ninety";
                break;
            case "8":
                num = "eighty";
                break;
            case "7":
                num = "seventy";
                break;
            case "6":
                num = "sixty";
                break;
            case "5":
                num = "fifty";
                break;
            case "4":
                num = "forty";
                break;
            case "3":
                num = "thirty";
                break;
            case "2":
                num = "twenty";
                break;
            case "1":
                num = "ten";
                break;
            default:
                num = "";
        }
        return num;
    }

    function convertNumber3(x) {
        var num;
        switch (x) {
            case "9":
                num = "nineteen";
                break;
            case "8":
                num = "eighteen";
                break;
            case "7":
                num = "seventeen";
                break;
            case "6":
                num = "sixteen";
                break;
            case "5":
                num = "fifteen";
                break;
            case "4":
                num = "fourteen";
                break;
            case "3":
                num = "thirteen";
                break;
            case "2":
                num = "twelve";
                break;
            case "1":
                num = "eleven";
                break;
            default:
                num = "ten";
        }
        return num;
    }
}
