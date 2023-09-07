document.getElementById("submit-button").addEventListener("click", function() {
    // Get selected answers
    const q1Answer = document.querySelector("input[name='q1']:checked");
    const q2Answer = document.querySelector("input[name='q2']:checked");

    // Check answers and display result
    if (q1Answer && q2Answer) {
        if (q1Answer.value === "paris" && q2Answer.value === "mars") {
            document.getElementById("result").textContent = "Congratulations! You got both answers correct.";
        } else {
            document.getElementById("result").textContent = "Sorry, you got one or both answers wrong.";
        }
    } else {
        document.getElementById("result").textContent = "Please answer both questions.";
    }
});
