import {Element} from "@/types";
import {fetch} from "next/dist/compiled/@edge-runtime/primitives";


const URL = `${process.env.NEXT_PUBLIC_API_URL}/element`
const getElement = async():Promise<Element[]> =>{
   const res = await fetch(URL)
   return res.json()
}

export default getElement;