const Title = (props) => {
    return (
        <section className=" bg-defaultRaz bg-left bg-repeat-x bg-[length:679px_679px]">
            <div className="bg-stone-100 bg-opacity-95 w-full h-full pt-[2%] px-[5%] pb-[5%]">
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li className="text-primary-black">{props.breadcrumbs}</li>
                        <li className="text-primary-black">{props.breadcrumbs2}</li>
                    </ul>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl xl:pb-5 text-primary-black">{props.title}</h1>
                    <p className="text-sm md:text-base text-primary-black">{props.description}</p>
                </div>
            </div>
        </section>
    )
}

export default Title;