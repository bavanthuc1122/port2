import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function BTS() {
  // Sample BTS images
  const btsImages = [
    { id: 1, src: "/placeholder.svg?height=400&width=400", alt: "Behind the scenes 1" },
    { id: 2, src: "/placeholder.svg?height=400&width=400", alt: "Behind the scenes 2" },
    { id: 3, src: "/placeholder.svg?height=400&width=400", alt: "Behind the scenes 3" },
    { id: 4, src: "/placeholder.svg?height=400&width=400", alt: "Behind the scenes 4" },
    { id: 5, src: "/placeholder.svg?height=400&width=400", alt: "Behind the scenes 5" },
  ]

  // Sample architecture images
  const architectureImages = [
    { id: 1, src: "/placeholder.svg?height=400&width=600", alt: "Architecture 1" },
    { id: 2, src: "/placeholder.svg?height=400&width=600", alt: "Architecture 2" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="w-full max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-light mb-1">Be High The Scene</h1>
          <p className="text-sm text-white/70">A closer perspective</p>
        </div>

        {/* Top BTS Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 bg-[#1e1e1e] rounded-lg p-4">
          <div className="aspect-square bg-[#2a2a2a] rounded-md"></div>

          <div className="grid grid-cols-2 gap-2">
            {btsImages.slice(0, 5).map((image) => (
              <div key={image.id} className="image-card">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={200}
                  height={200}
                  className="aspect-square object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl text-center mb-8">Title Be High The Scene</h2>

        {/* Bottom Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="grid grid-cols-3 gap-2">
            {btsImages.slice(0, 3).map((image) => (
              <div key={image.id} className="image-card">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={200}
                  height={200}
                  className="aspect-square object-cover"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2">
            {architectureImages.map((image) => (
              <div key={image.id} className="image-card">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={300}
                  height={200}
                  className="aspect-video object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
