import { Fragment } from "react"
import Title from "../../components/Title"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

const Chat = () => {
    return (
        <Fragment>
            <Header />
            <Title
                isBreadcrumbs={false}
                breadcrumbs=""
                breadcrumbs2=""
                title="Chat"
                description="See your notifications for the latest updates"
            />
            <main className="p-[5%]">
                
            </main>
            <Footer />
        </Fragment>
    )
}

export default Chat