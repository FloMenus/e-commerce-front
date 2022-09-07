import H1 from "../components/H1";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <MainContainer>
        <H1 />
        {children}
      </MainContainer>
    </>
  );
};

export default Layout;
