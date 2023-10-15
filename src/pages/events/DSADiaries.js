import React from 'react'
import transition from '../../transition';
import eventBanner from '../../assets/events/dsa_diaries/banner_2.png';
import "../../assets/events/dsa_diaries/dsa.css"
import { Link } from 'react-router-dom';
import DSADiariesRegister from './DSADiariesRegister';
import speaker from "../../assets/events/dsa_diaries/speaker.png";
const DSADiaries = () => {
    return (
        <div className='dsaDiaries-main'>
            <div className='dsaDiaries-images'>
                <img alt="" src={eventBanner} />
            </div>
            <div className='dsaDiaries-navbar'>
                <div className='dsaDiaries-navbar-anchor'>
                    <i className="fa-solid fa-star" style={{ color: "#FFA800" }}></i>                <p>Updates</p>
                </div>
                <div className='dsaDiaries-navbar-anchor'>
                    <i style={{ color: "#00D1FF" }} className="fa-solid fa-circle-info"></i>               <p>Details</p>
                </div>
                <div className='dsaDiaries-navbar-anchor'>
                    <i className="fa-solid fa-microphone" style={{ color: "#4CEBAE" }}></i>          <p>Speaker</p>
                </div>
                <div className='dsaDiaries-navbar-anchor'>
                    <i className="fa-solid fa-people-group" style={{ color: "#949494" }}></i>             <p>Team</p>
                </div>
            </div>
            <div className='dsaDiaries-row-1'>
                <div className='dsaDiaries-updates dsaUpdatesMain'>
                    <div className='dsaDiaries-updates-header'>
                        <i className="fa-solid fa-star" style={{ color: "#FFA800" }}></i> <p>Updates</p>
                    </div>
                    <hr></hr>
                    <div className='dsaDiaries-updates-list updates-list-main'>
                        {/* <div className='update-point'>
                            <p className='update'><i className="fa-solid fa-star" style={{ color: "#FFA800" }}></i> Third batch of confirmation emails rolled out!</p>
                            <p className='timestamp'>08:12 AM Thursday, 3rd August, 2023</p>
                        </div>
                        <div className='update-point'>
                            <p className='update'><i className="fa-solid fa-star" style={{ color: "#FFA800" }}></i> Second batch of confirmation emails rolled out!</p>
                            <p className='timestamp'>12:25 PM Wednesday, 2nd August, 2023</p>
                        </div>
                        <div className='update-point'>
                            <p className='update'><i className="fa-solid fa-star" style={{ color: "#FFA800" }}></i> First batch of confirmation emails rolled out!</p>
                            <p className='timestamp'>09:24 AM Monday, 1st August, 2023</p>
                        </div> */}
                        <div className='update-point'>
                            <p className='update'><i className="fa-solid fa-star" style={{ color: "#FFA800" }}></i> Registrations opened for Chatbot Construction 101! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p className='timestamp'>09:00 AM Friday, 15th September, 2023</p>
                        </div>
                    </div>
                </div>
                <div className='dsaDiaries-updates'>
                    <div className='dsaDiaries-updates-header'>
                        <i className="fa-solid fa-address-card" style={{ color: "#326A26" }}></i> <p>Register</p>
                    </div>
                    <hr></hr>
                    <div className='dsaDiaries-register-list'>
                        <p>Timings : <span>21st</span> September, 2023  <span>02:30</span> PM Onwards</p>
                        {/* <p>Registration <span>Closes</span> : 20th September</p> */}
                        {/* <Link to="/events/chatbot-construction-101/register"><button>Register Now</button></Link> */}
                    </div>
                </div>
            </div>
            <div className='dsaDiaries-row-1'>
                <div className='dsaDiaries-updates deets' style={{marginBottom: "30px"}}>
                    <div className='dsaDiaries-updates-header'>
                        <i style={{ color: "#00D1FF" }} className="fa-solid fa-circle-info"></i>               <p>Details</p>
                    </div>
                    <hr></hr>
                    <div className='dsaDiaries-updates-list'>
                        <p>
                            <strong>✨ Geeks for Geeks Student Chapter, Amity University, Noida is wholeheartedly welcoming you all to our 🤖 Chatbot Construction 101.✨</strong> <br></br><br></br>
                            Mr.Prashant Shukla excels in data analytics, computer science engineering, and artificial intelligence (AI). He analyzes data, develops software, and leverages AI technologies for innovative solutions.
Whether you are a beginner just starting your coding journey or an experienced programmer✨ looking to enhance your problem-solving skills, this event is a must-attend for everyone. 🤓<br></br><br></br>
                            About our outstanding speaker: 🗣️<br></br>
                            ▪️ Data Analytics<br></br>
                            ▪️ Handful in Artificial Intelligence<br></br>
                            ▪️ Computer Science Engineer<br></br><br></br>
                            Know more about him at:<br></br>
                            <a href="https://www.linkedin.com/in/pr-shukla/" style={{color: "#43a047"}}>LinkedIn</a><br></br>
                            <br></br>
                            📝 Workshop details:
                            🗒 Topic: Chatbot Construction 101<br></br>
                            📅 Date: 21st September, 2023<br></br>
                            ⏰ Time: 02:30 PM<br></br>
                            📍 Venue: To Be Announced<br></br><br></br>
                            <strong>Note: Laptop is mandatory 💻</strong><br></br><br></br>
                            👉🏻We are having exciting perks🎁 for our attendees too which includes swags and vouchers from Geeks for Geeks.<br></br>
                            Certificate will be provided to all the participants 📈<br></br>
                            So gear up and mark the date on your calendars for ChatBot Construction 101.<br></br>

                            <br></br>
                            <strong>Venue : </strong>To Be Announced
                            <br></br>
                            <br></br>
                            For further details, contact :        <br></br> <br></br>                                                                                       <strong>   President: Ilisha Tomar</strong>
                            (+918218474521)<br></br>
                            <strong>Vice-President: Sanskar Chauhan</strong>
                            (+918506031474)<br></br>
                            <br></br>

                            Faculty Coordinator -
                            <strong> Dr. Madhulika Bhadauria</strong>
                            <br></br><br></br>
                            Explore and follow us at :<br></br> 
                            <a href="https://linktr.ee/gfg.studentchapter.amity" style={{color: "#43a047"}}>Our Socials</a></p>
                    </div>
                </div>
                <div className='row-1-section2' style={{ marginBottom: "300px" }}>
                    <div className='dsaDiaries-updates deets-dsa'>
                        <div className='dsaDiaries-updates-header'>
                            <i className="fa-solid fa-microphone" style={{ color: "#4CEBAE" }}></i>          <p>Speaker</p>                        </div>
                        <hr></hr>
                        <div className='dsaDiaries-speaker-deets'>
                            <img alt="" src={speaker} />
                            <h3>Prashant Shukla</h3>
                        </div>

                    </div>
                    {/* <div className='dsaDiaries-updates deets-dsa'>
                        <div className='dsaDiaries-updates-header'>
                            <i className="fa-solid fa-handshake" style={{ color: "#4CEBAE" }}></i>          <p>Sponsored By</p>                        </div>
                        <hr></hr>
                        <div className='dsaDiaries-speaker-deets'>
                            <img alt="" src={require("../../assets/events/dsa_diaries/sponsor.png")} />
                        </div>
                    </div> */}
                    <div className='dsaDiaries-updates team-header'>
                        <div className='dsaDiaries-updates-header'>
                            <i className="fa-solid fa-people-group" style={{ color: "#949494" }}></i>             <p>Event Handlers</p>
                        </div>
                        <hr></hr>
                        <div className='dsaDiaries-register-list team-list'>
                            <div className='team-member'>
                                <img alt="" src={require("../../assets/team/president.png")} />
                                <div>
                                    <p style={{marginLeft: "20px"}}><br></br>Ilisha Tomar</p>
                                </div>
                            </div>
                            <div className='team-member'>
                                <img alt="" src={require("../../assets/team/vice-president.png")} />
                                <div>
                                    <p style={{marginLeft: "20px"}}><br></br>Sanskar Chauhan</p>
                                </div>
                            </div>
                            <div className='team-member'>
                            <img alt="" src={require("../../assets/team/event_head.png")} />
                                <div>
                                    <p style={{marginLeft: "20px"}}><br></br>Ayushi Sinha</p>
                                </div>
                            </div>
                            <div className='team-member'>
                                <img alt="" src={require("../../assets/team/tech_head.png")} />
                                <div>
                                    <p style={{marginLeft: "20px"}}><br></br>Rajat Rajput</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default transition(DSADiaries);