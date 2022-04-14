import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import { useState } from 'react/cjs/react.production.min';

function App() {

  const [pages] = useState([
    {
      name: 'about me',
      description: 'Photo of Daniel and information about who he is'
    },
    {
      name: 'portfolio',
      description: 'Browsing projects Daniel has completed'
    },
    {
      name: 'contact me',
      description: 'Contact form you can fill out so Daniel can get in touch with you'
    },
    {
      name: 'resume',
      description: 'Daniels professional resume'
    },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className="App">
      <Nav 
        pages = {pages}
        setCurrentPage = {setCurrentPage}
        currentPage = {currentPage}
      ></Nav>
      <main>
        <Page currentPage = {currentPage}></Page>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
