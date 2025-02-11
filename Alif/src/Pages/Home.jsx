import styled from "styled-components";
import { motion } from "framer-motion";
import Header from "../component/Header"; // 🔥 Header import किया
import Footer from "../component/Footer";

const Home = () => {
  return (
    <Container>
      <Header />
      <Hero>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to <span>Our Consultancy</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Providing Expert Solutions in Web Development, SEO, App Development,
          and More!
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Get Started
        </motion.button>
      </Hero>
      <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(
    circle,
    rgba(14, 14, 14, 1) 0%,
    rgba(2, 2, 2, 1) 100%
  );
  padding-top: 80px; /* ✅ Header के लिए space छोड़ा */
`;

const Hero = styled.div`
  text-align: center;
  color: white;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    text-transform: uppercase;
    color: white;
    span {
      color: #9c00ff;
    }
  }

  p {
    margin-top: 10px;
    font-size: 1.2rem;
    color: #b3b3b3;
  }

  button {
    margin-top: 20px;
    padding: 12px 30px;
    font-size: 1.2rem;
  }
`;
