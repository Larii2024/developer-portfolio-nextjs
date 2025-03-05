import React from 'react';
import { Contacts, Education,
  Experience, Landing, Navbar, Projects, Skills
} from '../components';
import BackToTop from '../components/back-to-top/back-to-top';
import ChangeTheme from '../components/change-theme/change-theme';


function HomePage() {

  return (
    <>
      <BackToTop />
      <ChangeTheme />
      <Navbar title='Larina'/>
      <Landing />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contacts />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://dev.to/api/articles?username=said7388');
  const data = await res.json();
  const filteredBlogs = data.sort(() => Math.random() - 0.5);

  return {
    props: {
      blogs: filteredBlogs
    },
  };
}

export default HomePage
