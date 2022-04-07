const appName = "美团买菜";
launchApp(appName);
sleep(1000);

auto.waitFor()
// 点击结算
const clickSettle = () => {
	className("android.view.View").depth(21).findOne().parent().click()
}
// 点击我知道了
const clickKnow = () => {
	className("android.view.View").depth(15).findOne().parent().click()
}
//点击放弃机会
const clickGiveup= () => {
	className("android.widget.TextView").text("放弃机会").findOne().parent().parent().click()
}
// 点击立刻支付
const clickPay = () => {
	className("android.widget.TextView").text("立即支付").findOne().parent().click()
}

const hasText = (text) => {
	return textStartsWith(text).exists() // 是否存在指定文本
}

const start = () => {
	// 是否有结算按钮
	toast("start")
    if (hasText('当前不在可下单时段') || hasText('很抱歉')) 
    {
		toast("我知道了")
		clickKnow()
		sleep(1000)
		start()
	} 
	else if (hasText("结算")) 
    {
		// 点击结算
		toast("结算")
		clickSettle()
		sleep(1000)
		start()
	} 
    else if (hasText('立即支付')) 
    {
		toast("立即支付")
		clickPay()
		sleep(1000)
		start()
        toast('抢到了')
	} 
	else if (hasText('放弃机会')) 
    {
		toast("放弃机会")
		clickGiveup()
		sleep(1000)
		start()
	} 
    else 
    {
        toast('???')
        sleep(1000)
		start()
	}
}

start()