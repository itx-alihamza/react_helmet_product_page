
const Footer = () => {
    return (
        <footer className="min-w-screen text-white bg-[url(./assets/footer_bg_mb.png)] md:bg-[url(./assets/footer_bg.png)] bg-cover bg-center">
            <div className="w-full flex flex-col justify-around items-center lg:items-start lg:flex-row gap-10 px-8 py-10">
                <div className="flex flex-col gap-4 justify-center items-center lg:items-start  px-[clamp(10px_3vw+20px_100px)]">
                    <h1 className="responsive-heading text-2xl font-extrabold">TheWorkPlace</h1>
                    <p className="responsive-body">Hayatabad, Phase IV, Peshawar, Pakistan</p>
                </div>
                <div className="flex flex-col gap-4 items-center ">
                    <h1 className="font-extrabold responsive-heading">Quick Links</h1>
                    <ul className="flex flex-col gap-2 list-disc font-light">
                        <li className="underline cursor-pointer responsive-body"><a href='/'>Home</a></li>
                        <li className="underline cursor-pointer responsive-body"><a href='/'>About Us</a></li>
                        <li className="underline cursor-pointer responsive-body"><a href='/'>Our Project</a></li>
                        <li className="underline cursor-pointer responsive-body"><a href='/'>Pricing</a></li>
                        <li className="underline cursor-pointer responsive-body"><a href='/'>Contact</a></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4 items-center ">
                    <h1 className="font-extrabold responsive-heading">Important L</h1>
                    <ul className="flex flex-col gap-2 list-disc font-light">
                        <li className="underline cursor-pointer responsive-body"><a href='/'>Terms And Conditions</a></li>
                        <li className="underline cursor-pointer responsive-body"><a href='/'>Legals</a></li>
                        <li className="underline cursor-pointer responsive-body"><a href='/'>Business</a></li>
                        <li className="underline cursor-pointer responsive-body"><a href='/'>Partners</a></li>
                    </ul>
                </div>
            </div>
            <div className="w-full flex justify-center items-center border-t-[1px] px-20 py-4">
                <p className="responsive-body">© Copyright 2025 Astechsolutions</p>
            </div>
        </footer>
    )
}

export default Footer
