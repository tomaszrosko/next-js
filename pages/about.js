import Footer from "@/components/footer";
import Header from "@/components/header";
import {useState, useEffect} from "react";

//tu maja byc dane o dolarze z maja pobrane od klienta
function About() {
    const [kurs, setKurs] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('http://api.nbp.pl/api/exchangerates/rates/c/usd/2016-04-04/?format=json')
            .then((res) => res.json())
            .then((kurs) => {
                setKurs(kurs)
                setLoading(false)
            })
    }, [])
    if (isLoading) return <p>Loading...</p>
    if (!kurs) return <p>No profile data</p>
    return (
        <article>
            <h1 className={"title flex justify-center"}>Kurs {kurs.currency} w maju 2023</h1>
            <div>
            </div>
        </article>
    )
}

export default About

About.getLayout = function PageLayout(page) {
    return (
        <>
            <Header/> {page} <Footer/>
        </>
    )
}
