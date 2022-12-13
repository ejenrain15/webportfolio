let body = document.body;

document.addEventListener("mousemove", (e) => {
	let elem = document.createElement("div");
	elem.setAttribute("class", "trail")
	elem.setAttribute("style", `left: ${e.clientX - 10}px; top: ${e.clientY -10}px;`);

	elem.onanimationend=()=>{
		elem.remove();
	}

	body.insertAdjacentElement("beforeend", elem);
})