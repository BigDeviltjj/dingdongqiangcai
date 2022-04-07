back()
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
	// 是否有结算按钮
    toast('111')
	if (hasText("结算")) {
		// 点击结算
        toast('222')
//		text("结算").parent().click()
        className("android.widget.TextView").depth(19).findOne().click()
//        text("结算").findOne().click()
		sleep(1000)
		start()
	} else if (hasText('非常抱歉，当前商品运力不足(063)') || hasText('很抱歉，下单失败')) {
		// 返回上一页
        toast('333')
		back()
		sleep(1000)
		start()
	} else if (hasText('提交订单')) {
        toast('提交订单前')
		className("android.widget.TextView").text("提交订单").findOne().parent().click()
        toast('提交订单了')
		musicNotify()
		sleep(1000)
		start()
	} else {
		toast('停止活动了')
		musicNotify()
		sleep(1000)
	    start()
	}
//    toast('444')
	//start()
}
start()

// const appName = "盒马";
// launchApp(appName);
// sleep(3000);
// media.pauseMusic()
// sleep(7000)
// media.stopMusic()