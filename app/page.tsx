import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full max-w-6xl mx-auto px-4 mb-8 rounded-lg overflow-hidden">
        <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Two cats - a white fluffy cat and a tabby cat"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30 flex items-end p-8">
            <h1 className="text-4xl md:text-5xl font-light">Photographer</h1>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="w-full max-w-6xl mx-auto px-4 mb-12">
        <h2 className="text-2xl mb-6">About Us</h2>

        <div className="grid md:grid-cols-2 gap-6 bg-[#2a2a2a] rounded-lg p-6">
          <div className="flex flex-col">
            <div className="relative aspect-[3/4] rounded-md overflow-hidden mb-4">
              <Image
                src="/placeholder.svg?height=600&width=450"
                alt="Portrait photography sample"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl mb-2">SKILL COLLECTION</h3>
            <div className="grid grid-cols-2 gap-2 mb-4">
              <button className="skill-button text-left">PORTRAIT</button>
              <button className="skill-button text-left">FASHION</button>
              <button className="skill-button text-left">COMMERCIAL</button>
              <button className="skill-button text-left">PRODUCT</button>
            </div>
            <Link href="/portfolio" className="see-all self-start">
              SEE ALL
            </Link>
          </div>

          <div className="relative">
            <div className="relative aspect-square md:aspect-auto md:h-full rounded-md overflow-hidden transform rotate-3">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Photography portfolio collage"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Welcome to Portfolio */}
      <section className="w-full max-w-6xl mx-auto px-4 mb-12">
        <h2 className="text-3xl text-center mb-8">Welcome to Portfolio</h2>

        <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
          <div className="md:w-1/3">
            <h3 className="text-2xl mb-2">I tell your story</h3>
            <p className="text-2xl">in pictures</p>
          </div>

          <div className="md:w-2/3 relative h-[300px]">
            <div className="absolute top-0 left-[10%] w-[30%] h-[80%] rounded-md overflow-hidden transform -rotate-6">
              <Image
                src="/placeholder.svg?height=300&width=200"
                alt="Portfolio image 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-[10%] left-[35%] w-[30%] h-[80%] rounded-md overflow-hidden transform rotate-3 z-10">
              <Image
                src="/placeholder.svg?height=300&width=200"
                alt="Portfolio image 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-[5%] right-[10%] w-[30%] h-[80%] rounded-md overflow-hidden transform -rotate-3">
              <Image
                src="/placeholder.svg?height=300&width=200"
                alt="Portfolio image 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
