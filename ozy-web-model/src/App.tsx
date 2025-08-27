
import HomePage from './pages/Home.tsx';
import ProjectsPage from './pages/Projects.tsx';
import ContactsPage from './pages/Contacts.tsx';
import BlogsPage from './pages/Blogs.tsx';
import ArticlePage from './pages/Article.tsx';
import NavBar from './components/Band.tsx'
import ScrollTopButton from './components/ScrollButton.tsx';
import NotFoundPage from './pages/NotFound.tsx';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import useWindowDimensions from './components/WindowInfos.tsx';






function App() {
  const { height, width} = useWindowDimensions();
  (height);
  let mobile:boolean = width<960;
  let compact:boolean = width<1500;
  return (
    <Router>
      <div>
        <ScrollTopButton />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div style={{ padding: '24px', paddingTop:'80px', paddingBottom:'80px'}}>
          
            <Routes>
              <Route path="/" element={<HomePage is_mobile={mobile} />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="/blogs" element={<BlogsPage />} />
              <Route path="/blogs/:slug" element={<ArticlePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
        <NavBar is_compact={compact} is_mobile={mobile}/>
    </div>
  </Router>
)}

export default App;