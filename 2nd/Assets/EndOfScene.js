var customSkin : GUISkin;
var player : GameObject;
var timer:GameObject;

function OnGUI()
{
		GUI.skin = customSkin;
		
		var winPromptW:int=400;
		var winPromptH:int=200;
	
		var halfScreenW:float=Screen.width/2;
		var halfScreenH:float=Screen.height/2;
	
		var halfPromptW:int=winPromptW/2;
		var halfPromptH:int=winPromptH/2;
		
				
		
		if(Timer.playerHasLost==false)
		{
			
			if (Application.loadedLevelName=="scene1")
			{
				
				GUI.BeginGroup(Rect(halfScreenW-halfPromptW,halfScreenH-halfPromptH,
				winPromptW,winPromptH));
				GUI.Box(Rect(0,0,winPromptW,winPromptH),"\n Î£Î¥Î“Î§Î‘Î¡Î—Î¤Î—Î¡Î™Î‘! Î¤Î‘ ÎšÎ‘Î¤Î‘Î¦Î•Î¡Î•Î£!");
				if (GUI.Button(Rect(125,65,150,70),"Î•Î ÎŸÎœÎ•ÎÎ— Î Î™Î£Î¤Î‘"))
				{
					timer.GetComponent("Timer").enabled=false;
					Application.LoadLevel("scene2");
					scoreScript2.points=0;
					timer.GetComponent("Timer").enabled=true;
					Timer.playerHasLost=true;
				}
				GUI.EndGroup();
				Debug.Log("playerHasLost   "+Timer.playerHasLost);
			}
		}	
}


function Update () 
{
	if(Timer.timeRemaining<0)
	{
		if((Timer.playerHasLost==true)&&((Application.loadedLevelName=="scene1")||(Application.loadedLevelName=="scene2")))
		{
			Application.LoadLevel("GameOverScene");
			timer.GetComponent("Timer").enabled=false;
		}
	}
	if ((Timer.playerHasLost==false)&&(Application.loadedLevelName=="scene2"))
	{
			Application.LoadLevel("winScene");
			timer.GetComponent("Timer").enabled=false;
	}	
}