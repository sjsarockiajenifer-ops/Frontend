import '../App.css'

const memories = [
  
  {
    title: 'Festive shopping',
    description:
      'We went shopping together for festive outfits, decorations, and all the little things that make Diwali special.',
  },
  {
    title: 'A day out together',
    description:
      'We went out, enjoyed the festive sights, and made lovely memories with the people we love.',
  },
  {
    title: 'Sweets, lights & sparkle',
    description:
      'We shared delicious sweets and lit crackers at night to celebrate Diwali with joy and excitement.',
  },
  {
    title: 'Crackers',
    description:
      'We burst crackers and celebrated Diwali together!',
  },
]

function Home() {
  return (
    <main>
      <header className="navbar">
        <a className="brand" href="#home">
          My Diwali
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#memories">Our moments</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <h1>My Diwali, full of light.</h1>
          <p className="hero-copy">
            A home made bright, a day spent together, and a night filled with
            sparkle. Here are a few of my favourite Diwali moments.
          </p>
        </div>
      </section>

      <section className="memories-section" id="memories">
        <h2>Our Diwali moments</h2>

        <div className="memory-grid">
          {memories.map((memory) => (
            <article className="memory-card" key={memory.title}>
              <h3>{memory.title}</h3>
              <p>{memory.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home