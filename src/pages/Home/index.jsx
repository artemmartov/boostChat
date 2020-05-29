import React from "react";
import { Messages, Status, ChatInput } from "../../components/index";
import "./Home.scss";
import { Button } from "antd";
import {
  TeamOutlined,
  FormOutlined,
  EllipsisOutlined,
  SmileOutlined
} from "@ant-design/icons";

import { Dialogs } from "../../containers/index";

export default function Home() {
  return (
    <section className="home">
      <div className="chat">
        <div className="chat__sidebar">
          <div className="chat__sidebar-header">
            <div>
              <TeamOutlined
                className="chat__sidebar-header-logogroup"
                type="team"
              />
              <span>Список диалогов</span>
            </div>
            <Button shape="circle" icon={<FormOutlined />} />
          </div>

          <div className="chat__sidebar-dialogs">
            <div className="dialogs">
              <Dialogs
                userId={0}
                items={[
                  {
                    _id: "d95b2b8d46ebc680284bb1e90692f8d4",
                    text:
                      "Олежа, почему ты иногда такой жестокий? Почему малым дают такие большие сроки?",
                    isRead: false,
                    created_at: new Date(2020, 4, 25, 15, 3, 43),
                    user: {
                      _id: "d95b2b8d46ebc680284bb1e90692f8d4",
                      fullname: "RRR",
                      avatar:
                        "https://steamuserimages-a.akamaihd.net/ugc/877502531188425463/6A76A26E96A2EB64C1BF9FD733BD051525C41FB6/",
                      isOnline: true
                    }
                  },

                  {
                    _id: Math.random(),
                    text: "буууу",
                    isRead: false,
                    created_at: new Date(2020, 4, 20, 15, 3, 43),
                    user: {
                      _id: "d95b2b8d46ebc680284bb1e90692f8d4",
                      fullname: "UUU",
                      avatar: null,
                      isOnline: false
                    }
                  }
                ]}
              />
            </div>
          </div>
        </div>
        <div className="chat__dialog">
          <div className="chat__dialog-header">
            <div />
            <div className="chat__dialog-header-center">
              <b className="chat__dialog-header-username">Юлий Цезарь</b>
              <div className="chat__dialog-header-status">
                <Status online={false} />
              </div>
            </div>

            <Button
              shape="circle"
              icon={<EllipsisOutlined />}
              style={{ fontSize: "24px" }}
            />
          </div>
          <div className="chat__dialog-message">
            <Messages />
          </div>
          <div className="chat__dialog-input">
            <ChatInput />
          </div>
        </div>
      </div>
    </section>
  );
}

//   created_at: new Date(2020, 4, 20, 15, 3, 43,

// [
// 	{
// 	  _id: "d95b2b8d46ebc680284bb1e90692f8d4",
// 	  text:
// 		"Олежа, почему ты иногда такой жестокий? Почему малым дают такие большие сроки?",
// 	  isRead: false,
// 	  created_at: new Date(2020, 4, 25, 15, 3, 43),
// 	  user: {
// 		_id: "d95b2b8d46ebc680284bb1e90692f8d4",
// 		fullname: "RRR",
// 		avatar:
// 		  "https://steamuserimages-a.akamaihd.net/ugc/877502531188425463/6A76A26E96A2EB64C1BF9FD733BD051525C41FB6/",
// 		isOnline: true
// 	  }
// 	},

// 	{
// 	  _id: Math.random(),
// 	  text: "буууу",
// 	  isRead: false,
// 	  created_at: new Date(2020, 4, 20, 15, 3, 43),
// 	  user: {
// 		_id: "d95b2b8d46ebc680284bb1e90692f8d4",
// 		fullname: "UUU",
// 		avatar: null,
// 		isOnline: false
// 	  }
// 	}
//   ]

// <Message
// avatar="https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg"
// date={new Date(2020, 4, 20, 15, 1, 43)}
// audio="https://notificationsounds.com/soundfiles/8ebda540cbcc4d7336496819a46a1b68/file-sounds-1153-piece-of-cake.mp3"
// />

{
  /* <Message
avatar="https://img-tv.vl.ru/fhd/95642824847809446f7a10d9dac7b26419012c.jpg"
isMe={true}
isTyping
/>
<Message
avatar="https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg"
text="Hello!"
date={new Date(2020, 4, 20, 15, 1, 43)}
isMe={false}
attachments={[
  {
	filename: "image.jpg",
	url:
	  "https://vignette.wikia.nocookie.net/avatar/images/7/77/3%D1%8511_%D0%97%D1%83%D0%BA%D0%BE.jpg/revision/latest?cb=20110327123754&path-prefix=ru"
  }
]}
/>
<Message
avatar="https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg"
text="Hello!"
date={new Date(2020, 4, 20, 15, 1, 43)}
isMe={false}
attachments={[
  {
	filename: "image.jpg",
	url:
	  "https://vignette.wikia.nocookie.net/avatar/images/7/77/3%D1%8511_%D0%97%D1%83%D0%BA%D0%BE.jpg/revision/latest?cb=20110327123754&path-prefix=ru"
  }
]}
/>
<Message
avatar="https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg"
text="Hello!"
date={new Date(2020, 4, 20, 15, 1, 43)}
isMe={false}
attachments={[
  {
	filename: "image.jpg",
	url:
	  "https://vignette.wikia.nocookie.net/avatar/images/7/77/3%D1%8511_%D0%97%D1%83%D0%BA%D0%BE.jpg/revision/latest?cb=20110327123754&path-prefix=ru"
  }
]}
/>
<Message
avatar="https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg"
text="Hello!"
date={new Date(2020, 4, 20, 15, 1, 43)}
isMe={false}
attachments={[
  {
	filename: "image.jpg",
	url:
	  "https://vignette.wikia.nocookie.net/avatar/images/7/77/3%D1%8511_%D0%97%D1%83%D0%BA%D0%BE.jpg/revision/latest?cb=20110327123754&path-prefix=ru"
  }
]}
/>
<Message
avatar="https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg"
text="Hello!"
date={new Date(2020, 4, 20, 15, 1, 43)}
isMe={false}
attachments={[
  {
	filename: "image.jpg",
	url:
	  "https://vignette.wikia.nocookie.net/avatar/images/7/77/3%D1%8511_%D0%97%D1%83%D0%BA%D0%BE.jpg/revision/latest?cb=20110327123754&path-prefix=ru"
  }
]}
/>
<Message
avatar="https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg"
text="Hello!"
date={new Date(2020, 4, 20, 15, 1, 43)}
isMe={false}
attachments={[
  {
	filename: "image.jpg",
	url:
	  "https://vignette.wikia.nocookie.net/avatar/images/7/77/3%D1%8511_%D0%97%D1%83%D0%BA%D0%BE.jpg/revision/latest?cb=20110327123754&path-prefix=ru"
  }
]}
/>
<Message
avatar="https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg"
text="Hello!"
date={new Date(2020, 4, 20, 15, 1, 43)}
isMe={false}
attachments={[
  {
	filename: "image.jpg",
	url:
	  "https://vignette.wikia.nocookie.net/avatar/images/7/77/3%D1%8511_%D0%97%D1%83%D0%BA%D0%BE.jpg/revision/latest?cb=20110327123754&path-prefix=ru"
  }
]}
/>
<Message
avatar="https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg"
text="Hello!"
date={new Date(2020, 4, 20, 15, 1, 43)}
isMe={false}
attachments={[
  {
	filename: "image.jpg",
	url:
	  "https://vignette.wikia.nocookie.net/avatar/images/7/77/3%D1%8511_%D0%97%D1%83%D0%BA%D0%BE.jpg/revision/latest?cb=20110327123754&path-prefix=ru"
  }
]}
/>
<Message
avatar="https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg"
text="Hello!"
date={new Date(2020, 4, 20, 15, 1, 43)}
isMe={false}
attachments={[
  {
	filename: "image.jpg",
	url:
	  "https://vignette.wikia.nocookie.net/avatar/images/7/77/3%D1%8511_%D0%97%D1%83%D0%BA%D0%BE.jpg/revision/latest?cb=20110327123754&path-prefix=ru"
  }
]}
/>
<Message
avatar="https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg"
text="Hello!"
date={new Date(2020, 4, 20, 15, 1, 43)}
isMe={false}
attachments={[
  {
	filename: "image.jpg",
	url:
	  "https://vignette.wikia.nocookie.net/avatar/images/7/77/3%D1%8511_%D0%97%D1%83%D0%BA%D0%BE.jpg/revision/latest?cb=20110327123754&path-prefix=ru"
  }
]}
/>
<Message
avatar="https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg"
text="Hello!"
date={new Date(2020, 4, 20, 15, 1, 43)}
isMe={false}
attachments={[
  {
	filename: "image.jpg",
	url:
	  "https://vignette.wikia.nocookie.net/avatar/images/7/77/3%D1%8511_%D0%97%D1%83%D0%BA%D0%BE.jpg/revision/latest?cb=20110327123754&path-prefix=ru"
  }
]}
/>
<Message
avatar="https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg"
text="Hello!"
date={new Date(2020, 4, 20, 15, 1, 43)}
isMe={false}
attachments={[
  {
	filename: "image.jpg",
	url:
	  "https://vignette.wikia.nocookie.net/avatar/images/7/77/3%D1%8511_%D0%97%D1%83%D0%BA%D0%BE.jpg/revision/latest?cb=20110327123754&path-prefix=ru"
  }
]}
/>
<Message
avatar="https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg"
text="Hello!"
date={new Date(2020, 4, 20, 15, 1, 43)}
isMe={false}
attachments={[
  {
	filename: "image.jpg",
	url:
	  "https://vignette.wikia.nocookie.net/avatar/images/7/77/3%D1%8511_%D0%97%D1%83%D0%BA%D0%BE.jpg/revision/latest?cb=20110327123754&path-prefix=ru"
  }
]}
/>
<Message
avatar="https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg"
text="Hello!"
date={new Date(2020, 4, 20, 15, 1, 43)}
isMe={false}
attachments={[
  {
	filename: "image.jpg",
	url:
	  "https://vignette.wikia.nocookie.net/avatar/images/7/77/3%D1%8511_%D0%97%D1%83%D0%BA%D0%BE.jpg/revision/latest?cb=20110327123754&path-prefix=ru"
  }
]}
/>

<Message
avatar="https://img-tv.vl.ru/fhd/95642824847809446f7a10d9dac7b26419012c.jpg"
text="ТИ КТО??!"
date={new Date(2020, 4, 20, 15, 3, 43)}
isMe={true}
isReaded={false}
attachments={[
  {
	filename: "image.jpg",
	url:
	  "https://vignette.wikia.nocookie.net/avatar/images/7/77/3%D1%8511_%D0%97%D1%83%D0%BA%D0%BE.jpg/revision/latest?cb=20110327123754&path-prefix=ru"
  },
  {
	filename: "image.jpg",
	url:
	  "https://vignette.wikia.nocookie.net/avatar/images/7/77/3%D1%8511_%D0%97%D1%83%D0%BA%D0%BE.jpg/revision/latest?cb=20110327123754&path-prefix=ru"
  },
  {
	filename: "image.jpg",
	url:
	  "https://vignette.wikia.nocookie.net/avatar/images/7/77/3%D1%8511_%D0%97%D1%83%D0%BA%D0%BE.jpg/revision/latest?cb=20110327123754&path-prefix=ru"
  }
]}
/> */
}
