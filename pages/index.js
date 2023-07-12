/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "./layout";
import { useSession } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession();
 return  <>
 <Layout>
    <div className="layout mb-8 flex justify-between p-6 mx-4 my-5 shadow-sm ">
            
            <div className="">
            <span>
            Hello, <b>{session?.user?.name}</b>
            </span>
            </div>
            <div className="flex text-center overflow-hidden rounded-lg items-center text-white  mr-4">
              <Link href={'/'}><img className="w-10 h-10 rounded-full" src={session?.user?.image} alt="" /></Link>
              
            </div>
            </div>
  </Layout>
 </>
}