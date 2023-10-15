import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import transition from "../transition";
import { BsLinkedin } from "react-icons/bs";
import "../assets/team.css";
const MainT = () => {
    const JsonData = [
        {
            name: "Ilisha Tomar",
            department: "President",
            image: require("../assets/team/president.png"),
            linkedin: "https://www.linkedin.com/in/ilisha-tomar-15aa2a24a/"
        },

        {
            name: "Sanskar Chauhan",
            department: "Vice-President",
            image: require("../assets/team/vice-president.png"),
            linkedin: "https://www.linkedin.com/in/sanskar-chauhan-051570221/"
        }, {
            name: "Diksha Kumari",
            department: "Content Team Lead",
            image: require("../assets/team/content_head.png"),
            linkedin: "https://www.linkedin.com/in/diksha-tiwari-50648a254/"
        }, {
            name: "Ayushi Sinha",
            department: "Event Team Lead",
            image: require("../assets/team/event_head.png"),
            linkedin: "https://www.linkedin.com/in/ayushi-sinha-990a24265/"
        }, {
            name: "Kanchan Rai",
            department: "Design Team Lead",
            image: require("../assets/team/design_head.png"),
            linkedin: "https://www.linkedin.com/in/kanchan-rai-90271a24a/"
        }, {
            name: "Shreyas Om",
            department: "PR & Outreach Lead",
            image: require("../assets/team/pr_and_outreach_head.png"),
            linkedin: "https://www.linkedin.com/in/shreyas-om/"
        }, {
            name: "Ambermani Jha",
            department: "Marketing Team Lead",
            image: require("../assets/team/marketing_head.png"),
            linkedin: "https://www.linkedin.com/in/ambermani-jha-450ab1268/"
        }, {
            name: "Maaz Ahmad Farooqui",
            department: "Social Media Team Lead",
            image: require("../assets/team/socials_head.png"),
            linkedin: "https://www.linkedin.com/in/maaz-ahmad-farooqui-508951271/"
        }, {
            name: "Rajat Rajput",
            department: "Tech Team Lead",
            image: require("../assets/team/tech_head.png"),
            linkedin: "https://www.linkedin.com/in/rajatrajput2004/"
        },
    ];
    const JsonData2 = [
        {
            name: "Vidhi",
            department: "President",
            image: require("../assets/team/ex_pres.png"),
        },

        {
            name: "Chandan",
            department: "Vice-President",
            image: require("../assets/team/ex_vice_pres.png"),
        }, {
            name: "Naman",
            department: "Design Head",
            image: require("../assets/team/ex_design.png"),
        }, {
            name: "Keinisha",
            department: "Marketing Head",
            image: require("../assets/team/ex_marketing.png"),
        }, {
            name: "Sanskar",
            department: "Content Head",
            image: require("../assets/team/ex_content.png"),
        }, {
            name: "Ansh",
            department: "Technical Head",
            image: require("../assets/team/ex_tech.png"),
        }, {
            name: "Prashant",
            department: "Events Head",
            image: require("../assets/team/ex_events.png"),
        }, {
            name: "Divyanshi",
            department: "PR Head",
            image: require("../assets/team/ex_pr.png"),
        }, {
            name: "Vanshika",
            department: "Media Head",
            image: require("../assets/team/ex_media.png"),
        },
    ];

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        backgroundColor: "#121212",
        color: "white",
        borderRadius: "12px",
        boxShadow: "1px 0px 4px 0px rgba(255, 255, 255, 0.43)",
    }));
    return (
        <div>
            <div className="team-grid" style={{ marginBottom: "100px" }}>                <h4 className="title">MEET THE FACULTY COORDINATOR</h4>
                <h1 className="subtitle">
                    The <span>guiding light</span> of the team
                </h1>
                <Box className="gallery" style={{ marginTop: "50px", marginBottom: "50px" }}>
                    <div className="c-card">
                        <img src={require("../assets/team/fc.png")} alt="Avatar" />
                        <div className="c-container">
                            <h4>Dr. Madhulika Bhadauria</h4>
                            <p>
                                Faculty Coordinator
                            </p>
                        </div>
                    </div>
                </Box>

                <h4 className="title">MEET THE TEAM</h4>
                <h1 className="subtitle">
                    The <span>team</span> leading it now
                </h1>

                <Box className="gallery">
                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                        {JsonData.map((info) => {
                            return (
                                <Grid xs={4}>
                                    <Item className="c-card">
                                        <img src={info.image} alt="Avatar" />
                                        <div className="c-container">
                                            <h4>{info.name}</h4>
                                            <p>
                                                {info.department} • <a href={info.linkedin} target="_blank" rel="noreferrer"><BsLinkedin /></a>
                                            </p>
                                        </div>
                                    </Item>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>
                <h4 className="title" style={{ marginTop: "100px" }}>MEET THE PREVIOUS TEAM</h4>
                <h1 className="subtitle" style={{ marginBottom: "100px" }}>
                    The <span>team</span> which started it all
                </h1>
                <Box className="gallery">
                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                        {JsonData2.map((info) => {
                            return (
                                <Grid xs={4}>
                                    <Item className="c-card">
                                        <img src={info.image} alt="Avatar" />
                                        <div className="c-container">
                                            <h4>{info.name}</h4>
                                            <p>
                                                {info.department}
                                            </p>
                                        </div>
                                    </Item>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>
            </div>
        </div>
    );
}
export default transition(MainT);