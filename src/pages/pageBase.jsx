import { Outlet } from "react-router-dom"
import GlobalStyles from "../components/GlobalStyles"
import Navigation from "../components/Navigation"
import Header from "../components/Header"
import MainContainer from "../components/MainContainer"
import FavoriteProvider from "../Contexts/Favorites"
import ScrollToTop from "../components/ScrollToTop"
import MoviesProvider from "../Contexts/Movies"
import Footer from "../components/Footer"

function PageBase() {

  return (
    <>
      <GlobalStyles/>
      <ScrollToTop/>
      <Header/>
      <Navigation/>
      <MoviesProvider> 
      <FavoriteProvider>
          <MainContainer>
            <Outlet/>
          </MainContainer>
      <Footer/>
      </FavoriteProvider>
      </MoviesProvider>  
    </>
  )
}

export default PageBase
