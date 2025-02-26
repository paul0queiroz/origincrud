import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Hero from "./components/sections/hero";
import ContactForm from "./components/logimForm";
import Header from "./components/sections/header";


export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <ContactForm></ContactForm>
    </>
    );
}
1