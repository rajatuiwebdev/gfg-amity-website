import React from 'react'
import transition from '../transition'
import "../assets/events.css"
import { Link } from 'react-router-dom';
import event_banner from "../assets/events/dsa_diaries/banner.png";
import roadmaptodsa from "../assets/events/dsa_diaries/roadmaptodsa.png";
import logicBuild from "../assets/events/dsa_diaries/logic_build.jpeg";
const Events = () => {
  return (
    <div className='eventsPage'>
        <h1 style={{marginBottom: "100px"}}>Our Previous Events</h1>
        <div className='eventsContainer-reverse'>
            <img src={require("../assets/events/dsa_diaries/banner_2.png")} alt=""></img>
            <div className='eventsDetails'>
                <h3>ChatBot Construction 101</h3>
                <p>Geeks for Geeks Student Chapter, Amity University, Noida, extends a warm welcome to all for our event, "Chatbot Construction 101."

Mr. Prashant Shukla is a proficient expert in data analytics, computer science engineering, and artificial intelligence (AI). His expertise lies in data analysis, software development, and the application of AI technologies to create innovative solutions.

This event caters to both beginners starting their coding journey and experienced programmers aiming to enhance their problem-solving skills. Whether you're a novice or a seasoned coder, this event is a valuable opportunity for all.

Join us for an insightful session where you can delve into the intricacies of coding and AI, gaining knowledge and skills that will benefit you on your technological journey.</p>
            </div>
        </div>
        <div className='eventsContainer'>
            <img src={event_banner} alt=""></img>
            <div className='eventsDetails'>
                <h3>DSA Diaries 2.0</h3>
                <p>DSA Diaries 2.0 - A hands-on workshop on Data Structures and Algorithms by Mr. Deepesh Arya, a digital specialist engineer at Infosys. Learn from the best in the industry and enhance your coding skills. Open to all coding enthusiasts, beginners, and experienced programmers. Date: 3rd August 2023, Time: 02:00 PM. Stay tuned for venue details. Laptop is mandatory. Exciting perks for attendees, including swags and vouchers from Geeks for Geeks. All participants will receive a certificate.</p>
                <div className='eventsDetailsButtons'>
                    <Link to="https://www.kwikpic.in/auth/login?uCode=LAV91Z"><button>Event Gallery</button></Link>
                </div>
            </div>
        </div>
        <div className='eventsContainer-reverse'>
            <img src={roadmaptodsa} alt=""></img>
            <div className='eventsDetails'>
                <h3>Roadmap To DSA</h3>
                <p>Join us in reliving the enriching past event on Data Structures and Algorithms (DSA) presented by the esteemed GFG Student Chapter of ASET, Amity University. This exclusive online session was an opportunity to delve into the significance of DSA in programming, equipping attendees with valuable insights and a systematic approach to problem-solving. Expert speakers acted as guiding stars, illuminating the intricacies of DSA, fostering proficiency in coding. Stay tuned for more upcoming events as we continue to provide invaluable learning experiences, empowering you to excel in your coding journey. Elevate your skills and be part of our mission to foster a vibrant tech community!</p>
                <div className='eventsDetailsButtons'>
                    {/* <Link to="/"><button>Event Gallery</button></Link> */}
                </div>
            </div>
        </div>
        <div className='eventsContainer'>
            <img src="https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=1,quality=75,width=960,height=480/event-covers/55/370520d7-e8e3-46c4-94c3-ee2bf9cd96df" alt=""></img>
            <div className='eventsDetails'>
                <h3>Amicode</h3>
                <p>"Amicode" was the highlight of Amity Youth Fest 2023, a thrilling coding event that took place on March 31st. Enthusiastic participants engaged in an Industry 4.0 workshop and showcased their coding prowess in a 3-hour coding and DSA competition. The event featured a typing duel to test speed and accuracy. With fantastic prizes at stake, participants had an unforgettable experience competing with the best. "Amicode" proved to be an exceptional platform for coding enthusiasts to shine and celebrate their skills. Stay tuned for more exciting events in the future, as we continue to nurture the coding community.</p>
                <div className='eventsDetailsButtons'>
                    <Link to="https://photos.google.com/share/AF1QipO96LDDdZZKHWxIQj5Qy1CiWH0v_D0_NJo4tSR_gIYRz5a-McJt3QBHalLq2iTA4Q?key=UlNlcWczTGVYcmJVcUlRMnptQV8xVDg1dU04X1Jn"><button>Event Gallery</button></Link>
                </div>
            </div>
        </div>
        <div className='eventsContainer-reverse'>
            <img src={logicBuild} alt="" style={{height: "500px"}}></img>
            <div className='eventsDetails'>
                <h3>Logic Building Hands-On Workshop</h3>
                <p>In the past, we hosted an enriching event focused on enhancing coding logic and problem-solving skills. Open to all enthusiasts, from beginners to experienced programmers, Nidhi Sharma's expertise provided valuable insights into effective logic building in coding. Attendees enjoyed exciting perks and received certificates to acknowledge their achievements. Stay tuned for more empowering events, as we continue to nurture the coding community and offer valuable learning opportunities! </p>
                <div className='eventsDetailsButtons'>
                    <Link to="https://photos.google.com/share/AF1QipPojWsveO92UghUxhK0FjbIUxfMkT4TuUvh_u3dXFsTffe7S8fC6-S_bq1Ct8Lqxg?key=bkpUWGlrNEI1ZkdhX3EyWF9NVlBlRHlrX1pfQ1ZR"><button>Event Gallery</button></Link>
                </div>
            </div>
        </div>
        <div className='eventsContainer'>
            <img src="https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=1,quality=75,width=960,height=480/event-covers/k7/ee0ed068-813e-4fd3-addc-b8fcf8b51eed" alt=""></img>
            <div className='eventsDetails'>
                <h3>DSA Diaries 1.0</h3>
                <p>In the past, we organized a remarkable event, "DSA Diaries 1.0," tailored to empower college students with the fascinating realm of Data Structures and Algorithms (DSA) and development. Through engaging workshops and immersive activities, attendees delved into the core concepts of DSA, honing their coding and problem-solving skills. Our expert mentors provided valuable guidance, fostering a deep understanding of efficient programming techniques. "DSA Diaries 1.0" was a transformative experience, equipping college students with the tools and knowledge to excel in the world of technology. Stay tuned for more exciting events as we continue to empower the tech community!</p>
                <div className='eventsDetailsButtons'>
                    <Link to="https://photos.google.com/share/AF1QipNLdZIg3g04-q2GBf0LDyDlgpKI2l0o-A45l1f0qiIXbZyY7dGljrt7XXstq791Tg?key=QVdyZUxCYUpxUUEwbV9CSTNKMUk3U0ZyXzk2MHdn"><button>Event Gallery</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}
export default transition(Events);
