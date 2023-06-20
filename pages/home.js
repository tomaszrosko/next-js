import Footer from "@/components/footer";
import Header from "@/components/header";


function Home() {
    return <h1 className={"title flex justify-center"}>Witam w mojej jaskini wisielca</h1>
}
export default Home

Home.getLayout = function PageLayout(page) {
    return (
        <>
            <Header />
            {page}
            <Footer />
        </>
    )
}