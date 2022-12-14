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


document.querySelector("#contact-form").addEventListener("submit", (e) =>{

	e.preventDefault();

	fetch("https://contact-api-3zlj.onrender.com/messages/send", {
		method: "POST",
		body: JSON.stringify({
			fullName: document.querySelector("#full-name").value,
			email: document.querySelector("#email").value,
			message: document.querySelector("#message").value
		}),
		headers: {
			"Content-Type": "application/json"
		}
	})
	alert("Successfully Sent a Message")
	document.querySelector("#full-name").value = null
	document.querySelector("#email").value = null
	document.querySelector("#message").value = null
});