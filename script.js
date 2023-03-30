const calculateBMI = () => {
    const weight = document.getElementById("weightInput").value;
    const height = document.getElementById("heightInput").value / 100; // convert cm to m
    const bmi = (weight / (height * height)).toFixed(1);
    document.getElementById("result").innerHTML = `Your BMI is ${bmi}`;
};

document.getElementById("calculateBtn").addEventListener("click", calculateBMI);
