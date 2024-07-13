import React from 'react'
import './Home.css'
import me from '../../Assets/WhatsApp_Image_2023-12-12_at_19.30.51_442ba4fe-removebg-preview.png'
import html from '../../Assets/html-5-svgrepo-com.svg'
import css from '../../Assets/css-svgrepo-com.svg'
import js from '../../Assets/javascript-svgrepo-com.svg'
import ts from '../../Assets/typescript-official-svgrepo-com.svg'
import redux from '../../Assets/redux-svgrepo-com.svg'
import jq from '../../Assets/jquery-svgrepo-com.svg'
import next from '../../Assets/next-dot-js-svgrepo-com.svg'
import react from '../../Assets/reactts-svgrepo-com.svg'
import sass from '../../Assets/sass-svgrepo-com.svg'
import me2 from '../../Assets/331951387_548169620741832_3723513982298122348_n-removebg-preview.png'
import build from '../../Assets/Screenshot 2024-03-20 215347.png'
import build1 from '../../Assets/Screenshot 2024-03-20 214610.png'
import build2 from '../../Assets/Screenshot 2024-03-20 214715.png'
import build3 from '../../Assets/Screenshot 2024-03-20 214816.png'
import build4 from '../../Assets/Screenshot 2024-03-20 215743.png'
import build5 from '../../Assets/Screenshot 2024-03-20 220103.png'
import build6 from '../../Assets/Screenshot 2024-03-21 180642.png'
import build7 from '../../Assets/todo.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
export default function Home() {

  const divVariants = {
    hidden: {
      x: 100
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return <>
    <header className='mb-5'>
      <div className="main-page py-3 vh-100">
        <div className="container">
          <div className="header">
            <div className="row align-items-center py-5">
              <div className="col-md-6">
                <div className="content fw-bold text-start py-5">
                  <motion.p animate={{ x: 0, rotate: 0 }} initial={{ x: 200, rotate: 180 }} transition={{ duration: 2 }}>Hey, I'm Osama</motion.p>
                  <motion.h1 initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 2 }} className='fw-bold'>Front-end <br /> Developer</motion.h1>
                  <motion.button variants={divVariants} initial="hidden" animate="visible" className='btnBg'>Get In Touch</motion.button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="content position-relative py-5">
                  <div className="image text-center py-3 posiiton-relative">
                    <img src={me} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section className="section1 py-5 my-5">
      <div className="container">
        <div className="title">
          <h5 className='fw-bold'>My Skills</h5>
          <h2 className='fs-1 fw-bold'>My Expertise</h2>
        </div>

        <div className="row">
          <div className="col-md-3 py-5">
            <div className="content rounded-3 text-center py-4">
              <img src={html} className='w-50' alt="" />
            </div>
          </div>
          <div className="col-md-3 py-5">
            <div className="content rounded-3 text-center py-4">
              <img src={css} className='w-50' alt="" />
            </div>
          </div>
          <div className="col-md-3 py-5">
            <div className="content rounded-3 text-center py-4">
              <img src={js} className='w-50' alt="" />
            </div>
          </div>
          <div className="col-md-3 py-5">
            <div className="content rounded-3 text-center py-4">
              <img src={ts} className='w-50' alt="" />
            </div>
          </div>
          <div className="col-md-3 py-5">
            <div className="content rounded-3 text-center py-4">
              <img src={next} className='w-50' alt="" />
            </div>
          </div>
          <div className="col-md-3 py-5">
            <div className="content rounded-3 text-center py-4">
              <img src={redux} className='w-50' alt="" />
            </div>
          </div>
          <div className="col-md-3 py-5">
            <div className="content rounded-3 text-center py-4">
              <img src={sass} className='w-50' alt="" />
            </div>
          </div>
          <div className="col-md-3 py-5">
            <div className="content rounded-3 text-center py-4">
              <img src={jq} className='w-50' alt="" />
            </div>
          </div>
          <div className="col-md-12 py-5">
            <div className="content rounded-3 text-center py-4">
              <img src={react} className='w-25' alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="about bg-dark">
      <div className="container">
        <div className="row align-items-center justify-content-between w-100">
          <div className="col-md-4">
            <div className="content text-center">
              <img src={me2} className='w-100' alt="" />
            </div>
          </div>
          <div className="col-md-8">
            <div className="content text-light text-center py-5">
              <h2 className='py-4'>About me</h2>
              <p className='lead'>I am Student at Shorouk Academy in the major of Computer Science</p>
              <p className='lead'>I have had a Front-end Diploma with Route</p>
              <p className='lead'>I am 21 years old, from Obour City</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="portfolio py-5">
      <div className="container">
        <div className="header d-flex align-items-center justify-content-between">
          <div className="title">
            <p className='fw-bold'>Recent Projects</p>
            <p className='fw-bold fs-4'>My Portfolio</p>
          </div>
          <div className="link">
            <Link to={'https://github.com/Ososmeedo1'} target='_blank' className='btnBg text-decoration-none'>My Github</Link>
          </div>
        </div>
        <div className="row gy-4">
          <div className="col-md-4">
            <div className="content">
              <img src={build} className='w-100' alt="" />
              <Link className='btnBg py-1 text-decoration-none' to={'https://ososmeedo1.github.io/BUILDICON/Assignment.html'} target='_blank'>Visit Site</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="content">
              <img src={build1} className='w-100' alt="" />
              <Link className='btnBg py-1 text-decoration-none' target='_blank' to={`https://ososmeedo2210.netlify.app/`}>Visit Site</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="content">
              <img src={build2} className='w-100' alt="" />
              <Link className='btnBg py-1 text-decoration-none' target='_blank' to={`https://restaurant22.netlify.app/`}>Visit Site</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="content">
              <img src={build3} className='w-100' alt="" />
              <Link className='btnBg py-1 text-decoration-none' target='_blank' to={`https://ososmeedo1.github.io/Digital-Agency/Assignment.html`}>Visit Site</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="content">
              <img src={build4} className='w-100' alt="" />
              <Link className='btnBg py-1 text-decoration-none' target='_blank' to={`https://ososmeedo1.github.io/University/Assignment.html`}>Visit Site</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="content">
              <img src={build5} className='w-100' alt="" />
              <Link className='btnBg py-1 text-decoration-none' target='_blank' to={`https://ososmeedo1.github.io/Job-finder/Assignment.html`}>Visit Site</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="content">
              <img src={build7} className='w-100' alt="" />
              <Link className='btnBg py-1 text-decoration-none' target='_blank' to={`https://ososmeedo1.github.io/to-do-list/Assignment.html`}>Visit Site</Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <div className="container text-light text-center">
        <div className="row py-4 align-items-center">
          <div className="col-md-6">
            <div className="title">
              <h2 className='fs-1 fw-bold'>Contact Me</h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="title">
              <Link to={`https://www.linkedin.com/in/osama-el-gamal-87712b2a4/`} target='_blank' className='text-decoration-none text-light fw-bold fs-1'><i className='fab fa-linkedin'></i> Linkedin</Link><br />
              <Link to={`https://www.facebook.com/profile.php?id=100007172472578`} target='_blank' className='text-decoration-none text-light fw-bold fs-1'><i className='fab fa-facebook'></i> Osama Ahmed</Link>
              <p className='fs-1 fw-bold'><i className='fas fa-envelope'></i> ososmeedo@gmail.com</p>
              <p className='fw-bold fs-1'><i class="fa-solid fa-phone"></i> 01060683508</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>
}
