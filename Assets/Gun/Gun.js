#pragma strict


var bulletPrefab : GameObject; // 弾丸のプレハブ
var initialVelocity : float; // 弾丸の初速

function Update() {
	 if (Input.GetButtonDown("Fire1")) {
		 //弾丸のインスタンス化
		 var bullet : GameObject =
		  Instantiate(bulletPrefab, transform.position, transform.rotation);
		 //クリックした点をワールド座標系に変換
		 var screenPoint = Input.mousePosition;
		 screenPoint.z = 10.0;
		 var worldPoint = GetComponent.<Camera>().ScreenToWorldPoint(screenPoint);
		 //クリックした点へ向かうベクトルを速度ベクトルとして設定
		 var direction = (worldPoint - transform.position).normalized;
		 bullet.GetComponent.<Rigidbody>().velocity = direction * initialVelocity;
	 }
}
		