import { motion } from 'framer-motion';

export const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem',
        backgroundColor: '#f5f7fa',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      }}
    >
      <h2
        style={{
          fontSize: '2rem',
          marginBottom: '1rem',
          color: '#001f7a',
          textAlign: 'center',
        }}
      >
        Camilo du är en min bästa vän! Du med Amiel.
      </h2>
      <p
        style={{
          fontWeight: 'bold',
          lineHeight: '1.6',
          color: '#333',
          marginBottom: '1rem',
        }}
      >
       Här är ett par bilder jag har tagit på camilo önskar jag planerade göra detta tidigare så siddan hade blivit lite bättre lol men hoppas du gillar den. Kan göra en riktig portfolio sida till dig om det är aktuellt
      </p>
      <p
        style={{
          fontWeight: 'bold',
          lineHeight: '1.6',
          color: '#333',
        }}
      >
       Hade inte råd med nån present så jag tänkte jag kan åtmisnstone göra en liten sida till dig. Du är en fantastisk person! Tack för att du är en så bra vän och för att du alltid stöttar mig. Jag uppskattar dig mer än ord kan säga!
      </p>
    </motion.div>
  );
};