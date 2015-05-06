#pragma strict

var explosionPrefab : GameObject; // 爆発エフェクト

private var damaged : boolean; // 「ダメージを受けた」
private var killTimer_sec : float; // 消滅までの時間

function ApplyDamage () {
 if (!damaged){
  damaged = true;
  killTimer_sec = 0.4;
  
  // 上方向に衝撃を与える
  GetComponent.<Rigidbody>().AddForce(Vector3.up * 12.0, ForceMode.Impulse);
  }
 }

 function Update (){
  if (!damaged) return;
  killTimer_sec -= Time.deltaTime; 
  if (killTimer_sec <= 0.0){ 
  // エフェクトを出しつつ、自身のゲームオブジェクトを破棄
  Instantiate(explosionPrefab, transform.position, transform.rotation);
  Destroy(gameObject);
  }
 }