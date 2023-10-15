import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import CustomCard from "../components/Card";
import transition from "../transition";
const  Testimonials=()=> {
  const cardData = [
        {
          name: "Shriya Shukla",
          feedback:
            "I have heard from numerous people that DSA is a very important subject/field, but this workshop from GeeksForGeeks Amity made it an interesting one for me.",
          designation: "Roadmap To DSA",
          date: "22-07-2023",
        },
        {
          name: "Jhanvi Gupta",
          feedback:
            "It was a good session. The speaker was very polite and understanding and explained everything in an effective manner. There was a QNA round also at the end which help many of us in clearing our doubts and getting an idea of how to start and be efficient.",
          designation: "Roadmap To DSA",
          date: "22-07-2023",
        },
        {
          name: "Anika Dogra ",
          feedback:
            "It was a wonderful event which helped in enlightening me in various aspects of DSA.",
          designation: "Roadmap To DSA",
          date: "22-07-2023",
        },
        {
          name: "Aditi Goyal",
          feedback:
            "I really learned alot from the session. Since, I have just entered the 3rd year, I really needed a proper guide for DSA.",
          designation: "Roadmap To DSA",
          date: "22-07-2023",
        },
        {
          name: "Danial A. Ahmad",
          feedback:
            "Benefial and well oragznied. Provided valuable insight which is important.",
          designation: "Roadmap To DSA",
          date: "22-07-2023",
        },
        {
          name: "Aaron J. Thomas",
          feedback:
            "It was an event useful for anyone interested in learning about how to move forward and learn DSA.",
          designation: "Roadmap To DSA",
          date: "22-07-2023",
        },

        {
            name: "Dhanishta Gupta",
            feedback:
              "The event was a nice experience and i got to learn a lot of key points.",
            designation: "Roadmap To DSA",
            date: "22-07-2023",
          },
          {
            name: "Anoushka Ishi Gupta",
            feedback:
              "Learned a lot and got a lot of confusions cleared.",
            designation: "Roadmap To DSA",
            date: "22-07-2023",
          },
          {
            name: "Vishakha Gupta",
            feedback:
              "The content was spot-on and informative.",
            designation: "Roadmap To DSA",
            date: "22-07-2023",
          },
          {
            name: "Christina Joshy",
            feedback:
              "Every thing was properly cleared in the session.",
            designation: "Roadmap To DSA",
            date: "22-07-2023",
          },
      ];
  return (
    <>
        <div className="homePage-testimonials">
 
      <Box className="testimonials">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {cardData.map((info) => {
            return (
              <Grid xs={4}>
                <CustomCard
                  name={info.name}
                  designation={info.designation}
                  feedback={info.feedback}
                  date={info.date}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
</>
  );
}

export default transition(Testimonials);