var msgCount = 0;

// Create div to display messages.
function createMessageElement()
{
	div = document.createElement("div");
	div.id="msg-div";
	document.body.appendChild(div);
	div.style.position = "absolute";
	div.style.left = 500;
	div.style.bottom = 10;
	div.style.width = 500;
	div.style.height = 700;
	div.style.overflow = "auto";
	div.style.backgroundcolor="reds";
	div.zindex= 1000;
	return div;
}

// Print message to message div.
function print(msg)
{
	if (enableConsolePrint)
		console.log(msg);
		
	var div = document.getElementById("msg-div");
	if (!div){
		div = createMessageElement();
	}

	div.innerHTML += msgCount + "\t >: " + msg + "<br>";
	div.scrollTop = msgCount * 50;
	msgCount ++;
}
