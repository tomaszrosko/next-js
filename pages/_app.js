import Header from "@/components/header";
import Footer from "@/components/footer";
import '@/styles/globals.css'
import '@/styles/header.css'
import '@/styles/footer.css'


export default function App({Component, pageProps}) {

    if (Component.getLayout) {
       return Component.getLayout (
           <Component {...pageProps} />
       )
    } else {
        return (
            <>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </>
        )
    }
}

