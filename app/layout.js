import {Header} from './Components/Header/Header.jsx'
import {Footer} from './Components/Footer/Footer.jsx'
import "./globals.css";


export const metadata = {
  title: "Pindie",
  description: "Портал инди-игр от студентов Яндекс Практикума",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
};