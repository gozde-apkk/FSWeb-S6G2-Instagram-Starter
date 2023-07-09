import React from 'react';
import Yorumlar from '../Yorumlar/Yorumlar';
import BegenBolumu from './BegenBolumu';
import GonderiBasligi from './GonderiBasligi';

import { useState } from 'react';



const Gonderi = props => {
  // 🔥 Bu bileşenin parentının aşağıdaki propları düzgün gönderdiğinden emin olun.
  const { gonderiyiBegen, gonderiler,
    arama, setGonderi,yorumYap, setYorumYap } = props;
    const [yorum, setYorum] = useState(null);

    const handleYorum = (event) => {
      setYorum(event.target.value);
    };

    const handleYorumGönder = (event) => {
      event.preventDefault();
      setGonderi(
        gonderiler.map((gonderi) =>{
          if (gonderi.id === gonderiler.id) {
            gonderi.comments.push({
              id:97,
              username: "gozde.apk",
              text: yorum,
            })
          }
          return gonderi;
        })
      );
      setYorum("");
      setYorumYap(!yorumYap);
    }

  return (
    <div className='post-border'>
      { gonderiler ? (
        <>
        <GonderiBasligi
        username={  gonderiler.username}
        thumbnailUrl={gonderiler.thumbnailUrl} 
        />    
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={gonderiler.imageUrl}
        />
      </div>
      {/* BeğenBölümü düzgün çalışması için ihtiyaç duyduğu tüm proplara sahip mi? */}
      <BegenBolumu
       gonderiyiBegen={() => gonderiyiBegen(gonderiler.id)}
       beğeniSayısı={gonderiler.likes} 
       yorumYap= {yorumYap}
       setYorumYap={setYorumYap} />
        {yorumYap && (
            <div className="yorumArea">
              <input
                type="text"
                id="comment"
                name="comment"
                value={yorum}
                onChange={handleYorum}
              />
              <button
                type="submit"
                onClick={handleYorum}
                disabled={!yorum}
              >
                Gönder
              </button>
            </div>
          )}
    
          <Yorumlar yorumlar={gonderiler.yorumlar} />
      </>
       ) : (
        <p>Aranan kritere göre gönderi bulunamadı!</p>
      )}
    </div>
  );
}
export default Gonderi;
