import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { styled } from "@mui/system";

import '../Call-Center-Services/CallCenterServices.css'

import bgImg from '../../Assets/testimonials-bg.png'

// Testimonials data
const testimonials = [
    {
        text: "I've had the pleasure of working with SECC for several years, and their exceptional service and customer experience have been invaluable to my business. Their team is always responsive, knowledgeable, and genuinely dedicated to our success. Highly recommend!",
        author: "Blake C",
    },
    {
        text: "The team at Tele-direct has been extremely reliable and professional. They handle all our incoming customer calls efficiently.",
        author: "Jessica W",
    },
    {
        text: "Our partnership with Tele-direct has allowed us to focus on growth while they handle customer queries with utmost dedication.",
        author: "Michael D",
    },
];

// Styled components for custom styling
const BackgroundContainer = styled(Box)({
    position: "relative",
    width:'100%',
    height: "auto",
    padding:'50px 20px',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${bgImg})`, // Replace with your background image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
});

const TestimonialCard = styled(Box)({
    width: "100%",
    maxWidth: "760px",
    padding: "50px 30px",
    backgroundColor: "rgba(0, 51, 102, 0.6)", // Overlay background
    color: "#fff",
    textAlign: "center",
    borderRadius: "5px",
    position: "relative",
});

const ArrowButton = styled(IconButton)({
    position: "absolute",
    top: "58%",
    transform: "translateY(-50%)",
    color: "#BCBBBB",
    "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
});

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Handler to go to the previous slide
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    // Handler to go to the next slide
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <React.Fragment>
            <BackgroundContainer sx={{width:'100%'}}>
                <TestimonialCard>
                    <Typography className="Testimonials-heading" variant="h5" gutterBottom mb={5} style={{fontSize:'32px', color:'#F5F5F5', letterSpacing:'1px'}}>
                        What Our Inbound Call Center Clients Are Saying
                    </Typography>
                    <Typography variant="body1" gutterBottom style={{ fontStyle: "italic", color:'lightgray', letterSpacing:'0.8px'}}>
                        {testimonials[currentIndex].text}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom style={{ color:'lightgray'}}>
                        — {testimonials[currentIndex].author}
                    </Typography>
                    {/* Previous and Next arrows */}
                    <ArrowButton onClick={handlePrev} style={{ left: 0 }}>
                        <ArrowBackIos />
                    </ArrowButton>
                    <ArrowButton onClick={handleNext} style={{ right: 0 }}>
                        <ArrowForwardIos />
                    </ArrowButton>
                </TestimonialCard>
            </BackgroundContainer>
        </React.Fragment>
    );
};

export default Testimonials;
