import About from "@components/Sections/AboutSection/AboutSection";
import Skills from "@componentsSection/SkillsSection/SkillsSection";
import Projects from "@componentsSection/ProjectsSection/ProjectsSection";
import Contact from "@componentsSection/ContactsSection/ContactsSection";


export default function Main() {
    return (
        <main className="main">
            <About />
            <Skills/>
            <Projects />
            <Contact />
        </main>
    );
}