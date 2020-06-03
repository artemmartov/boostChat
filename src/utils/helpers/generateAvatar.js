import tinycolor from "tinycolor2";

const getCorrectIndex = number => {
  if (number > 255) {
    return 255;
  } else if (number < 0) {
    return 0;
  }
  return number > 255 ? 255 : number < 0 ? 0 : number;
};

export default hash => {


  const [r, g, b] = hash
    .substr(0, 3)
    .split("")
    .map(el => getCorrectIndex(el.charCodeAt(0)));

  return {
    color: tinycolor({ r, g, b })
      .lighten(15)
      .saturate(20)
      .toHexString(),
    colorLighten: tinycolor({ r, g, b })
      .lighten(40)
      .saturate(30)
      .toHexString()
  };
};
