import { useState, useEffect } from "react"

function App() {
	const [weather, setWeather] = useState()
	useEffect(() => {
		async function getData() {
			const res = await fetch(
				"https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json"
			)
			const json = await res.json()
			setWeather(json[0].timeSeries[0].areas)
		}
		getData()
	}, [])
	return (
		weather && (
			<>
				<h1>天気アプリ</h1>
				<ul>
					{weather.map((area, i) => (
						<li key={i}>
							<p>
								<span>地方名：</span>
								<i>{area.area.name}</i>
							</p>
							<span className="line"></span>
							<p>
								<span>今日の天気：</span>
								<i>{area.weathers[0]}</i>
							</p>
							<p>
								<span>明日の天気：</span>
								<i>{area.weathers[1]}</i>
							</p>
							<p>
								<span>明後日の天気：</span>
								<i>{area.weathers[2]}</i>
							</p>
							<span className="line"></span>
							<p>
								<span>今日の風：</span>
								<i>{area.winds[0]}</i>
							</p>
							<p>
								<span>明日の風：</span>
								<i>{area.winds[1]}</i>
							</p>
							<p>
								<span>明後日の風：</span>
								<i>{area.winds[2]}</i>
							</p>
						</li>
					))}
				</ul>
			</>
		)
	)
}

export default App
