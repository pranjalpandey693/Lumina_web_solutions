import { ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import TopBar from "./TopBar";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <TopBar />
      <Header />
      <main>{children}</main>
      <Footer />
      <a
        className="whatsapp"
        href="https://wa.me/919389426262"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        <MessageCircle color="#fff" />
      </a>
    </>
  );
}
