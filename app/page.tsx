import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Adeel Siddiqui
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Software Engineer & Web Developer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300">
              I'm a passionate software engineer with expertise in full-stack development,
              cloud architecture, and building scalable applications.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Skills</h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Full-Stack Development</li>
              <li>Cloud Architecture</li>
              <li>DevOps & CI/CD</li>
              <li>System Design</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Get in Touch</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/adsiddiqui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/adeelsiddiqui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
