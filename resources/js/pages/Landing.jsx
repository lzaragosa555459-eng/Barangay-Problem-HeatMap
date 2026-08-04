import Navbar from "../landing/Navbar";
import Hero from "../landing/hero";
import About from "../landing/About";
import Features from "../landing/Features";
import Workflow from "../landing/workflow";
import Screenshots from "../landing/Screenshots";
import Contact from "../landing/contact";
import Footer from "../landing/Footer";

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