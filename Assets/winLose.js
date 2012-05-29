function Update () {


	if (scoreScript.ballsGot==11) { //11 balls to get
		
		if (scoreScript.index==5) //5 balls in the correct order "unity"
			guiText.text=("Congratulations!\nYou Won!");
		else
			guiText.text=("You lost");
	
	}
}