
function OnGUI () {
	// Make a background box
	GUI.Box (Rect (600,300,100,90), "Loader Menu");

	// Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
	if (GUI.Button (Rect (610,330,80,20), "Easy")) {
		Application.LoadLevel ("scene1");
		data.difficulty = 1;
	}

	// Make the second button.
	if (GUI.Button (Rect (610,360,80,20), "Hard")) {
		Application.LoadLevel ("scene2");
		data.difficulty = 2;
	}
}

