import { FaArrowRight, FaDownload } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { PiBellRingingFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';

import styles from './BlogHeader.module.css';
const cards = [
  {
    image:
      'https://i.pinimg.com/736x/a4/04/29/a404295ee9ceb7366b0068144abaf3f9.jpg',
  },
  {
    image:
      'https://images.unsplash.com/photo-1744349348850-a2bfb2731593?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    image:
      'https://images.unsplash.com/photo-1744638628542-12578d73179b?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    image:
      'https://images.unsplash.com/photo-1744221127291-92299c0600dc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    image:
      'https://plus.unsplash.com/premium_photo-1744576035583-e014eb83ec2a?q=80&w=1969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    image:
      'https://plus.unsplash.com/premium_photo-1679492942912-a7dc8d5be711?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const Blog = () => (
  <div className={styles.box}>
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          P Newsroom
        </Link>
        <nav className={styles.nav}>
          <Link to="/" className={styles.link}>
            News
          </Link>
          <Link to="/" className={styles.link}>
            Company
          </Link>
          <Link to="/" className={styles.link}>
            Impact
          </Link>
          <Link to="/" className={styles.link}>
            Press assets
          </Link>
          <Link to="/" className={styles.link}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
    <div className={styles.buttons}>
      <p>Featured news</p>
      <button> See all news </button>
    </div>

    <main className={styles.content}>
      <div className={styles.containers}>
        <div className={styles.textBlock}>
          <h2>Discover the stories behind the Pins</h2>
          <p>
            Dive into our latest updates, company culture, and the impact we're
            making across the world.
          </p>
        </div>

        <div className={styles.imageGrid}>
          {cards.map((card, index) => (
            <img
              key={index}
              src={card.image}
              alt={`card-${index}`}
              className={index === 2 ? styles.largeImage : styles.smallImage}
            />
          ))}
        </div>
      </div>
    </main>
    <div className={styles.press}>
      <h1>Press center</h1>
      <div className={styles.iconboxes}>
        <div>
          <div className={styles.iconsContainer}>
            <MdOutlineMail />
          </div>
          <p className={styles.iconstext}>
            Contact us{' '}
            <span>
              <FaArrowRight />
            </span>
          </p>
        </div>
        <div>
          <div className={styles.iconsContainer}>
            <FaDownload />
          </div>
          <p className={styles.iconstext}>
            Press assets{' '}
            <span>
              <FaArrowRight />
            </span>
          </p>
        </div>
        <div>
          <div className={styles.iconsContainer}>
            <PiBellRingingFill />
          </div>
          <p className={styles.iconstext}>
            Subscribe via RSS{' '}
            <span>
              <FaArrowRight />
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Blog;
