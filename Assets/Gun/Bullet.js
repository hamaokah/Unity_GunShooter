#pragma strict

function OnCollisionEnter(collisionInfo : Collision){
 if (collisionInfo.gameObject.tag == "Box"){
  // ダメージメッセージを送信する
  collisionInfo.gameObject.SendMessage("ApplyDamage");
 }
}