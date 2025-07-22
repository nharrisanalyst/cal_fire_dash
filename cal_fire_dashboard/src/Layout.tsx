import { Outlet } from "react-router-dom"
import Header from "./Components/Molecules/Header/Header"
import SecondHeader from "./Components/Molecules/SecondHeader/SecondHeader"
import { useSecondHeader } from "./hooks/useSecondHeader"

const Layout = ()=>{
      
    const secondHeader = useSecondHeader();
    console.log(secondHeader, 'useSecondHeader')
    const styles =!secondHeader?{paddingTop:'54px'}:{paddingTop:'109px'}

    return(
        <>
            <Header />
            {secondHeader && <SecondHeader />}
            <main style={styles}>
            <Outlet />
            </main>
        </>
    )

}

export default Layout;