import { Outlet } from "react-router-dom"
import Header from "./Components/Molecules/Header/Header"
import SecondHeader from "./Components/Molecules/SecondHeader/SecondHeader"
import { useSecondHeader } from "./hooks/useSecondHeader"
import styles from './Layout.module.scss'

const Layout = ()=>{
      
    const secondHeader = useSecondHeader();
    const stylesMan =!secondHeader?{paddingTop:'54px'}:{paddingTop:'120px'}

    return(
        <>
            <Header />
            {secondHeader && <SecondHeader />}
            <main className={styles.main} style={stylesMan}>
            <Outlet />
            </main>
        </>
    )

}

export default Layout;