import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

// Import images from the `src/assets` folder
import image1 from "../../Assets/slide1.png";
import image2 from "../../Assets/slide2.png";
import image3 from "../../Assets/slide3.png";
import image4 from "../../Assets/slide4.png";
import image5 from "../../Assets/slide5.png";
import image6 from "../../Assets/slide6.png";
import image7 from "../../Assets/slide7.png";
import image8 from "../../Assets/slide1.png";
import image9 from "../../Assets/slide2.png";
import image10 from "../../Assets/slide3.png";

const images = [
  { src: image1, text: "Hygiene care calls" },
  { src: image2, text: "Confirmation calls" },
  { src: image3, text: "Identify or schedule ..." },
  { src: image4, text: "New patient social media" },
  { src: image5, text: "Assistance filing a schedule" },
  { src: image6, text: "Hygiene care calls" },
  { src: image7, text: "Miss appointment reminders" },
  { src: image8, text: "Identify or schedule ..." },
  { src: image9, text: "New patient social media" },
  { src: image10, text: "Assistance filing a schedule" },
];

const SliderContainer = styled(Box)({
  overflow: "hidden",
  whiteSpace: "nowrap",
  display: "flex",
});

const Slide = styled(Box)({
  display: "inline-block",
  position: "relative",
  width: "400px",
  margin: "0 10px",
  borderRadius: "8px",
  overflow: "hidden",
});

const Overlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  color: "#fff",
  opacity: 1,
  transition: "opacity 0.3s, background-color 0.3s",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

const Line = styled(Box)({
  width: "30%",
  height: "0.1px",
  backgroundColor: "lightgray",
  margin: "8px 0",
});

const SliderTrack = styled(Box)({
  display: "flex",
  animation: "scroll 60s linear infinite",
  "@keyframes scroll": {
    from: { transform: "translateX(0)" },
    to: { transform: "translateX(-50%)" },
  },
});

const ServicesSlider = () => {
  return (
    <SliderContainer>
      <SliderTrack>
        {[...images, ...images].map((item, index) => (
          <Slide key={index}>
            <img src={item.src} alt={`Image ${index + 1}`} width="100%" height="100%" />
            <Overlay>
              <Line /> 
              <Typography variant="subtitle1" component="p" style={{fontSize:'21px', lineHeight:'25px', fontWeight:'light'}}>
                {item.text}
              </Typography>
              <Line />
            </Overlay>
          </Slide>
        ))}
      </SliderTrack>
    </SliderContainer>
  );
};

export default ServicesSlider;
