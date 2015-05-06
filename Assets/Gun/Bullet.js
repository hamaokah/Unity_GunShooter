#pragma strict

function OnCollisionEnter(collisionInfo : Collision){
 if (collisionInfo.gameObject.tag == "Box"){
	 Destroy(collisionInfo.gameObject);
 }
}