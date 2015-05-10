#pragma strict


var interval_sec : float; // 箱を生成する間隔
var redBoxPrefab : GameObject; // 赤箱のプレハブ
var blueBoxPrefab : GameObject; // 青箱のプレハブ

private var nextIsRed : boolean; // 色を切り替えるための変数
private var timer : float; //　次に箱を生成するまでの時間

function Start() {
	// 最初の箱の予約
	nextIsRed = true;
	timer = 0.0;
}

function Update() {
	timer -= Time.deltaTime;
	if (timer < 0.0) {
		// 位置と姿勢にランダム成分を与えつつ、箱のプレハブをインスタンス化する
		var offsx : float = Random.Range(-8.0, 8.0);
		var offsz : float = Random.Range(-2.0, 2.0);
		var position : Vector3 = transform.position + Vector3(offsx, 0, offsz);
		
		// いずれかの箱のプレハブをインスタンス化する
		var prefab : GameObject = nextIsRed ? redBoxPrefab : blueBoxPrefab;
		Instantiate(prefab, position, Random.rotation);
		
		// 次の箱の予約
		timer = interval_sec;
		nextIsRed = !nextIsRed;
	}
}