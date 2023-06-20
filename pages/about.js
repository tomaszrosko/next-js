import Footer from "@/components/footer";
import Header from "@/components/header";


function About() {
    return <h1 className={"title flex justify-center"}>Witamy w Piekarach w sanktuarium</h1>

}
export default About

About.getLayout = function PageLayout(page) {
    return (
        <>
            <Header />
            {page}
            <Footer />
        </>
    )
}