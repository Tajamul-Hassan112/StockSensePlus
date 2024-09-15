
// "use client";
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import { FaBox, FaShoppingCart, FaWarehouse, FaTag } from 'react-icons/fa';

// export default function Home() {
//   return (
//     <div className="relative flex items-center justify-center min-h-screen flex-col bg-gray-100 overflow-hidden">
//       {/* Background Video */}
//       <div className="absolute inset-0 flex items-center justify-center">
//         <video
//           src="/anim/anim3.mp4" // Ensure this path is correct
//           autoPlay
//           loop
//           muted
//           className="object-contain opacity-60"
//           style={{
//             maxWidth: '100%', // Limit max width
//             maxHeight: '100%', // Limit max height
//             width: 'auto', // Adjust width to maintain aspect ratio
//             height: 'auto', // Adjust height to maintain aspect ratio
//           }}
//         />
//       </div>

//       {/* Rotating Icons */}
//       <div className="absolute inset-0 flex items-center justify-center">
//         <motion.div
//           className="absolute"
//           animate={{ rotate: [0, 360] }}
//           transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
//           style={{ top: "15%", left: "10%" }}
//         >
//           <FaBox size={80} color="#4A90E2" />
//         </motion.div>
//         <motion.div
//           className="absolute"
//           animate={{ rotate: [0, 360] }}
//           transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
//           style={{ top: "50%", left: "30%" }}
//         >
//           <FaShoppingCart size={80} color="#E94E77" />
//         </motion.div>
//         <motion.div
//           className="absolute"
//           animate={{ rotate: [0, 360] }}
//           transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
//           style={{ top: "35%", left: "70%" }}
//         >
//           <FaWarehouse size={80} color="#F5A623" />
//         </motion.div>
//         <motion.div
//           className="absolute"
//           animate={{ rotate: [0, 360] }}
//           transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
//           style={{ top: "75%", left: "50%" }}
//         >
//           <FaTag size={80} color="#7ED321" />
//         </motion.div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 text-center">
//         <h2 className="text-5xl font-bold mb-6 text-white drop-shadow-lg">
//           StockSense Plus
//         </h2>
//         <Link href="/dashboard/home/overview" className="inline-block px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300">
//           View Dashboard
//         </Link>
//       </div>
//     </div>
//   );
// }
"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaBox, FaShoppingCart, FaWarehouse, FaTag } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          src="/anim/anim3.mp4" // Ensure this path is correct
          autoPlay
          loop
          muted
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Rotating Icons */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="absolute"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          style={{ top: "10%", left: "20%" }}
        >
          <FaBox size={90} color="#ffffff" />
        </motion.div>
        <motion.div
          className="absolute"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          style={{ top: "45%", left: "25%" }}
        >
          <FaShoppingCart size={90} color="#ffffff" />
        </motion.div>
        <motion.div
          className="absolute"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
          style={{ top: "30%", left: "65%" }}
        >
          <FaWarehouse size={90} color="#ffffff" />
        </motion.div>
        <motion.div
          className="absolute"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
          style={{ top: "70%", left: "50%" }}
        >
          <FaTag size={90} color="#ffffff" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-6xl font-extrabold mb-8 text-white drop-shadow-2xl">
          StockSense Plus
        </h2>
        <Link href="/dashboard/home/overview" legacyBehavior>
          <a className="inline-block px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-teal-400 to-blue-500 rounded-full shadow-lg hover:from-teal-500 hover:to-blue-600 transition-all duration-300">
            View Dashboard
          </a>
        </Link>
      </div>
    </div>
  );
}
