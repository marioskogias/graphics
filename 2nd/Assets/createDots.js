var myDot : GameObject;
 
function Awake() {

	 DontDestroyOnLoad (transform.dataObject);
	
}

function Start()
{
     // Store different positions in an Array:
     var aPositions : Array = [ new Vector3(10, 2, 0),
										new Vector3(12, 2, 0),
										new Vector3(30, 4, 0),
										new Vector3(32, 4, 0)
                                      ];
 
     var rot : Quaternion = Quaternion.identity;
 
     // Loop as many times as there are elements in the aPositions Array:
     for(i=0; i<aPositions.length; i++)
     {
          //Debug.Log ("Placed dot no. " + (i+1));
		  Instantiate(myDot, aPositions[i], rot); // Put a new dot on the screen using the i'th position   
     }
     
     
    
}


function Update()
{
	Debug.Log(data.difficulty);
}