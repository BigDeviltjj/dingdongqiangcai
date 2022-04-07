const appName = "盒马";
launchApp(appName);
sleep(3000);
auto.waitFor()
// 点击按钮
const clickSettle = () => {
	id('button_cart_charge').findOne().click()
}
const hasText = (text) => {
	return textStartsWith(text).exists() // 是否存在指定文本
}
const musicNotify = () => {
//	const m = '/storage/emulated/0/Android/data/com.tencent.mm/MicroMsg/Download/大籽-白月光与朱砂痣.mp3'
//	media.playMusic(m);
	sleep(1000);
}
const start = () => {
	sleep(1000)		
	// 是否有结算按钮
    toast('111')
	if (desc("活动").exists()) {
		desc("活动").findOne().click()
		sleep(1000)		
		start()
	}
	else 
	if (hasText("立即下单")) {
		toast("立即下单")
		var xd = text("立即下单").find()
		sleep(1000)		
		toast(xd.length)
		sleep(1000)		
		
		if (xd.empty()) {
			back()
			sleep(1000)		
			start()
		}
		else {
			for(var i = 0; i < xd.length; i++){
				var tv = xd[i];
				if (tv.parent().clickable()) {
					toast("可以点击")
					tv.parent().click()
					sleep(1000)
					start()
				}
			}	
			back()
		}
	}
	else 
		if (hasText("结算")) {
			// 点击结算
        	toast('222')
			text("结算").parent().click()
			sleep(1000)
		
		}
		else if (hasText('提交订单')) {
			    toast('提交订单前')
				if (text("提交订单").findOne().clickable()) {
					toast('提交订单可以点击')
					sleep(1000)
					className("android.widget.TextView").text("提交订单").findOne().parent().click()
			    	toast('提交订单了')
					sleep(3000)
					if (text("提交订单").findOne()) {
						toast('提交不了')
						back()
						sleep(1000)
					} 
					else {
						start()
					}
				}
				else {
					toast('提交订单不行啊')
					back()
				}
			}

	start()

}
start()
