
import './App.css';
import Main from './components/Main';
import Navbar  from './components/Navbar';
import Sidebar from './components/Sidebar';
import contentData from './components/contentData'
import Footer from './components/Footer';

function App() {
  const contentElement = contentData.map(item => {
    return <Sidebar content={item.content} />
  })
  return (
    <div className="App">
      <Navbar />
      <div className='content row'>
        <div className='sidebarBox col-3'>
          {contentElement}
        </div>
        <div className='mainBox col-9'>
          <Main />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
