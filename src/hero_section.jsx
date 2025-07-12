import img from './images/unnamed.jpg';
import img2 from './images/IMG_4042.jpg';
import img3 from './images/IMG_4019.JPG'; 
const HeroSection = () => {
    const scrollToElement = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    return (
        <div className="hero-section" style={{ padding: '2rem', textAlign: 'center' }}>
            {/* Circular Profile Image */}
            <div
                style={{
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    margin: '0 auto',
                }}
            >
                <img 
                    src={img} 
                    alt="Profile" 
                    style={{
                        width: '100%',
                        height: '150%',
                        objectFit: 'cover',
                    }}
                />
            </div>
   {/* Web App Image */}
            <img
                src={img2}
                alt="Web App"
                style={{ width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    margin: '0 auto',
                }}
            />

            {/* Text content */}
            <h1 style={{ marginTop: '2rem' }}>Hans namn är Camilo Bleck Villalobos Diaz</h1>
            <p  style={{ fontWeight: 'bold' }
                
                }
                >
               Camilo är en ung stilig latin amerikan som ÄLSKAR att äta kritor men är trots det super intellektuel! Han har alltid sagt till sin dumma svarting när han gör något i hans ord "No Bueno". Det är nämligen så att han har något som kallas "Integritet". Tills han har druckit för mycket då är han en rikti daredevil. Han har INTE autism eller någon känd diagnos men efter 14 år med denna grabb kan jag säga att han definitivt är neurodiverent. Alla ÄLSKAR Camilo och ALLA hatar hans fiender.
            </p>
            <p style={{ fontWeight: 'bold' }}>
               Camilo är tränad sen ung ålder i alla fromer av campsport och är extremt explosiv och stark. Men i hans hjärta är han en LOVER. En liten simp för kärlek men han la hjärtat på is för att starta en karriar som Elektrisk tekniker!
            </p>
  {/* Web App Image */}
            <img
                src={img3}
                alt="Web App"
                style={{ width: '400px',
                    height: '400px',
                    borderRadius: '0%',
                    overflow: 'hidden',
                    margin: '0 auto',
                }}
            />
         
            {/* Skills */}
            <h2 className="skills-list" style={{ marginTop: '2rem' ,
                left: '200px',
            }}>Färdigheter</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                <li>Elinstallation</li>
                <li>Säkerhet och föreskrifter</li>
                <li>Felsökning</li>
                <li>Kablage och ledningar</li>
                <li>Användning av verktyg</li>
                <li>Energibesparing och hållbarhet</li>
            </ul>

            {/* Button */}
            <button 
            onClick={ () => scrollToElement('projects')
                
            }
                style={{
                    marginTop: '2rem',
                    backgroundColor: '#ffeb3b',
                    color: '#001f7a',
                    padding: '0.75rem 1.5rem',
                    fontSize: '1rem',
                    fontWeight: 600,
                    border: 'none',
                    borderRadius: '9999px',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease'
                }}
            >
                View Projects
            </button>
        </div>
    );
}

export default HeroSection;