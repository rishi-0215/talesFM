import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer/footer";
import { getFooterContent } from "@/lib/getFooterContent";
import Navbar from "@/components/Navbar/Navbar";
import NavigationLogger from "@/components/NavigationLogger/NavigationLogger";
import RouteGuard from "@/components/RouteGuard/RouteGuard";
// import ScrollLogger from '@/components/ScrollLogger/ScrollLogger';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "TalesFM - Your All-in-one Audio World",
  description:
    "Discover, stream, and share your favorite music with the world's most advanced music platform",
};

export default async function RootLayout({ children }) {
  //const footer = await getFooterContent();
  const footer = null;

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        <script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MKC378MQ');`}</script>
        {/* End Google Tag Manager */}
        <meta
          name="google-site-verification"
          content="xCCIFa9ykS-XbwCH0Cod35I8bNYAptpNCiKQXR6h5PE"
        />

        <link rel="preload" href="/mobile.png" as="image" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased bg-black text-white overflow-x-hidden`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MKC378MQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {process.env.NODE_ENV === "production" && <NavigationLogger />}
        <RouteGuard />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          {/*<ScrollLogger />*/}
          <main className="flex-1">{children}</main>
          <Footer footer={footer} />
        </div>
      </body>
    </html>
  );
}
