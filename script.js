//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const codes = document.querySelectorAll(".code");

    codes.forEach((code, index) => {
        code.addEventListener("input", (e) => {
            if (e.target.value.length === 1 && index < codes.length - 1) {
                codes[index + 1].focus();
            }
        });

        code.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && index > 0 && e.target.value === "") {
                codes[index - 1].focus();
            }
        });
    });
});
