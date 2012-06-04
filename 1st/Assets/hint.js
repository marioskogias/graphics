static var timePressedHint : float = 0;

function Update () {
if ((Time.time-timePressedHint) > 5.0) { //show hint only for 5 secs
		
		guiText.text=("");
	}
	
	help=scoreScript.target[scoreScript.index];
	
	if (Input.GetKeyDown("h")) {
	
	guiText.text=("Next:"+help);
	timePressedHint=Time.time;
	
	}
}