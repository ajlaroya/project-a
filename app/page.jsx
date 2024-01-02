import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen">
        <Nav />

        {/* Hero */}
        <div className="flex bg-gradient-to-b from-stone-800 to-stone-600 w-full min-h-screen text-neutral-50 text-4xl font-semibold tracking-tighter text-pretty text-center items-center leading-tight px-16 md:px-64">
          At Vercel, we've developed Geist, a typeface specifically designed for
          developers and designers. We began by creating a monospace version
          that prioritized readability and seamlessly integrated into coding
          environments. After perfecting the monospace variant, we expanded
          Geist into a Sans version, adding versatility to its capabilities.
        </div>

        {/* Grid gallery */}
        <div className="flex flex-col items-center bg-neutral-100 w-full min-h-screen px-16 md:px-64 py-32">
          <div className="grid grid-cols-2 gap-y-8 gap-x-4 w-full">
            <div className="col-span-2">
              <img
                className="rounded-2xl mb-4 object-cover w-full h-[calc(100vh-74px)]"
                src="https://images.unsplash.com/photo-1648598884813-7dfd1c2886d9?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className="text-start text-xs uppercase">
                Horses, LA, on atlas supper club.
              </div>
            </div>
            <div className="rounded-2xl">
              <img
                className="rounded-2xl mb-4 object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1641688137759-ee4cede06b08?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className="text-start text-xs uppercase">
                A diamond on a blurry background .
              </div>
            </div>
            <div className="rounded-2xl">
              <img
                className="rounded-2xl mb-4 object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1702471896959-e6867cf48741?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className="text-start text-xs uppercase">
                A bunch of white objects.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
