import "../styles/style.scss";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoreProvider from "./StoreProvider";

function RootLayout({ children, title }) {
  return (
    <>
      <html>
        <Head />
        <StoreProvider>
          <body>
            <Header />
            <main>
              <div className="wrapper">
                <h1 className="title">{title}</h1>
                {children}
              </div>
            </main>
            <Footer />
          </body>
        </StoreProvider>
      </html>
    </>
  );
}

export default RootLayout;
