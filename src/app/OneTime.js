
import { Roboto } from 'next/font/google'
import img from "./IMG/Capture.png"
import Image from "next/image";

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['900'] 
})

export default function OneTime() {
    return(
        <div className="NextPage">
            <div className="OneTimeContainer"> 
            <div className={roboto.className} id="OneTimeText">
                <h1>One-Time secret</h1>
            </div>
            <div className={roboto.className} id="OneTimeText2">
                <h3>Share sensitive information that can only be viewed one time. The perfect way to transmit passwords,
                     credit card information, private keys, or other confidential data.t</h3>
                    
               
            </div>
            <div className='ThreeDiv'>
            <Image
            src={img}
            width={700}
            height={360}
            />
            </div>  
            </div>
           
           
        </div>
    );
    
};
