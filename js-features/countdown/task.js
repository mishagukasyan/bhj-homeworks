function countTime() {
	const output = document.getElementById("timer");
const timerID = setInterval(() => {
	if (output.textContent > 0) {
		output.textContent--;
	} else { 
			     clearInterval(timerID);
                 alert("Вы победили в конкурсе!");
	}
  }, 1000);
}

countTime();