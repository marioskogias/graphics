static var points : int=0;

function OnTriggerEnter (myTrigger : Collider) 
{
	var endPosition=Vector3(transform.position.x, (transform.position.y)+2, transform.position.z);
	transform.position = Vector3.Lerp(transform.position, endPosition, Time.time);	
	yield WaitForSeconds (0.5);
	renderer.enabled = false;	
	
	// score add
	if (myTrigger.gameObject.name == "Character (Lerpz)" )
		points++;

}

function Update () 
{
	
}
