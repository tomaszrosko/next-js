import Footer from "@/components/footer";
import Header from "@/components/header";
import {useState} from "react";

//tu maja byc dane o dolarze z maja pobrane od klienta
function About() {
    const [kurs, setKurs] = useState([])
    return (
        <article>
            <h1 className={"title flex justify-center"}>Kurs dolara w maju 2023</h1>
        </article>
    )
}

export default About

About.getLayout = function PageLayout(page) {
    return (
        <>
            <Header/>
            {page}
            <Footer/>
        </>
    )
}
