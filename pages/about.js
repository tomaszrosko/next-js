import Footer from "@/components/footer";
import Header from "@/components/header";
import {useEffect, useState} from "react";

//tu maja byc dane o dolarze z maja pobrane od klienta
function About() {
    const [kurs, setKurs] = useState([])
    useEffect(() => {
        fetch('https://api.nbp.pl/api/exchangerates/rates/a/usd/2023-05-01/2023-05-31/?format=json)')
            .then(res => res.json())
            .then(data => setKurs(data?.rates || []))
    }, [])
    return (
        <article>
            <h1 className={"title flex justify-center"}>Kurs dolara w maju 2023</h1>
            <div className={'grid grid-cols-2 mx-auto gap-x-5 '}>
                {kurs.map((rate, index) => {
                    return (
                        <>
                            <p>{rate?.effectiveDate}</p>
                            <p>{rate.mid}</p>
                        </>
                    )
                })}
            </div>
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
