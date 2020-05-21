import React from "react";
import { Message } from "../../components/index";
import "./Home.scss";


export default function Home() {
  return (
    <section className="home">
      <Message avatar="https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg" text='Hello!' date={new Date(2020, 4, 20, 15, 1, 43)} isMe={false} attachments={[{ 
		  filename: 'image.jpg',
		  url: 'https://vignette.wikia.nocookie.net/avatar/images/7/77/3%D1%8511_%D0%97%D1%83%D0%BA%D0%BE.jpg/revision/latest?cb=20110327123754&path-prefix=ru'
	  },
	  { 
		filename: 'image.jpg',
		url: 'https://vignette.wikia.nocookie.net/avatar/images/7/77/3%D1%8511_%D0%97%D1%83%D0%BA%D0%BE.jpg/revision/latest?cb=20110327123754&path-prefix=ru'
	},
	{ 
		filename: 'image.jpg',
		url: 'https://vignette.wikia.nocookie.net/avatar/images/7/77/3%D1%8511_%D0%97%D1%83%D0%BA%D0%BE.jpg/revision/latest?cb=20110327123754&path-prefix=ru'
	},
	  
	]}/>


	  <Message avatar="https://img-tv.vl.ru/fhd/95642824847809446f7a10d9dac7b26419012c.jpg" text='ТИ КТО??!' date={new Date(2020, 4, 20, 15, 3, 43)} isMe={true} isReaded={false} attachments={[{ 
		  filename: 'image.jpg',
		  url: 'https://vignette.wikia.nocookie.net/avatar/images/7/77/3%D1%8511_%D0%97%D1%83%D0%BA%D0%BE.jpg/revision/latest?cb=20110327123754&path-prefix=ru'
	  },
	  { 
		filename: 'image.jpg',
		url: 'https://vignette.wikia.nocookie.net/avatar/images/7/77/3%D1%8511_%D0%97%D1%83%D0%BA%D0%BE.jpg/revision/latest?cb=20110327123754&path-prefix=ru'
	},
	{ 
		filename: 'image.jpg',
		url: 'https://vignette.wikia.nocookie.net/avatar/images/7/77/3%D1%8511_%D0%97%D1%83%D0%BA%D0%BE.jpg/revision/latest?cb=20110327123754&path-prefix=ru'
	},
	  
	]} />
    </section>
  );
}
