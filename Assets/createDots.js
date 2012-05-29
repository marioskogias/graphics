var myDot : GameObject;
static var images : String = "autcynfi"; //letters->prefabs prefab order

function Start()
{
     // Store different positions in an Array:
     var aPositions : Array = [ new Vector3(10, 2, 0), new Vector3(12, 2, 0), new Vector3(14.5, 4, 0), new Vector3(20, 8, 0), new Vector3(35, 3, 0), new Vector3(35, 18, 0),
     	new Vector3(25, 18, 0), new Vector3(40, 17, 0), new Vector3(25, 5, 0), new Vector3(15, 25, 0), new Vector3(30, 25, 0)];

 
    var rot : Quaternion = Quaternion.identity;
 	var x; //for the new instances of myDot
 	
 	var mixed = images.ToCharArray();
 	var index1;
 	var index2;
 	var temp;
 	 	 	
 	for (i=1;i<=10;i++) { //re-index randomly
 		index1 = Random.Range(0,7);
 		index2 = Random.Range(0,7);
 		temp=mixed[index1];
 		mixed[index1]=mixed[index2];
 		mixed[index2]=temp;
 		
 	}
	
      // Loop as many times as there are elements in the aPositions Array:
    for(i=0; i<aPositions.length; i++)
     {
          //Debug.Log ("Placed dot no. " + (i+1));
		x = Instantiate(myDot, aPositions[i], rot); // Put a new dot on the screen using the i'th position   
    	x.renderer.material.mainTexture=Resources.Load(mixed[i%8].ToString()); //11 balls 8 prefabs
    	  	
      }
    
		
}


function Update()
{
}