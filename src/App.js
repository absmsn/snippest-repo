import './App.css';
import 'antd/dist/antd.css';
import SnippestList from './views/SnippestList';
import SnippestDetail from './views/SnippestDetail';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<SnippestList/>}>
          </Route>
          <Route path="/snippest/:id" element={<SnippestDetail/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
