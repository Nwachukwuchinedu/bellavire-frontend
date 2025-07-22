import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [currentDev, setCurrentDev] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayText, setDisplayText] = useState("");
  const [showFeatures, setShowFeatures] = useState(false);

  const developers = [
    "Frontend Ninjas",
    "React Wizards",
    "UI/UX Masters",
    "Code Artists",
  ];

  const welcomeText = "Welcome to Bellavire Frontend!";

  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      desc: "Built with Vite for blazing fast development",
    },
    {
      icon: "🎨",
      title: "Beautiful UI",
      desc: "Tailwind CSS for stunning designs",
    },
    {
      icon: "🔧",
      title: "Developer Ready",
      desc: "ESLint, hot reload, and modern tooling",
    },
    { icon: "📱", title: "Responsive", desc: "Mobile-first design approach" },
    {
      icon: "🚀",
      title: "Production Ready",
      desc: "Optimized builds and best practices",
    },
    {
      icon: "🎯",
      title: "Type Safe",
      desc: "Ready for TypeScript integration",
    },
  ];

  // Typewriter effect
  useEffect(() => {
    if (isTyping && displayText.length < welcomeText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(welcomeText.slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else if (displayText.length === welcomeText.length) {
      setIsTyping(false);
      setTimeout(() => setShowFeatures(true), 500);
    }
  }, [displayText, isTyping]);

  // Cycle through developer types
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDev((prev) => (prev + 1) % developers.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [developers.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              CODEwithESE
            </h1>
            <div className="h-8 mb-4">
              <p className="text-2xl font-semibold text-cyan-300 transition-all duration-500">
                {displayText}
                {isTyping && <span className="animate-pulse">|</span>}
              </p>
            </div>
            <p className="text-xl text-gray-300">
              Calling all{" "}
              <span className="font-bold text-yellow-400 transition-all duration-500">
                {developers[currentDev]}
              </span>
              ! 🚀
            </p>
          </div>

          {/* Fun developer stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-2">☕</div>
              <div className="text-2xl font-bold text-yellow-400">∞</div>
              <div className="text-sm text-gray-300">Cups of Coffee</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-2">🐛</div>
              <div className="text-2xl font-bold text-green-400">0</div>
              <div className="text-sm text-gray-300">Bugs (We Hope!)</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-2">🔥</div>
              <div className="text-2xl font-bold text-red-400">100%</div>
              <div className="text-sm text-gray-300">Motivation Level</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        {showFeatures && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 animate-fade-in">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8 text-cyan-300">
            Your Arsenal 🛠️
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "React", color: "bg-blue-500" },
              { name: "Vite", color: "bg-purple-500" },
              { name: "Tailwind", color: "bg-cyan-500" },
              { name: "ESLint", color: "bg-indigo-500" },
              { name: "JavaScript", color: "bg-yellow-500" },
              { name: "ShadCN", color: "bg-pink-500" },
              { name: "Zustand", color: "bg-green-500" },
            ].map((tech, index) => (
              <span
                key={index}
                className={`${tech.color} px-4 py-2 rounded-full text-white font-semibold hover:scale-110 transition-transform duration-200 cursor-pointer`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Build Something Amazing? 🎯
            </h2>
            <p className="text-xl mb-6">
              The Bellavire Housing Management Platform awaits your magic touch!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105">
                Start Coding 💻
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200 transform hover:scale-105">
                View Docs 📚
              </button>
            </div>
          </div>

          {/* Fun Footer */}
          <div className="text-center text-gray-400">
            <p className="mb-2">
              "Code is like humor. When you have to explain it, it's bad." -
              Cory House
            </p>
            <p className="text-sm">
              Made with ❤️ by CODEwithESE | Happy Coding! 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p class="text-2xl">
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

// export default App;
