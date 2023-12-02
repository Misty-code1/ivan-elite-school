import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { SiGoogleclassroom } from "react-icons/si";
import {
  FaFacebook,
  FaInstagram,
  FaPeopleGroup,
  FaSchool,
  FaXTwitter,
} from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { LuSendHorizonal } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../Images/ieslogo.png";
import headerImg from "../Images/header-img.jpg";
import eventImg from "../Images/event-img.jpg";
import lifeImg from "../Images/life-img.jpg";
import event2Img from "../Images/event2Img.jpg";
import reviewImg from "../Images/review-img.jpg";
import teacher1 from "../Images/teacher1.jpg";
import teacher2 from "../Images/teacher2.jpg";
import teacher3 from "../Images/teacher3.jpg";
import teacher4 from "../Images/teacher4.jpg";

const Header = () => {
  const [tab, setTab] = useState("A");

  const [isOpen, setIsOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [emailArray, setEmailArray] = useState([]);

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email.trim() !== "") {
      setEmailArray([...emailArray, email]);
      setEmail("");
    }
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="yellowtop"></div>
      <nav className="navbar">
        <Link to="" className="brand">
          <img src={logo} className="logo" alt="logo" /> IVAN ELITE SCHOOL
        </Link>
        <span className="toggler" onClick={toggleNavbar}>
          {" "}
          <GiHamburgerMenu />
        </span>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Mission & Vission
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Learning
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Admissions
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Contact Us
            </Link>
          </li>
        </ul>
        <span className="slogan">Nurturing success</span>
      </nav>

      <div
        style={{
          backgroundImage: `linear-gradient(rgba(40, 110, 28, 0.9), rgba(40, 110, 28, 0.9)),url(${lifeImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="home"
      >
        <div className="pix">
          <img src={logo} alt="" className="center-logo" />
        </div>
      </div>

      <div className="school-event">
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(128, 29, 10, 0.8), rgba(128, 29, 10, 0.8)), url(${eventImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="event"
        >
          <h1>SCHOOL</h1>
          <p>EVENTS</p>
        </div>
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(247, 233, 69, 0.8), rgba(247, 233, 69, 0.8)), url(${headerImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="portal"
        >
          <h1>SCHOOL</h1>
          <p>PORTAL</p>
        </div>

        <div
          style={{
            backgroundImage: `linear-gradient(rgba(31, 74, 150, 0.8), rgba(31, 74, 150, 0.8)), url(${lifeImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="life"
        >
          <h1>SCHOOL</h1>
          <p>LIFE</p>
        </div>
      </div>

      <div className="about-us">
        <div className="logo-div">
          <img src={logo} alt="" className="abt-logo" />
        </div>
        <div className="about">
          <h4>ABOUT US</h4>
          <h2>WHO WE ARE</h2>
          <div className="amv">
            <h3
              className={tab === "A" ? "active normal" : "normal"}
              onClick={() => setTab("A")}
            >
              About Us
            </h3>
            <h3
              className={tab === "B" ? "active normal" : "normal"}
              onClick={() => setTab("B")}
            >
              Our Mission
            </h3>
            <h3
              className={tab === "C" ? "active normal" : "normal"}
              onClick={() => setTab("C")}
            >
              Our Vission
            </h3>
          </div>
          {tab === "A" ? (
            <p className="about-text">
              Welcome to Ivan Elite School, where excellence in education means
              nurturing and inclusive environment. Our dedicated faculty of
              staff are commited to fostering academic, personal, and social
              growth in each and every student. At Ivan Elite we belive that
              education is the key to unlocking endless possibilities and
              empowering students to reach their fullest potential. Come join
              our Ivan family and embark on an exciting journey of learning and
              discovery.{" "}
            </p>
          ) : tab === "B" ? (
            <p className="about-text">
              At Ivan Elite School, we empower future leaders through
              transformative education that sparks curiosity, fosters community,
              and fuels ambition.
            </p>
          ) : (
            <p className="about-text">
              Ivan Elite School envisions holistic education that nurtures
              well-rounded individuals, blending innovation with tradition, to
              shape compassionate leaders for a better world.
            </p>
          )}
        </div>
      </div>

      <div className="mission-section">
        <div className="mission-div">
          <h1>
            <span className="h1-mission">OUR MISSION</span>
          </h1>
          <p className="mission-sub-title">Empowering Leaders</p>
          <p className="mission">
            At Ivan Elite School, we empower future leaders through
            transformative education that sparks curiosity, fosters community,
            and fuels ambition.
          </p>
        </div>
        <div className="vision-div">
          <h1>
            <span className="h1-mission">OUR VISION</span>
          </h1>
          <p className="mission-sub-title">Redefining Excellence</p>
          <p className="mission">
            Ivan Elite School envisions holistic education that nurtures
            well-rounded individuals, blending innovation with tradition, to
            shape compassionate leaders for a better world.
          </p>
        </div>
      </div>

      <div className="director-msg-div">
        <div className="msg-div">
          <p className="dirm">Director's Message</p>
          <h2 className="dirt">
            EDUCATION IS THE MOST <br /> POWERFUL WEAPON
          </h2>
          <p className="dirmp">
            Our students are talented, hard-working and full of good ideas. We
            encourage and empower them to bring their ideas to life. Hands on
            opportunities are what we're all about. Our students are busy doing
            things that matter. <br /> Take a look ate the opportunities you'll
            have at the School. The task of a modern educator is not to cut down
            jungles but to irrigate deserts.
          </p>
          <h5 className="dir-name">MRS. JOY ANYASI</h5>
          <p className="dir-title">General Director</p>
        </div>
        <div className="msg-images">
          <div className="tall-img">
            <img src={event2Img} alt="" className="tallimg" width="100%" />
          </div>
          <div className="block-img">
            <div className="image-box">
              <img src={event2Img} alt="" className="blockimg" width="100%" />
            </div>
            <div className="image-box">
              <img src={event2Img} alt="" className="blockimg" width="100%" />
            </div>
          </div>
        </div>
      </div>

      <div className="learning">
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(128, 29, 10, 0.9), rgba(128, 29, 10, 0.9)), url(${eventImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="learning-head"
        >
          <h1 className="Learning-h1">Learning</h1>
          <p className="Learning-p">Experience our diverse school curriculum</p>
        </div>
        <div className="learning-text">
          <h1 className="learning-text-h1">Explore Our Range Of Programs</h1>
          <p className="learning-text-p">
            Looking for quality Education? Look no futher, Explore our range of
            programs including creche, nursery, primary, and after-school care.
            Enroll your child today.
          </p>
        </div>
        <div className="learning-programs">
          <div className="cards">
            <div className="card">
              <img src={event2Img} alt="" className="course-img" />
              <div className="terms">
                <h2 className="course">CRECHE</h2>
                <p className="course-text">
                  Providing safe and loving care for your little ones. Enroll
                  them in our creche today.
                </p>
              </div>
            </div>
            <div className="card">
              <img src={event2Img} alt="" className="course-img" />
              <div className="terms">
                <h2 className="course">NURSERY</h2>
                <p className="course-text">
                  We providing a safe and sound environment, and equip children
                  with knowledge.
                </p>
              </div>
            </div>
            <div className="card">
              <img src={event2Img} alt="" className="course-img" />
              <div className="terms">
                <h2 className="course">PRIMARY</h2>
                <p className="course-text">
                  We offer a comprehensive elementry education that prepares
                  students for the challenges ahead.
                </p>
              </div>
            </div>
            <div className="card">
              <img src={event2Img} alt="" className="course-img" />
              <div className="terms">
                <h2 className="course">AFTER SCHOOL</h2>
                <p className="course-text">
                  We provide a safe and supportive environment for kids to
                  learn, play and grow
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="why-chose-us">
        <h2 className="why-h2">WHY CHOSE IVAN ELITE</h2>
        <div className="why-text">A choice that makes a difference</div>
        <div className="why-row">
          <div className="why-grid">
            <FaPeopleGroup className="people-icon" />
            <h4 className="experience">Experienced Staff</h4>
            <p className="experience-text">
              Our experienced staff is here to ensure that every student
              receives the best possible education. Our staff members bring a
              wealth of knowledge , expertise and passion to the classroom,
              creating an environment where curisity and creativity thrive.
            </p>
          </div>
          <div className="why-grid">
            <SiGoogleclassroom className="people-icon" />
            <h4 className="experience">Extensive Subjects</h4>
            <p className="experience-text">
              Our extensive Subject catalog caters to a diverse range of
              passions and aspirations. Whether your child is eager to dive into
              the sciencs, express themselves through the arts, or explore
              cutting-edge technologies, our curriculum is designed to inspire
              and empower.
            </p>
          </div>
          <div className="why-grid">
            <FaSchool className="people-icon" />
            <h4 className="experience">Dedicated Support</h4>
            <p className="experience-text">
              Education goes beyond classroom. Our dedicated support system
              encompasses a wide range of resources and services designed to
              address the unique needs of every student, ensuring that they feel
              heard, understood and valued.
            </p>
          </div>
        </div>
      </div>

      <div className="testimonial-div">
        <h4 className="testimonial">TESTIMONIAL</h4>
        <h2 className="title">What Parents Say</h2>
        <div className="review-box">
          <div className="review-img">
            <img src={reviewImg} alt="" className="testimonial-img" />
          </div>
          <div className="review-text">
            <BiSolidQuoteAltLeft className="review-icon" />
            <p className="review-para">
              "Sending my daughter to Ivan Elite School was the best decision I
              ever made. She's thriving academically and socially in such a
              supportive and inclusive environment. <br /> Ivan Elite has truly
              exceeded my expectations! <br /> From their exceptional teachers
              to their top-notch facilities, my daughter is geting the best
              education possible. I couldn't be happier."
            </p>
          </div>
          <div className="user-box">
            <div className="user-img-div">
              <img src={reviewImg} alt="" className="user-img" />
            </div>
            <div className="review-words">
              <h2 className="username">Mrs Kemi Jare</h2>
              <p className="parent">Parent/Guardian</p>
            </div>
          </div>
        </div>
      </div>

      <div className="ivan-staff">
        <h2 className="meet-staff">Meet Our Teachers</h2>
        <div className="staff-row">
          <div className="staff-card">
            <img src={teacher1} alt="" className="staff-profile" />
            <div className="staff-name-div">
              <h2>
                <span className="staff-name">Mrs Austin</span>
              </h2>
            </div>
          </div>
          <div className="staff-card">
            <img src={teacher2} alt="" className="staff-profile" />
            <div className="staff-name-div">
              <h2>
                <span className="staff-name">Mrs Funmi</span>
              </h2>
            </div>
          </div>
          <div className="staff-card">
            <img src={teacher3} alt="" className="staff-profile" />
            <div className="staff-name-div">
              <h2>
                <span className="staff-name">Mrs Etiko</span>
              </h2>
            </div>
          </div>
          <div className="staff-card">
            <img src={teacher4} alt="" className="staff-profile" />
            <div className="staff-name-div">
              <h2>
                <span className="staff-name">Mrs Obikaonor</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="news-letter">
        <div className="nl-top">
          <h4 className="nl-heading">NEWSLETTER</h4>
          <h2 className="nl-latest">Get Latest News</h2>
          <div className="input-div">
            <MdOutlineEmail className="left-icon" />
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={handleInputChange}
                className="nl-input"
              />
              <button type="submit" className="submit-btn">
                <LuSendHorizonal className="right-icon" />
              </button>
            </form>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(40, 110, 28, 0.5), rgba(40, 110, 28, 0.5)), url(${eventImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
          className="nl-middle"
        >
          <h1 className="nl-title">Ivan Elite School</h1>
          <p className="nl-para">Nuturing for success</p>
          <Link to="/" className="enroll-btn">
            ENROLL YOUR CHILD TODAY
          </Link>
        </div>
        <div className="nl-footer">
          <div className="top-footer">
            <div className="footer-icons">
              <div>
                <AiOutlineMail />
              </div>
              <div>
                <FaFacebook />
              </div>
              <div>
                <FaInstagram />
              </div>
              <div>
                <FaXTwitter />
              </div>
            </div>
          </div>
          <div className="down-footer">
            <p className="ivan-cp">
              Ivan Elite School <span className="dot">&#10242;</span> 55
              Afariogun Street <span className="dot">&#10242;</span> Oshodi,
              Lagos State
            </p>
            <p className="copyright">
              Copyright 2023 <span className="cp-span">&copy;</span> All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
