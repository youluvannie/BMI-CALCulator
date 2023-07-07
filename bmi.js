function classifyBMI() {
    const value = getVal();
    let p = document.querySelector("p");
    switch (true) {
        case value >= 0 && value <= 18.5:
            result = 'underweight';
            p.className = 'red';
            break;
        case value >= 18.5 && value <= 24.9:
            result = 'normal weight';
            p.className = 'green';
            break;
        case value >= 25 && value <= 29.9:
            result = 'over weight';
            p.className = 'yellow';
            break;
        case value >= 30 && value <= 34.9:
            result = 'Obesity class 1';
            p.className = 'red';
            break;
        case value >= 35 && value <= 39.9:
            result = 'Obesity class 2';
            p.className = 'red';
            break;
        case value >= 40:
            result = 'Obesity class 3 ';
            p.className = 'red';
            break;
        default:
            result = 'invalid';
    }

    p.innerHTML = (`You are ${result}.`);

}



function getVal() {
    const weight = document.getElementById("weight").value;
    const apparentHeight = document.getElementById("height").value;

    const realHeight = (Math.pow(apparentHeight, 2));
    const BMI = (weight / realHeight);

    return (BMI);
}