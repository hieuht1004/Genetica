const slider = document.getElementById("quizSlider");
const scaleMarks = document.querySelectorAll("#scaleMarks span");
const leftLabel = document.getElementById("leftLabel");
const rightLabel = document.getElementById("rightLabel");

function updateUI(value) {
    // Reset tất cả span
    scaleMarks.forEach(span => {
        span.style.color = "#666";
        const label = span.querySelector("label");
        if (label) {
            label.style.background = "#bbb";
        }
    });

    if (value != 0) {
        const index = parseInt(value) + 5; // [-5..5] -> [0..10]
        const activeSpan = scaleMarks[index];

        // Đổi màu số
        activeSpan.style.color = "#45AE37";

        // Đổi màu label line
        const activeLabel = activeSpan.querySelector("label");
        if (activeLabel) {
            activeLabel.style.background = "#45AE37";
        }
    }

    // Đổi màu và font-weight cho label trái/phải
    if (value < 0) {
        leftLabel.style.color = "#45AE37";
        leftLabel.style.fontWeight = "600";
        rightLabel.style.color = "#101010";
        rightLabel.style.fontWeight = "300";
    } else if (value > 0) {
        rightLabel.style.color = "#45AE37";
        rightLabel.style.fontWeight = "600";
        leftLabel.style.color = "#101010";
        leftLabel.style.fontWeight = "300";
    } else {
        // reset khi = 0
        leftLabel.style.color = "#101010";
        rightLabel.style.color = "#101010";
        leftLabel.style.fontWeight = "300";
        rightLabel.style.fontWeight = "300";
    }

    // Đổi màu progress (Chrome)
    const min = slider.min ? parseInt(slider.min) : -5;
    const max = slider.max ? parseInt(slider.max) : 5;
    const percent = ((value - min) / (max - min)) * 100;

    slider.style.background =
        value == 0 ?
        "linear-gradient(to right, #ddd 0%, #ddd 100%)" :
        `linear-gradient(to right, #45AE37 0%, #45AE37 ${percent}%, #ddd ${percent}%, #ddd 100%)`;
}

slider.addEventListener("input", (e) => {
    updateUI(e.target.value);
});

// Khởi tạo ban đầu
updateUI(slider.value);