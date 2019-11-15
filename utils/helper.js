import Images from "../utils/images";

imageSelect = network => {
    if (network === null) {
      return Images.logos.other;
    }
  
    const networkArray = {
      'R1': Images.logos.r1,
      'R2': Images.logos.r2,
      'S1': Images.logos.s1,
      'S2': Images.logos.s2,
      'S3': Images.logos.s3,
      'S4': Images.logos.s4,
      'Other': Images.logos.r1,
    };
  
    return networkArray[network];
  };

  export default { imageSelect }