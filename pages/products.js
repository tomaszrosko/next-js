import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";

export const getStaticProps = async () => {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();

    return {
        props:  { cart: data}
    }
}

const Products = ({ cart }) => {

    const arrIteams = cart.products;
    console.log(arrIteams)

    return (
        <div className={"grid grid-cols-4 gap-24"}>

            {arrIteams.map((iteam, index) => {

                return (
                    <>
                        <a href={iteam.thumbnail} className={"box-product"}>
                            <Image src={iteam.thumbnail} alt={iteam.description}  className="w-100 rounded-full"
                                width={320}
                                height={280} ></Image>
                        <p className={"text-white-600 px-2"}>{"Recommended product:"} {iteam.title}</p>
                        <p className={"text-white-600 px-2"}>{iteam.description}</p>
                            <p className={"text-red-600 px-2"}>{"Price:"} {iteam.price}</p>
                        </a>
                    </>
                )
            })}
        </div>
    )
}

export default Products

Products.getLayout = function PageLayout(page) {
    return (
        <>
            <Header/>
            {page}
            <Footer/>
        </>
    )
}
