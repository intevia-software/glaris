

import Navbar from './components/Navbar'
import Bar from './components/Bar'
import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'
import Fourth from './components/Fourth'
import Five from './components/Five'
import './App.css';

function App() {
  return (
    <div className="App">
			<div className="w-full">
				<Navbar />
				<Bar />
				<First />
				<Second />
				<Third />
				<Fourth />
				<Five />
			</div>
		</div>
  );
}

export default App;
