#pragma strict

var explosionPrefab : GameObject; // 爆発エフェクト

function ApplyDamage () {
 // エフェクトを出しつつ、自身のゲームオブジェクトを破棄
 Instantiate(explosionPrefab, transform.position, transform.rotation);
 Destroy(gameObject);
}