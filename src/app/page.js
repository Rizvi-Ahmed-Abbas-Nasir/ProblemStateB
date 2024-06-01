"use client"
// src/app/page.js
import Image from "next/image";
import { useEffect,useState } from 'react';
import { Roboto } from 'next/font/google';
import { Lato } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: ['900'] });
const lato = Lato({ subsets: ['latin'], weight: ['100'] });

export default function Home() {
  const [secret, setSecret] = useState('');
  const [link, setLink] = useState('');

    const handleSubmit = async (e) => {
   
    e.preventDefault();
    // if (typeof document !== 'undefined') {

    const response =  await fetch('/api/createSecret', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ secret }),
    });
    if (response.ok) {
      const data = await response.json();
      setLink(data.link);
    } else {
      console.error('Failed to create secret');
    }
  

  };




  

  return (
    <div className="HomePage">
      <div className="HomePageContainer">
        <div className="IMGSECRET">
          <Image src={"https://scrt.link/logo-transparent.svg"} width={120} height={180} alt="Logo" />
        </div>
        <div className={roboto.className} id="HeadingText2">
          <h2>Share a secret</h2>
        </div>
        <div className={lato.className} id="HeadingText">
          <h2>...with a link that only works one time and then self-destructs.</h2>
        </div>
        <div className="TextAreaContainer">
          <div className="TextAreaTexts">
            <h4 className="FistText">TEXT</h4>
            <h4>FILE</h4>
            <h4>REDIRECT</h4>
            <h4>NOEGRAM</h4>
          </div>
          <div className="TextAreaContainer">
            <textarea 
              className="TextAreaBox" 
              placeholder="What's your secret"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>
          <div className="TextAreaBTN">
            <button onClick={handleSubmit}>CREATE SECRET LINK</button>
          </div>
          {link && (
            <div>
              <p>Your secret link:</p>
              <a href={link}>{link}</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
