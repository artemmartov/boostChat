import React from "react";

import "./Avatar.scss";
import { generateAvatar } from "../../utils/helpers";

const Avatar = ({ user }) => {
  console.log(user, 'uuuuu');

  if (user.avatar) {
    return <img className="avatar" src={user.avatar} alt="avatar" />;
  } else {
    const { color, colorLighten } = generateAvatar(user._id);
	const firstChar = user.fullname[0].toUpperCase();
	// console.log(`${color} - color, ${colorLighten} - colorLLL, ${firstChar} - first `);
	console.log('USER', user);
	
	
    return (
      <div
        style={{
          background: `linear-gradient(135deg, ${color} 0% , ${colorLighten} 96.52%)`
        }}
        className="avatar avatar--empty"
      >
        {firstChar}
      </div>
    );
  }
};

export default Avatar;
