import Footer from "@/components/footer";
import Header from "@/components/header";


function Contact() {
    return <h1 className={"title flex justify-center"}>Skontaktuj się z nami</h1>
}
export default Contact

Contact.getLayout = function PageLayout(page) {
    return (
        <>
            <Header />
            <main>
                {page}
            </main>
            <Footer />
        </>
    )
}