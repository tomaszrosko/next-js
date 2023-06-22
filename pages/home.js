import Footer from "@/components/footer";
import Header from "@/components/header";

export const getStaticProps = async () => {
    const res = await fetch('https://api.nbp.pl/api/exchangerates/rates/a/usd/2023-05-01/2023-05-31/?format=json)');
    const data = await res.json();

    return {
     props:  { nbp: data}
    }
}

const Home = ({ nbp }) => {

    const arr = nbp.rates;
    console.log(arr)

return (
    <div>

        {arr.map((rate, index) => {

            return (
                <div>
                    <div className={"flex justify-center p-2"}>
                    <h1>Kursy {nbp.currency} w {rate.effectiveDate}:</h1>
                    <p className={"text-red-600 px-2"}>{rate.mid}</p>
                    </div>
                </div>
            )
        })}
    </div>
)
}

export default Home;



Home.getLayout = function PageLayout(page) {
    return (
        <>
            <Header />
            {page}
            <Footer />
        </>
    )
}