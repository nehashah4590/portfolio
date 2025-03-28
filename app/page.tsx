'use client'
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { TiTick } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";
import { useSearchParams , useRouter} from "next/navigation"

export default function Home() {
    const searchparams= useSearchParams();
    const submit = searchparams.get('submit');
    const Router = useRouter();
  return (
    <main className="min-h-screen">
      {submit === "success" && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm z-[9999]">
          <div className="bg-white p-6 rounded-md shadow-xl text-center max-w-sm w-full relative z-[99999]">
            
            {/* Close Button */}
            <button onClick={() => Router.push("/")} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition">
              <RxCross1 className="w-5 h-5" />
            </button>

            {/* Success Icon */}
            <div className="flex w-full justify-center my-2">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full">
                <TiTick  className="text-white text-4xl my-2" />
              </div>
            </div>

            {/* Thank You Message */}
            <h2 className="text-xl font-semibold text-primary">Thank You!</h2>
            <p className="text-gray-700 text-sm mt-2">
              Your message has been received successfully. I will review it and get back to you shortly.
            </p>
            <p className="text-gray-500 mt-3 text-xs">
              If your inquiry is urgent, please reach out to us directly via email or phone.
            </p>
          </div>
        </div>
      )}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

