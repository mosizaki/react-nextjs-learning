import Header from "./components/Header"
import Card from "./components/Card"
import Footer from "./components/Footer"
import ProfileCard from "./components/ProfileCard"
import './App.css'

function App() {

    const topics = [
    {
      title: "HTML/CSS",
      description: "The structure and styling of web pages.",
      buttonText: "Practice Layouts",
    },
    {
      title: "JavaScript",
      description: "The programming language of the web.",
      buttonText: "Review JavaScript",
    },
    {
      title: "React",
      description: "A library for building reusable user interfaces.",
      buttonText: "Build Components",
    },
    {
      title: "Next.js",
      description: "A React framework for production websites and apps.",
      buttonText: "Learn Routing",
    },
    {
      title: "TypeScript",
      description: "JavaScript with type safety.",
      buttonText: "Practice Types",
    },
  ];

  return (
    <div className="app">
      <Header />

      <main className="cards-container">
        {
          topics.map((topic) => (
            <Card
              key={topic.title}
              title={topic.title}
              description={topic.description}
              buttonText={topic.buttonText}
            />
          ))
        }


        <ProfileCard 
          name="Mosi"
          role="Frontend developer"
          goal="Become a React developer"
        />

        <Footer />
      </main>
    </div>
  )
}

export default App