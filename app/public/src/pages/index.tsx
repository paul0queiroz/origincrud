import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Hero from "./components/sections/hero";
import ContactForm from "./components/logimForm";


export default function Home() {
  return (
    <>
    <Hero/>
    <ContactForm></ContactForm>
    </>
    );
}
1