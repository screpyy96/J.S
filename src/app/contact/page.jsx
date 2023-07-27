"use client"
import WhatsAppChat from "@/whatsapp";
import Navbar from "../components/navbar/navbar";

export default function Contact () {
    return (
        <div>
            <div><Navbar/></div>
            <h2>Contact</h2>
           <WhatsAppChat/>
        </div>
    )
}