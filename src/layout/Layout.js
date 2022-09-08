import H1 from "../components/H1"
import Header from "../components/Header"
import MainContainer from "../components/MainContainer"

const Layout = ({ children, title, countCart }) => {
  return (
    <>
      <Header countCart={countCart} />
      <MainContainer>
        <H1 title={title} />
        {children}
      </MainContainer>
    </>
  )
}

export default Layout
