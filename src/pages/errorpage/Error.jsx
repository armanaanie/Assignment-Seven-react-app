import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4 transition-colors duration-300">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 text-center max-w-md w-full transition-colors duration-300">
        {/* Sad Emoji Illustration */}
        <div className="flex justify-center mb-6">
          <div className="text-7xl">😢</div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          Oops! Page not found
        </h1>

        {/* Message */}
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Looks like this page is lost... Don’t worry, you can go back home.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <Link
            to="/"
            className="px-5 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.location.reload()}
            className="px-5 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            Reload
          </button>
        </div>

        {/* Footer */}
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-6">
          Error Code: 404
        </p>
      </div>
    </div>
  );
}
