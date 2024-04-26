import styles from "@/app/style/pageLayout.module.css";
import Dashboard from "@/app/components/Dashboard";
import { Inclusive_Sans } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import { Toaster } from "react-hot-toast";
import "@/app/style/global.css";

const Inclusive = Inclusive_Sans({ weight: "400", subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("http://www.lassanability.com/"),
  title: "Lassana - Portfolio",
  applicationName: "Lassana",
  author: "Lassana",
  images:
    "https://raw.githubusercontent.com/zero-stealth/lassana/master/src/assets/banner.png",
  description: "Get cyber security experty, graphic designs and programming",
  metadataBase: new URL("http://www.lassanability.com/"),
  keywords: [
    "Lassana",
    "Portfolio",
    "Cyber security",
    " programmig ",
    " Design ",
  ],
  openGraph: {
    title: "Lassana - Portfolio",
    description: "Get cyber security experty, graphic designs and programming",
    url: "http://www.lassanability.com//",
    siteName: "Lassana",
    images:
      "https://raw.githubusercontent.com/zero-stealth/Lassana/master/src/assets/banner.png",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Inclusive.className}>
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            className: "",
            duration: 8000,
            style: {
              background: "#ffff",
              color: "#5CB85C",
            },
          }}
        />
        <div className={styles.pageLayout}>
      
          <div className={styles.layoutContent}>
            <Dashboard />
            <Navbar />
          </div>
          <div className={styles.pageContentLayout}>{children}</div>
        </div>
      </body>
    </html>
  );
}
