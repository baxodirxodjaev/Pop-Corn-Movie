import { motion } from "framer-motion";
import { Reviews } from "../../types/TVShowDetalisInterface";
import { useState } from "react";

{
  /* <h3 className="text-xl font-bold text-white">📝 Reviews:</h3> */
}

const TV_Show_Reviews = ({ reviews }: { reviews: Reviews }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  return (
    <div className="w-full max-w-6xl mt-10">
      <h3 className="text-2xl font-bold text-white"> 📝 Top Comments</h3>
      <ul className="mt-4 space-y-4 mx-auto">
        {reviews?.results.length !== 0 ? (
          reviews?.results.map((comment, index) => {
            const isOpen = openIndex === index;
            return (
              <li
                key={comment.author}
                className="border border-gray-700 rounded-lg shadow-lg bg-gray-900"
              >
                <button
                  className="w-full text-left px-4 py-3 flex justify-between items-center bg-gray-800 hover:bg-gray-700 transition duration-300 rounded-t-lg"
                  onClick={() => toggleAccordion(index)}
                >
                  <div>
                    <p className="font-semibold text-white">{comment.author}</p>
                    <p className="text-sm text-gray-400">
                      {comment.created_at.slice(0, 10)}
                    </p>
                  </div>
                  <span
                    className={`transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ⬇️
                  </span>
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-4 py-3 text-gray-300 bg-gray-800 rounded-b-lg text-wrap overflow-auto"
                >
                  {isOpen ? comment.content : truncateText(comment.content, 20)}
                  {comment.content.split(" ").length > 20 && (
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="text-blue-400 ml-2 hover:underline"
                    >
                      {isOpen ? "Read less" : "Read more"}
                    </button>
                  )}
                </motion.div>
              </li>
            );
          })
        ) : (
          <p className="text-gray-400">No comments available.</p>
        )}
      </ul>
    </div>
  );
};

export default TV_Show_Reviews;
