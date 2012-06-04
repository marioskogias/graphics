static var startTime:float;
static var timeRemaining:float;
var minutes:int;
var seconds:int;
var timeStr:String;
static var playerHasLost:boolean=true;
var player : GameObject;



function Start()
{
	startTime=30.0; //in seconds
}

function Update () 
{
	timeRemaining=startTime-Time.timeSinceLevelLoad;
	minutes=timeRemaining/60;
	seconds=timeRemaining%60;
	timeStr=minutes.ToString() + ":";
	timeStr+=seconds.ToString("D2");
	guiText.text=timeStr;
	
	if((scoreScript2.points<4)&&(timeRemaining<0))
	{
		playerHasLost=true;
		var tempVar1 = player.gameObject.GetComponent(PlatformerController);
		tempVar1.movement.walkSpeed=0;
	}
	
	if((scoreScript2.points>=4)&&(timeRemaining>=0))
	{
		playerHasLost=false;
		var tempVar2 = player.gameObject.GetComponent(PlatformerController);
		tempVar2.movement.walkSpeed=0;
	}
}