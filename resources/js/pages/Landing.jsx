import Navbar from "../landing/navbar";
import Hero from "../landing/hero";
import About from "../landing/about";
import Features from "../landing/features";
import Workflow from "../landing/workflow";
import Screenshots from "../landing/screenshots";
import Contact from "../landing/contact";
import Footer from "../landing/footer";

export default function Landing() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <About />
                <Features />
                <Workflow />
                <Screenshots />
                <Contact />
            </main>

            <Footer />
        </>
    );
}