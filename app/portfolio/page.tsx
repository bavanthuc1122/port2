import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Portfolio() {
  // Categories for the portfolio
  const categories = ["ALL", "PORTRAIT", "BEAUTY", "LOOKBOOK", "FASHION", "CONCEPT"]

  // Sample portfolio items (in a real app, this would come from a database or CMS)
  const portfolioItems = Array(12)
    .fill(null)
    .map((_, i) => ({
      id: i + 1,
      title: `Cat Portrait ${i + 1}`,
      category: "PORTRAIT",
      image: "/placeholder.svg?height=400&width=400",
    }))

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="w-full max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-light mb-1">WORK IMAGE</h1>
          <p className="text-sm text-white/70">Darkness is cute of light</p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`text-sm hover:text-white transition-colors ${
                category === "ALL" ? "text-white" : "text-white/70"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {portfolioItems.map((item) => (
            <div key={item.id} className="image-card">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={400}
                height={400}
                className="aspect-square object-cover"
              />
              <div className="image-overlay">
                <div>
                  <h3 className="text-sm font-medium">{item.title}</h3>
                  <p className="text-xs text-white/70">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
