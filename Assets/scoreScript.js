static var points : int;
static var triggered : boolean = false;
static var timeGotSphere : float = 0;
static var timeAfterGotSphere : float = 0;
var canTake : boolean = true;
static var myPlayer : GameObject;
var clip : AudioClip;
static var target : String = "unity";
static var index : int = 0; //balls in corect order taken so far
static var soFar : String;
static var ballsGot : int=0;

function OnTriggerEnter (myTrigger : Collider) 
{
	var time = 1.5;
	var i = 0.0;
	var rate = 1.0/time;
	
	
	if (gameObject.renderer.material.mainTexture.ToString()[0]==target[index])  //check if correct ball collected
		{
		index++;
		soFar=soFar+gameObject.renderer.material.mainTexture.ToString()[0];
	}
	
	if (myTrigger.gameObject.name == "Character (Lerpz)" ) { //only Lerpz can collect balls
	startPoint = transform.position;
	endPoint = Vector3 (transform.position.x, (transform.position.y + 3), transform.position.z);
	
	while (i < 1.0)  //ball is in the air
	{
	       i += Time.deltaTime * rate;
	       transform.position = Vector3.Lerp(startPoint, endPoint, i);
	       yield; 
    }
    AudioSource.PlayClipAtPoint(clip, Vector3 (0,0,0)); 
	yield WaitForSeconds (0.5);
	Destroy (gameObject);
	ballsGot++;
	Debug.Log(ballsGot);
	}
		
	
	
	if ((myTrigger.gameObject.name == "Character (Lerpz)" )&& (triggered==false)) //power pill
	{
		myPlayer = myTrigger.gameObject;
		var tempVar = myTrigger.gameObject.GetComponent(PlatformerController);
	    if (canTake==true) 
	    {
	    	tempVar.jump.height = tempVar.jump.height+8;
	    	points++;
	    	timeGotSphere=Time.time; 
	    	canTake=false;
	    	triggered=true;
	   }
	   Debug.Log ("height:  "+tempVar.jump.height + "   points:  " + points);
	}
}


function Update () 
{
		timeAfterGotSphere=Time.time-timeGotSphere; //expire power pill
		
		if((timeAfterGotSphere<=6.0) && (timeGotSphere>0))
		{
			canTake=false;
		}
		else 
		{
			
			if(triggered==true)
			{
				var tempV = myPlayer.gameObject.GetComponent(PlatformerController);
				tempV.jump.height =1;
			}
			triggered=false;
			canTake=true;
			timeAfterGotSphere=0;
			timeGotSphere=0;
		}
}