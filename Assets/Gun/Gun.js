#pragma strict


var bulletPrefab : GameObject; // 弾丸のプレハブ
var initialVelocity : float; // 弾丸の初速

function Update() {
	 if (Input.GetButtonDown("Fire1")) {
		 //弾丸のインスタンス化
		 var bullet : GameObject =
		  Instantiate(bulletPrefab, transform.position, transform.rotation);
		 //前方向への速度ベクトルを設定する
		 var direction : Vector3 = transform.forward;
		 bullet.GetComponent.<Rigidbody>().velocity = direction * initialVelocity;
	 }
}
		