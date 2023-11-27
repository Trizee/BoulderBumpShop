import About from "../Components/About"
import BorderBar from "../Components/BorderBar"
import Hero from "../Components/Hero"
import Services from "../Components/Services"

function Home() {
  return (
    <>
        <Hero />
        <BorderBar />
        <About />
        <BorderBar />
        <Services />
    </>
  )
}

export default Home