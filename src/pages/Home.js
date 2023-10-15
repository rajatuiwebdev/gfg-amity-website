import React, { useState } from "react";
import transition from "../transition";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import { Pie, Line } from "react-chartjs-2";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import CustomCard from "../components/Card";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
);

const Home = () => {
  const [submitting, setSubmitting] = useState(false);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const labels = ["2022", "2023 First Half", "2023 Second Half"];
  const handleNewsLetterSubmit = async (event) => {
    event.preventDefault();

    const emailInput = event.target.elements.email; // Get the email input element
    if (!emailInput) {
      console.error("Email input element not found.");
      return;
    }

    // Show the circle animation
    setSubmitting(true);

    try {
      // data to be sent to database (Replace 'YOUR_EMAIL_COLUMN' with the column name in your Google Sheets where you want to store the emails)
      const formData = new FormData();
      formData.append("Email", emailInput.value);

      // Send the POST request to Google Sheets
      await fetch(
        "https://script.google.com/macros/s/AKfycbzec2WjgIvxfAlaKF57H9wEfclHwpFHfvcg_dheT3L8vz8_Bz_a-EoeGcHsS9gGdz0rDw/exec",
        {
          method: "POST",
          body: formData,
        }
      );
      alert("Email submitted.");
      // Clear the email input and disable the button
      emailInput.value = "";
      setSubmitting(false);
    } catch (error) {
      console.error("Error submitting the form:", error);
      setSubmitting(false);
    }
  };

  const line_data = {
    labels,
    datasets: [
      {
        label: "Audience Impact",
        data: [195, 692, 235], // Insert your custom numbers here
        borderColor: "#3c9640",
        backgroundColor: "(255, 99, 132, 0.5)",
      },
    ],
  };

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
  ];
  const data = {
    labels: ["Male", "Female"],
    datasets: [
      {
        label: "Gender Distribution",
        data: [649, 479],
        backgroundColor: ["#297e33", "#d3d3d3"],
        borderWidth: 0,
      },
    ],
  };
  const rData = {
    labels: ["Non Repeating Attendees", "Repeating Attendees"],
    datasets: [
      {
        label: "Attendees",
        data: [370, 1079 + 43],
        backgroundColor: ["#297e33", "#d3d3d3"],
        borderWidth: 0,
      },
    ],
  };
  return (
    <>
      {/* Setting up the Navbar. */}
      {/* Homepage landing. */}
      <div className="homePage-landing">
        <h1>
          Unleash Your Inner <span>Geek</span>
        </h1>
        <p>
          Get ready to embark on an exciting journey into the world of
          technology, programming, and innovation. Whether you're a seasoned
          coder, a passionate tech enthusiast, or just getting started with your
          geeky adventures, our club is the perfect platform to explore, learn,
          and connect with like-minded individuals.
        </p>
        <div className="homePage-landing-buttons">
          <a
            href="https://linktr.ee/gfg.studentchapter.amity"
            className="homePage-landing-buttons-button-1"
          >
            <button>Join Our Club</button>
          </a>
          <Link to="/events" className="homePage-landing-buttons-button-2">
            <button>Explore Events</button>
          </Link>
        </div>
      </div>
      {/* Testimonials - What students have to say about us? */}
      <div className="homePage-testimonials">
        <h1>
          WHAT <span>STUDENTS</span> HAVE <br></br>TO <span>SAY</span> ABOUT US?
        </h1>
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
        <Link className="see-more" to="/testimonials">
          See More <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
      <div className="homePage-testimonials">
        <h1>
          PEOPLE <span>WE</span> HAVE <br></br>WORKED <span>WITH!</span>
        </h1>
        <Box className="testimonials">
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {" "}
            <Grid xs={4}>
              <img src={require("../assets/events/sponsor (1).png")}></img>
            </Grid>
            <Grid xs={4}>
              <img src={require("../assets/events/sponsor (2).png")}></img>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div className="homePage-contact-box container">
        <h1>
          Stay Connected, Stay Informed : Unleash the power of our tech based
          newsletter!
        </h1>
        <form
          className="form-field"
          autoComplete="off"
          onSubmit={handleNewsLetterSubmit}
        >
          <input
            placeholder="Enter your email"
            autoComplete="off"
            type="email"
            name="email"
            required
          />
          <button type="submit" disabled={submitting}>
            {submitting ? (
              // Show the circle animation while submitting
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
      <div className="homePage-numbers">
        <h1>
          <span>WE</span> DON'T SPEAK <br></br>OUR <span>NUMBERS</span> DO!
        </h1>
        <Box className="testimonials">
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid xs={4}>
              <div className="number-Card ">
                <h3>Student Impact</h3>
                <div className="graph-block">
                  <Line data={line_data} options={options} />
                </div>
              </div>
            </Grid>
            <Grid xs={4}>
              <div className="number-Card">
                <h3>Females Impact</h3>
                <div className="graph-block">
                  <Pie data={data} />
                </div>
              </div>
            </Grid>
            <Grid xs={4}>
              <div className="number-Card">
                <h3>Repeat Rate</h3>
                <div className="graph-block">
                  <Pie data={rData} />
                </div>{" "}
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};
export default transition(Home);
