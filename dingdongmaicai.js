const appName = "叮咚买菜";
launchApp(appName);
sleep(1000);
const hasText = (text) => {
	return textStartsWith(text).exists() // 是否存在指定文本
}
cnt = 0
const start = () => {
	// 是否有结算按钮
    toast('111')
	if (textStartsWith("继续支付").exists()) {
		// if (text("继续支付").findOne().clickable()) {
			// text("继续支付").findOne().click()
		// }
		// else 
		// text("继续支付").findOne().parent().click()
		while (1) {}
		start()
	}
	if (textStartsWith("重新加载").exists()) {
		textStartsWith("重新加载").findOne().parent().click()
		while (textStartsWith("重新加载").exists()) {
			sleep(50)		
		}
		start()
	}
	else 
	if (textStartsWith("去结算").exists()) {
		textStartsWith("去结算").findOne().click()
		sleep(50)		
		start()
	}
	else 
	if (hasText("立即支付")) {
		toast("立即支付")
		text("立即支付").findOne().click()
		sleep(50)
	}
	else if (hasText("选择送达时间") && text("选择送达时间").findOne().clickable()) {
		toast("选择送达时间")
		text("选择送达时间").findOne().click()
		sleep(50)
	}
	else if (hasText("选择送达时间") && !text("选择送达时间").findOne().clickable()) {
		toast("选择时间段")
		var s = cnt % 4
		cnt += 1
		if (1 == 1) {
			var t = "09"
			if ((textStartsWith(t).exists())) {
				toast("time1")
				var list = textStartsWith(t).findOne().parent()
				var ignore = 0
				for(var i = 0; i < list.childCount(); i++){
					var ch = list.child(i);
					if (ch.text() == "已约满")
					{
						ignore = 1
						break
					}
				}
				if (ignore == 0) {
					textStartsWith(t).findOne().parent().click()
					sleep(500)
					start()
				}
			}
		}
		if (1 == 1) {
			var t = "10"
			if ((textStartsWith(t).exists())) {
				toast("time2")
				var list = textStartsWith(t).findOne().parent()
				var ignore = 0
				for(var i = 0; i < list.childCount(); i++){
					var ch = list.child(i);
					if (ch.text() == "已约满")
					{
						ignore = 1
						break
					}
				}
				if (ignore == 0) {
					textStartsWith(t).findOne().parent().click()
					sleep(500)
					start()
				}
			}
		}
		if (2 == 2) {
			var t = "14"
			if ((textStartsWith(t).exists())) {
				toast("time3")
				var list = textStartsWith(t).findOne().parent()
				var ignore = 0
				for(var i = 0; i < list.childCount(); i++){
					var ch = list.child(i);
					if (ch.text() == "已约满")
					{
						ignore = 1
						break
					}
				}
				if (ignore == 0) {
					textStartsWith(t).findOne().parent().click()
					sleep(500)
					start()
				}
			}
		}
		if (3 == 3) {
			var t = "18"
			if ((textStartsWith(t).exists())) {
				toast("time4")
				var list = textStartsWith(t).findOne().parent()
				var ignore = 0
				for(var i = 0; i < list.childCount(); i++){
					var ch = list.child(i);
					if (ch.text() == "已约满")
					{
						ignore = 1
						break
					}
				}
				if (ignore == 0) {
					textStartsWith(t).findOne().parent().click()
					sleep(500)
					start()
				}
			}

		}
		toast("全部约满")
		sleep(50)

		back()
		sleep(300)
		back()
		sleep(300)

		start()
		sleep(50)
	}
		
	start()
}
start()

// const appName = "盒马";
// launchApp(appName);
// sleep(3000);
// media.pauseMusic()
// sleep(7000)
// media.stopMusic()