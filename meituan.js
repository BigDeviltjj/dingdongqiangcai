const appName = "美团买菜";
launchApp(appName);
sleep(1000);

auto.waitFor()
// 点击结算
const clickSettle = () => {
	className("android.widget.TextView").textStartsWith("结算").findOne().parent().click()
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
	if (hasText("前方拥堵") &&className("android.widget.TextView").text('返回购物车').exists()) 
    {
		toast("前方拥堵")
		sleep(200)
		className("android.widget.TextView").text('返回购物车').findOne().parent().click()
		sleep(200)
		start()
	} else
	if (hasText("重新加载")) 
    {
		toast("重新加载")
		sleep(200)
		className("android.widget.TextView").depth(20).findOne().parent().click()
		sleep(200)
		start()
	} else
    if ( hasText('订单已约满') || hasText('当前不在可下单时段') || hasText('很抱歉') || hasText('门店已打烊') || textContains("繁忙").exists()) 
    {
		toast("我知道了")
		sleep(200)
		clickKnow()
		sleep(200)
		start()
	} 
	else if (hasText("结算")) 
    {
		// 点击结算
		toast("结算")
		sleep(200)
		clickSettle()
		sleep(200)
		start()
	} 
    else if (hasText('立即支付')) 
    {
		toast("立即支付")
		clickPay()
		sleep(200)
		start()
        toast('抢到了')
	} 
	else if (hasText('放弃机会')) 
    {
		toast("放弃机会")
		clickGiveup()
		sleep(500)
		start()
	} 
    else 
    {
        toast('???')
        sleep(500)
		start()
	}
}

start()