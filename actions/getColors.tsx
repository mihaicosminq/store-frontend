import {Color} from "@/types";
import {fetch} from "next/dist/compiled/@edge-runtime/primitives";


const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`
const getColors = async():Promise<Color[]> =>{
   const res = await fetch(URL)
   return res.json()
}

export default getColors;