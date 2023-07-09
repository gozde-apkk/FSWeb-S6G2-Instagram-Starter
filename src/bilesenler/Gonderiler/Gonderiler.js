import React from 'react';
import Gonderi from './Gonderi';
import './Gonderiler.css';

const Gonderiler = (props) => {
  // 🔥 Gönderiler'in ebeveyninin doğru değişkenleri doğru şekilde ilettiğine emin olun!
  const { gonderiyiBegen, gonderiler,
  arama, setGonderi,yorumYap, setYorumYap } = props;

  let arananGönderilerList = gonderiler.filter((gonderi) => {
    if(gonderi.comments[0].text === ""){
      return gonderi;
    }else if (
      gonderi.comments[0].text.toLowerCase().includes(arama.toLowerCase())
     ){
      return gonderi;
     }
  });

  return (
    <div className="posts-container-wrapper">
      {arananGönderilerList.length > 0 ? (
        arananGönderilerList.map((item) => (
          <Gonderi
            key={item.id}
            gonderi={item}
            gonderiler={gonderiler}
            gonderiyiBegen={gonderiyiBegen}
            setGonderi={setGonderi}
            yorumYap={yorumYap}
            setYorumYap={setYorumYap}
          />
        ))
      ) : (
        <p>Aradığınız kritere uygun gönderi bulunamadı.</p>
      )}
    </div>
  );
};
export default Gonderiler;