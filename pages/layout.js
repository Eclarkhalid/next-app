
import Navbar from "@/components/navbar"
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"
import logo from '../images/edens-logo.png'

export default function Layout( {children}) {
  const { data: session } = useSession()
  if(session) {
    return <>
    
          <div className="layout flex min-h-screen text-black p-10 ">
          <Navbar />
          <div className=" flex-col bg-white shadow-md flex-grow rounded-lg">
            {children}
            
            </div>
          </div>
    </>
  }
  return <>

<section className="wrapper mt-24">
        <div className="container-xl">
          <div className="row">
            <div className="flex items-center justify-between flex-wrap flex-col m-auto">
            <div className="mb-8">
                <div className="mb-4">
                <Image src={logo} alt="logo"  className="w-100 h-50"/>
                </div>
           <div className="text-center mt-8">
            <h2 className="text-2xl">You should Login To have Admin Access</h2>
            </div> <br/>
            </div>
            <div>
            <button className="px-6 py-4 text-white bg-blue-900 rounded-lg" onClick={() => signIn('google')}>Sign in</button>
            </div>
            
            <div className=" mt-32">
              <p>This website was created by <b>Eclar Khalid</b> using Next.js</p>
            </div>
            </div>
          </div>
        </div>
      </section>
    
    
  </>
}