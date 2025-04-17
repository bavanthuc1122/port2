import Link from "next/link"
import { Instagram, Facebook, Linkedin } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="w-full max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center bg-gradient-to-r from-[#1e1e1e] to-[#2a2a2a] rounded-lg p-8">
          <div className="md:w-1/3">
            <h1 className="text-2xl font-light mb-1">CONTACT</h1>
            <p className="text-sm text-white/70 mb-6">For Photography</p>

            <div className="w-full aspect-[3/4] bg-[#2a2a2a] rounded-md mb-6"></div>
          </div>

          <div className="md:w-2/3 flex flex-col gap-4">
            <h2 className="text-xl mb-2">Thức ( Photographer )</h2>
            <Link href="mailto:thucnhthuc@gmail.com" className="text-white/80 hover:text-white">
              thucnhthuc@gmail.com
            </Link>
            <p className="text-white/80">(+84) 0814019555</p>

            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center gap-4">
                <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                  <Instagram className="social-icon" />
                </Link>
                <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
                  <Facebook className="social-icon" />
                </Link>
                <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                  <Linkedin className="social-icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
