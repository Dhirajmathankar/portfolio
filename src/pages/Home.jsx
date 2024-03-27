import { Navbar, Main, Footer, About, Contact, Whychoose, Certification , WorkExpresince, Android, QalificationWork} from "../components";

function Home() {
  return (
    <>
      <Navbar />
      <section id="Home">
         <Main />
      </section>
      <section id="About">
         <About />
      </section>
      <section id="Whychoose">
        <Whychoose />
      </section>
      <section id="Certification">
         <Certification/>
      </section>
      <section id="WorkExpresince">
         <WorkExpresince/>
      </section>
      <section id="Android">
         <Android/>
      </section>
      <section id="QalificationWork">
         <QalificationWork/>
      </section>
      <section id="Contact">
         <Contact />
      </section>
      <section id="Footer">
         <Footer />
      </section>
    </>
  );
}

export default Home;
