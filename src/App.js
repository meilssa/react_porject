import { Route } from 'react-router-dom'
import "./scss/style.scss";
import Header from './commponents/common/Header'
import Footer from './commponents/common/Footer'
import Main from './commponents/main/Main'
import Day6 from './commponents/sub/Day6'
import Itzy from './commponents/sub/Itzy'
import Location from './commponents/sub/Location'
import Nmixx from './commponents/sub/Nmixx'
import Twice from './commponents/sub/Twice'
import Questions from './commponents/sub/Questions';

function App() {
	return (
		<>
			<Header />
			<Route exact path="/">
				<Main />
			</Route>
			<Route path="/day6" component={Day6} />
			<Route path="/itzy" component={Itzy} />
			<Route path="/twice" component={Twice} />
			<Route path="/nmixx" component={Nmixx} />
			<Route path="/location" component={Location} />
			<Route path="/questions" component={Questions} />
			<Route exact path="/">
				<Footer />
			</Route>
		</>
	)
}

export default App
