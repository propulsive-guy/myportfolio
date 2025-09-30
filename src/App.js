// App.js
import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center } from "@react-three/drei";
import { Howl } from "howler";
import gsap from "gsap";

function Model({ startZoom, onZoomDone }) {
  const { scene } = useGLTF("/scene.gltf");
  const ref = useRef();
  const { camera } = useThree();

  useEffect(() => {
    if (startZoom) {
      gsap.to(camera.position, {
        z: 3.5,
        duration: 5,
        ease: "power2.inOut",
        onComplete: () => onZoomDone(),
      });
    }
  }, [startZoom, camera, onZoomDone]);

  useFrame(() => {
    if (ref.current) ref.current.rotation.y -= 0.0025;
  });

  return (
    <Center>
      <primitive ref={ref} object={scene} scale={1} />
    </Center>
  );
}
useGLTF.preload("/scene.gltf");

function IntroSequence({ onFinish }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [];
    timers.push(setTimeout(() => setPhase(1), 800));
    timers.push(setTimeout(() => setPhase(2), 2900));
    timers.push(setTimeout(() => setPhase(0), 4800));
    timers.push(setTimeout(onFinish, 5200));
    return () => timers.forEach((t) => clearTimeout(t));
  }, [onFinish]);

  return (
    <div className="intro-sequence">
      {phase === 1 && <div> <h2>I Am Priyanshu Behere</h2></div>}
      {phase === 2 && <div><h2>Welcome To My World</h2></div>}
    </div>
  );
}




function PortfolioOverlay({ section, setSection, onClose }) {
  const sections = [
    "About Me",
    "Projects",
    "Experience",
    "Tech Stack",
    
    "Achievements",
    
   
    "Contact",
  ];

  return (
    <div className="portfolio-overlay">
      <div className="portfolio-panel" data-portfolio-panel>
        {/* Header */}
        <div className="portfolio-header">
  <div>
    <h1>Priyanshu Behere</h1>
    <h5>Software Development Engineer</h5>
  </div>

  <div className="portfolio-nav">
    {sections.map((s) => (
      <button
        key={s}
        onClick={() => setSection(s)}
        className={section === s ? "active" : ""}
      >
        {s}
      </button>
    ))}

  

    <button onClick={onClose} className="close-btn">
      Close
    </button>
  </div>
</div>


        <hr />

        {/* Content */}
        <div className="portfolio-content">
          {section === "About Me" && (
            <div className="about-me">
              <img
                src="/WhatsApp Image 2025-09-21 at 12.31.12.jpeg"
                alt="Priyanshu Behere"
              />
             <h2>About Me</h2>

<p class="about-text">
  I am a passionate computer science student with a strong focus on building innovative, scalable, and impactful technological solutions. Throughout my journey, I have worked on multiple <span class="highlight">real-life projects</span> spanning areas such as <span class="highlight">artificial intelligence</span>, <span class="highlight">machine learning</span>, and <span class="highlight">computer vision</span>. These experiences have strengthened my technical expertise and taught me how to apply theoretical concepts to solve <span class="highlight">real-world problems</span> effectively.
</p>

<p class="about-text">
  My <span class="highlight">problem-solving skills</span> and ability to perform under pressure have been validated through achievements at the <span class="highlight">national level</span>, where I have <span class="highlight">won two hackathons</span>. These competitions gave me opportunities to collaborate with teams, think critically, and develop solutions that balance <span class="highlight">innovation</span> with <span class="highlight">practicality</span>.
</p>

<p class="about-text">
  Alongside technical accomplishments, I have consistently taken on <span class="highlight">leadership roles</span>. I have served as <span class="highlight">ACM Vice Chairperson</span> at YCCE, <span class="highlight">Codeware Secretary</span>, and currently as the <span class="highlight">IEEE Computer Society Chairperson</span>. These responsibilities have refined my <span class="highlight">organizational</span> and <span class="highlight">communication skills</span>, and strengthened my ability to guide teams toward achieving <span class="highlight">collective goals</span>.
</p>

<p class="about-text">
  I strive to combine <span class="highlight">technical depth</span> with <span class="highlight">leadership</span> and <span class="highlight">collaboration</span>, positioning myself as a professional who not only delivers solutions but also drives meaningful impact. Looking ahead, I aim to leverage my skills and experiences to contribute to <span class="highlight">innovative projects</span> and continue pushing the boundaries of <span class="highlight">technology</span>.
</p>
</div>
          )}
        {section === "Experience" && (
  <>
    <h2> Experience</h2>
    <ul>
      <li>
        <strong>PugArch Technologies – AI & ML Intern</strong> (May 2025 – Present)
        <ul>
          <li>Developed computer vision models using custom CNN, Vision Transformers, and pretrained models such as YOLOv8.</li>
          <li>Built a custom image annotation system that increased work efficiency by 15%.</li>
          <li>Created custom datasets for model training with data preprocessing and augmentation.</li>
          <li>Deployed scalable systems on GCP and reduced latency by 18%.</li>
        </ul>
      </li>
    </ul>
  </>
)}

{section === "Tech Stack" && (
  <>
    <h2>Tech Stack</h2>

    <div className="tech-stack">

      {/* Languages */}
      <h4>Languages</h4>
      <div className="tech-icons">
        <div className="tech-icon">
          <img src="/icons/c.png" alt="C" title="C" />
          <span>C</span>
        </div>
        <div className="tech-icon">
          <img src="/icons/c++.png" alt="C++" title="C++" />
          <span>C++</span>
        </div>
        <div className="tech-icon">
          <img src="/icons/python.png" alt="Python" title="Python" />
          <span>Python</span>
        </div>
        <div className="tech-icon">
          <img src="/icons/swift.png" alt="Swift" title="Swift" />
          <span>Swift</span>
        </div>
        <div className="tech-icon">
          <img src="/icons/swiftui.png" alt="SwiftUI" title="SwiftUI" />
          <span>SwiftUI</span>
        </div>
        <div className="tech-icon">
          <img src="/icons/javascript.png" alt="JavaScript" title="JavaScript" />
          <span>JavaScript</span>
        </div>
        <div className="tech-icon">
          <img src="/icons/html.png" alt="HTML" title="HTML" />
          <span>HTML</span>
        </div>
        <div className="tech-icon">
          <img src="/icons/css.png" alt="CSS" title="CSS" />
          <span>CSS</span>
        </div>
      </div>

      {/* Libraries & Frameworks */}
      <h4>Libraries & Frameworks</h4>
      <div className="tech-icons">
        <div className="tech-icon"><img src="/icons/flask4.png" alt="Flask" /><span>Flask</span></div>
        <div className="tech-icon"><img src="/icons/tensorflow.png" alt="TensorFlow" /><span>TensorFlow</span></div>
        <div className="tech-icon"><img src="/icons/scikitlearn.png" alt="Scikit-Learn" /><span>Scikit-Learn</span></div>
        <div className="tech-icon"><img src="/icons/numpy.png" alt="NumPy" /><span>NumPy</span></div>
        <div className="tech-icon"><img src="/icons/pandas.png" alt="Pandas" /><span>Pandas</span></div>
        <div className="tech-icon"><img src="/icons/opencv.png" alt="OpenCV" /><span>OpenCV</span></div>
        <div className="tech-icon"><img src="/icons/streamlit.png" alt="Streamlit" /><span>Streamlit</span></div>
      </div>

      {/* Tools & Technologies */}
      <h4>Tools & Technologies</h4>
      <div className="tech-icons">
        <div className="tech-icon"><img src="/icons/github2.png" alt="Git & GitHub" /><span>Git/GitHub</span></div>
        <div className="tech-icon"><img src="/icons/hgginhface.png" alt="Hugging Face" /><span>Hugging Face</span></div>
         <div className="tech-icon"><img src="icons/firebase.png" alt="Firebase" /><span>Firebase</span></div>
        <div className="tech-icon"><img src="/icons/postgres.png" alt="Postgres" /><span>Postgres</span></div>
        <div className="tech-icon"><img src="/icons/mongodb.png" alt="MongoDB" /><span>MongoDB</span></div>
        <div className="tech-icon"><img src="/icons/aws.png" alt="AWS" /><span>AWS</span></div>
        <div className="tech-icon"><img src="/icons/gcp.png" alt="GCP" /><span>GCP</span></div>
        <div className="tech-icon"><img src="/icons/docker.png" alt="Docker" /><span>Docker</span></div>
      </div>
    </div>
  </>
)}




         {section === "Projects" && (
  <>
    <h2> Projects</h2>
    <div className="projects-container">
      <div className="project-card">
        <img src="/tryon.png" alt="TryOn Project" className="project-image" />
        <div className="project-content">
          <h3>TryOn – Personal AI-powered Virtual Fitting Room <a href="https://github.com/propulsive-guy/tryon" target="_blank" rel="noopener noreferrer">[GitHub]</a></h3>
          <p><strong>Tech:</strong> Node.js, Express, Nano-Banana | Sept 2025</p>
          <ul>
            <li>An AI-powered Chrome extension virtual fitting room that lets you see how any outfit looks on you before wearing it.</li>
            <li>Used Node.js and Express.js for server and API management.</li>
            <li>Employed the latest Gemini model <em>gemini-2.5-flash-image-preview (Nano-Banana)</em> for image generation.</li>
          </ul>
        </div>
      </div>

      <div className="project-card">
        <img src="/don.png" alt="Telematic Dongle Project" className="project-image"/>
       
        <div className="project-content">
          <h3>Low-Cost Telematic Dongle <a href="https://github.com/rchandrashekar53/Enduraverse/tree/main/Enduraverse-2025/Team-E-Synapse" target="_blank" rel="noopener noreferrer">[GitHub]</a></h3>
          <p><strong>Tech:</strong> C++, ESP32, MPU6050, Firebase, AWS EC2 | Feb 2025</p>
          <ul>
            <li>Developed an affordable, general-purpose telematics dongle utilizing the MPU6050 and ESP32 module.</li>
            <li>Designed custom firmware for the dongle.</li>
            <li>Created a machine learning model to predict vehicle health and detect rash driving.</li>
            <li>Deployed on AWS EC2.</li>
          </ul>
        </div>
      </div>

     

      <div className="project-card">
      <video
  src="/zomabot.mov"
  alt="Zomato Clone Project"
  controls
  autoPlay
  muted
  loop
  style={{
    width: "100%",          // full width of card
    height: "200px",        // fixed height (or adjust as needed)
    objectFit: "contain",   // ensures full video is visible
    display: "block",
    borderBottom: "1px solid #fff",
    backgroundColor: "#000" // prevents empty space from showing as white
  }}
/>

        <div className="project-content">
          <h3>Zomato App Clone with Zomabot <a href="https://github.com/propulsive-guy/zomato_clone_ios" target="_blank" rel="noopener noreferrer">[GitHub]</a></h3>
          <p><strong>Tech:</strong> Swift, SwiftUI, Gemini-1.5-flash | Aug 2025</p>
          <ul>
            <li>Implemented a special feature that helps users find food items based on their mood using the “Zomabot.”</li>
            <li>Developed custom components to improve the user interface using MVVM architecture.</li>
            <li>Improved performance through effective state management.</li>
            <li>Leveraged SwiftUI’s declarative syntax to simplify complex UI logic.</li>
          </ul>
        </div>
      </div>
      <div className="project-card">
        <img src="/mind2.png" alt="Mindlift Project" className="project-image"  />
        <div className="project-content">
          <h3>Mindlift – Trauma Therapy Assistant <a href="https://github.com/propulsive-guy/mindlift_trauma_therapy_assistant" target="_blank" rel="noopener noreferrer">[GitHub]</a></h3>
          <p><strong>Tech:</strong> Node.js, Express, Gemini-1.5-flash, MongoDB | Sept 2025</p>
          <ul>
            <li>An AI-powered trauma therapy assistant designed for women, children, and other crime victims.</li>
            <li>Integrated JWT authentication to guarantee secure and private discussions.</li>
            <li>Employed MongoDB for managing user data and past conversations.</li>
            <li>Used Node.js and Express.js for server and API management with MVC architecture.</li>
          </ul>
        </div>
      </div>

      <div className="project-card">
        <img src="/gar.png" alt="Garbage Segregation Project" className="project-image" />
        <div className="project-content">
          <h3>Garbage Segregation Model <a href="GITHUB_LINK" target="_blank" rel="noopener noreferrer">[GitHub]</a></h3>
          <p><strong>Tech:</strong> YOLOv8, Flask, GCP, Roboflow | Jul 2025</p>
          <ul>
            <li>Fine-tuned a YOLOv8 model using a custom dataset for detecting and segregating garbage in public areas.</li>
            <li>Successfully deployed the model on Google Cloud Platform (GCP) and reduced latency by 15%.</li>
            <li>Implemented authentication for secure API access.</li>
          </ul>
        </div>
      </div>

    
    </div>
  </>
)}


{section === "Achievements" && (
  <>
    <h2> Achievements</h2>
    <div className="achievements-container">
      
      <div className="achievement-card">
        <img src="/enduraverse.png" alt="Enduraverse Hackathon" className="achievement-image" />
        <div className="achievement-content">
          <h3>Enduraverse</h3>
          <p>National level hackathon winner</p>
          <a href="https://www.linkedin.com/posts/priyanshu-behere_enduraverse25-ycce-teamabrsynapse-activity-7301849018270105600-HMCf?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADXgqmgBpsnVU56dur0GRi8zYubXXw08DhQ" target="_blank" rel="noopener noreferrer">Know More</a>
        </div>
      </div>

      <div className="achievement-card">
        <img src="hackgenx.png" alt="Hackgenx Hackathon" className="achievement-image" />
        <div className="achievement-content">
          <h3>Hackgenx</h3>
          <p>National level hackathon winner</p>
          <a href="https://www.linkedin.com/posts/priyanshu-behere_second-win-in-a-row-we-participated-activity-7320482896455024642-0kOQ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADXgqmgBpsnVU56dur0GRi8zYubXXw08DhQ" target="_blank" rel="noopener noreferrer">Know More</a>
        </div>
      </div>

      <div className="achievement-card">
        <img src="/ieee2.png" alt="IEEE Chairperson" className="achievement-image" />
        <div className="achievement-content">
          <h3>IEEE Computer Society Chairperson</h3>
          <p>YCCE</p>
          <a href="https://www.linkedin.com/posts/priyanshu-behere_on-24th-july-2025-the-ieee-computer-society-activity-7354406222143377409-XGEN?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADXgqmgBpsnVU56dur0GRi8zYubXXw08DhQ" target="_blank" rel="noopener noreferrer">Know More</a>
        </div>
      </div>

      <div className="achievement-card">
        <img src="/hack.png" alt="CodeRush Hackathon" className="achievement-image" />
        <div className="achievement-content">
          <h3>Organized CodeRush</h3>
          <p>National level Hackathon with 1400+ teams from India</p>
          <a href="https://www.linkedin.com/posts/priyanshu-behere_if-someone-asks-me-about-the-best-thing-i-activity-7368329761347047425-LPtl?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADXgqmgBpsnVU56dur0GRi8zYubXXw08DhQ" target="_blank" rel="noopener noreferrer">Know More</a>
        </div>
      </div>

      <div className="achievement-card">
        <img src="/acm.png" alt="ACM Vice Chairperson" className="achievement-image" />
        <div className="achievement-content">
          <h3>ACM-YCCE Vice Chairperson</h3>
          <p>Leadership role at ACM YCCE</p>
          <a href="https://www.linkedin.com/posts/priyanshu-behere_acm-ycce-webdevelopment-activity-7245080490976673793-a3Jb?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADXgqmgBpsnVU56dur0GRi8zYubXXw08DhQ" target="_blank" rel="noopener noreferrer">Know More</a>
        </div>
      </div>

      <div className="achievement-card">
        <img src="/reliance.png" alt="Reliance Scholar" className="achievement-image" />
        <div className="achievement-content">
          <h3>Reliance Foundation Scholar</h3>
          <p>Awarded 2 lakh INR</p>
          <a href="https://www.linkedin.com/posts/priyanshu-behere_reliancefoundationscholarship-grateful-opportunityofalifetime-activity-7078735983810129920-mr-2?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADXgqmgBpsnVU56dur0GRi8zYubXXw08DhQ" target="_blank" rel="noopener noreferrer">Know More</a>
        </div>
      </div>

    

     

    

    </div>
  </>
)}






        
{section === "Contact" && (
  <div className="contact">
    <h2>Contact</h2>
    <p>Email: <b><a href="mailto:priyanshu7behere@gmail.com">priyanshu7behere@gmail.com</a></b></p>
    <p>LinkedIn: <a href="https://www.linkedin.com/in/priyanshu-behere/" target="_blank" rel="noopener noreferrer">linkedin.com/in/priyanshu-behere</a></p>
    <p>GitHub: <a href="https://github.com/propulsive-guy" target="_blank" rel="noopener noreferrer">github.com/propulsive-guy</a></p>
  </div>
)}

        </div>
      </div>
    </div>
  );
}



export default function App() {
  const [started, setStarted] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [zoomDone, setZoomDone] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [portfolioSection, setPortfolioSection] = useState("About Me");
  const musicRef = useRef();

  const handleStart = () => {
    setStarted(true);
    setTimeout(() => setShowIntro(true), 300);
    try {
      const sound = new Howl({ src: ["/music3.mp3"], loop: true, volume: 0.3 });
      sound.play();
      musicRef.current = sound;
    } catch {}
  };

  const handleIntroFinish = () => {
    setShowIntro(false);
    setTimeout(() => setShowModel(true), 200);
  };

  const handleZoomDone = () => {
    setZoomDone(true);
    setPortfolioOpen(true);
  };

  useEffect(() => {
    if (portfolioOpen) {
      const el = document.querySelector("[data-portfolio-panel]");
      if (el) {
        gsap.fromTo(
          el,
          { y: -18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
        );
      }
    }
  }, [portfolioOpen]);

  return (



    <>

    {/* Portfolio Overlay */}
{portfolioOpen && (
  <PortfolioOverlay
    section={portfolioSection}
    setSection={setPortfolioSection}
    onClose={() => setPortfolioOpen(false)}
  />
)}

{/* Persistent "Open Portfolio" Button */}
{!portfolioOpen && started && !showIntro && (
  <button 
    className="open-portfolio-btn" 
    onClick={() => setPortfolioOpen(true)}
  >
    Open Portfolio
  </button>
)}
      {!started && (
        <div className="landing-screen">
          <h1>Hello World!</h1>
          <p>Press Button To Enter</p>
          <button onClick={handleStart}>Enter</button>
        </div>
      )}

      {showIntro && <IntroSequence onFinish={handleIntroFinish} />}
      {portfolioOpen && (
        <PortfolioOverlay
          section={portfolioSection}
          setSection={setPortfolioSection}
          onClose={() => setPortfolioOpen(false)}
        />
      )}
      {showModel && (
        <Canvas
          camera={{ position: [0, 0, 12], fov: 70 }}
          style={{ width: "100vw", height: "100vh", background: "black" }}
        >
          <ambientLight intensity={1.2} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Suspense fallback={null}>
            <Model startZoom={!zoomDone} onZoomDone={handleZoomDone} />
          </Suspense>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={0}
          />
        </Canvas>
      )}

      {/* ===== Responsive CSS ===== */}
      <style>{`
        .landing-screen {
          position: fixed;
          inset: 0;
          background: linear-gradient(180deg, #000, #070707);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          z-index: 100;
          padding: 1rem;
          text-align: center;
        }
        .landing-screen h1 { font-size: clamp(2rem, 6vw, 3rem); margin-bottom: 0.5rem; }
        .landing-screen p { font-size: clamp(1rem, 3vw, 1.2rem); margin-bottom: 1rem; }
        .landing-screen button { padding: 0.75rem 2rem; font-size: clamp(0.9rem, 2vw, 1.2rem); }

        .intro-sequence {
          position: fixed;
          inset: 0;
          background: black;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: clamp(1.5rem, 5vw, 2rem);
          font-weight: 700;
          z-index: 90;
          text-align: center;
          padding: 1rem;
        }

        .portfolio-overlay {
          position: fixed;
          inset: 0;
          z-index: 50;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 2rem;
        }

        .portfolio-panel {
          width: min(95vw, 1200px);
          background: linear-gradient(180deg, rgba(10,10,12,0.72), rgba(6,6,6,0.5));
          border-radius: 1rem;
          padding: 1rem;
          color: white;
          backdrop-filter: blur(5px) saturate(190%);
          border: 1px solid rgba(255,255,255,0.05);
          box-shadow: 0 12px 40px rgba(0,0,0,0.6);
          max-height: 86vh;
          overflow-y: auto;
        }

        .portfolio-header {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .portfolio-nav {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .portfolio-nav button {
          padding: 0.5rem 0.75rem;
          border-radius: 0.5rem;
          border: none;
          background: transparent;
          color: white;
          cursor: pointer;
          font-size: clamp(0.8rem, 2vw, 1rem);
        }
        .portfolio-nav button.active { background: rgba(255,255,255,0.08); }
        .portfolio-nav .close-btn { border: 1px solid rgba(255,255,255,0.06); }

        .portfolio-content img {
          width: 250px;
          height:250px;
          object-fit: cover;
          border-radius: 50%;
          border: 4.5px solid rgba(255,255,255,0.7);
          box-shadow: 10px 60px 20px rgba(0,0,0,0.5);
          float: right;
          margin: 0 0 1rem 1rem;
        }
        .about-text {
          line-height: 1.6;
          margin-bottom: 1em;
          font-size: 1rem;
          color: #ffffff; /* white text */
        }
        
        .about-text .highlight {
          font-weight: bold;
          color: #ffffff; /* white highlight text */
        }
        
        
        
        .portfolio-content h2 { margin-top: 0.5rem; font-size: clamp(1.2rem, 4vw, 1.8rem); }
        .portfolio-content p, .portfolio-content li { font-size: clamp(0.9rem, 3vw, 1.1rem); line-height: 1.6; }
        
        @media (min-width: 768px) {
          .portfolio-header { flex-direction: row; justify-content: space-between; align-items: center; }
        }


         /* ADD FROM HERE */




         /* Container for all project cards */
         .projects-container {
           display: grid;
           grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
           gap: 20px;
           margin-top: 20px;
         }
         
         /* Individual project card */
         .project-card {
           display: flex;
           flex-direction: column;
           width: 100%;                  /* full width of grid cell */
           overflow: hidden;
           border: 1px solid #fff;
           border-radius: 12px;
           background-color: #000;
           transition: transform 0.3s, box-shadow 0.3s;
           box-shadow: 0px 40px 20px rgba(255, 255, 255, 0.05); /* subtle glow */
         }
         
         /* Hover effect for card */
         .project-card:hover {
           transform: translateY(-5px);
           box-shadow: 0px 12px 60px rgba(255, 255, 255, 0.15); /* increased glow on hover */
         }
         
         /* Project image */
         .project-image {
           width: 100% !important;               /* full width */
           height: 200px  !important;             /* fixed height for uniformity */
           object-fit: cover  !important;         /* fills the rectangle without distortion */
           display: block  !important;
           border-radius: 0  !important;          /* keep rectangle shape */
           border-bottom: 1px solid #fff  !important;
           
           margin: 0 !important; 
           padding: 0 !important;
         }
         
         /* Content section */
         .project-content {
           padding: 20px;
           display: flex;
           flex-direction: column;
         }
         
         /* Project title */
         .project-content h3 {
           font-size: 1.25rem;
           color: #fff;
           margin-bottom: 10px;
         }
         
         /* Tech stack / short info paragraph */
         .project-content p {
           font-size: 1rem;
           color: #fff;
           margin-bottom: 12px;
         }
         
         /* Bullet points / project description */
         .project-content ul {
           list-style-type: disc;
           padding-left: 20px;
           color: #fff;
         }
         
         .project-content ul li {
           margin-bottom: 8px;
         }
         
         /* GitHub or external link style */
         .project-content a {
           color: #fff;
           text-decoration: underline;
         }
         
         .project-content a:hover {
           text-decoration: none;
         }
         
   /* heree*/

   .tech-stack h4 {
    margin-top: 20px;
    margin-bottom: 10px;
    color: #fff;
  }
  
  .tech-icons {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 15px;
  }
  
  .tech-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 60px;
    font-size: 0.75rem;
    color: #fff;
    cursor: default;
  }
  
  .tech-icon img {
    width: 40px;
    height: 40px;
   
    margin-bottom: 5px;
    transition: transform 0.2s, filter 0.2s;
  }
 
  .tech-icon img:hover {
    transform: scale(1.2);
   
  }



  .achievements-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }
  
  .achievement-card {
    background-color: #000;
    border: 1px solid #fff;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  .achievement-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(255,255,255,0.2);
  }
  
  .achievement-image {
    width: 100% !important;
    height: 180px !important;
    object-fit: cover !important;
    border-bottom: 1px solid #fff !important;
    border-radius: 0% !important ;
    margin: 0px !important;
  }
  
  .achievement-content {
    padding: 15px 20px;
    display: flex;
    flex-direction: column;
  }
  
  .achievement-content h3 {
    font-size: 1.1rem;
    color: #fff;
    margin-bottom: 5px;
  }
  
  .achievement-content p {
    font-size: 0.9rem;
    color: #fff;
    margin-bottom: 10px;
  }
  
  .achievement-content a {
    color: #fff;
    text-decoration: underline;
    font-size: 0.85rem;
    align-self: flex-start;
  }
  
  .achievement-content a:hover {
    text-decoration: none;
  }
  



  /* Contact Section Styling */
.contact {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 1rem;
}

.contact h2 {
  font-size: clamp(1.3rem, 4vw, 1.8rem);
  color: #fff;
  border-bottom: 1px solid #fff;
  padding-bottom: 0.3rem;
}

.contact p {
  font-size: 1rem;
  color: #fff;
  line-height: 1.6;
}

.contact a {
  color: #fff;
  text-decoration: underline;
  transition: all 0.2s ease-in-out;
}

.contact a:hover {
  color: #ccc;
  text-decoration: none;
}

.contact b {
  font-weight: 600;
}


.back-btn {
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.05);
  color: #fff;
  cursor: pointer;
  font-size: clamp(0.75rem, 2vw, 0.95rem);
  transition: all 0.2s ease-in-out;
}

.back-btn:hover {
  background: rgba(255,255,255,0.15);
  transform: translateY(-2px);
}

{/* Portfolio Overlay */}
{portfolioOpen && (
  <PortfolioOverlay
    section={portfolioSection}
    setSection={setPortfolioSection}
    onClose={() => setPortfolioOpen(false)}
  />
)}

{/* Persistent "Open Portfolio" Button */}
{!portfolioOpen && started && !showIntro && (
  <button 
    className="open-portfolio-btn" 
    onClick={() => setPortfolioOpen(true)}
  >
    Open Portfolio
  </button>
)}

/* Glass-like Open Portfolio Button */
.open-portfolio-btn {
  position: fixed;
  bottom: 20px;           /* distance from bottom */
  right: 20px;            /* distance from right */
  padding: 0.6rem 1.2rem; /* size of button */
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  background: rgba(255, 255, 255, 0.1); /* semi-transparent glass effect */
  backdrop-filter: blur(8px);          /* glass blur */
  border: 1px solid rgba(255, 255, 255, 0.2); /* subtle border */
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1000;
}

.open-portfolio-btn:hover {
  background: rgba(255, 255, 255, 0.25); /* hover highlight */
  transform: translateY(-2px);
}


         
      `}</style>
    </>
  );
}
