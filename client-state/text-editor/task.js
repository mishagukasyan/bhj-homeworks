let dataText = document.getElementById("editor");

let previousText = localStorage.getItem("dataText");

dataText.value = previousText;

dataText.addEventListener("keyup", dataText_OnKeyUp);

function dataText_OnKeyUp(e) {
	localStorage.setItem("dataText", this.value);
}

clearBtn.addEventListener("click", function () {
	dataText.value = "";
	localStorage.removeItem("dataText");
});