import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <motion.div
      className="py-12 px-6 w-full text-center bg-blue-50 rounded-lg shadow-md mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="text-primary max-w-[1150px] mx-auto text-2xl max-sm:text-[1.2rem] font-semibold mb-6"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Ready to simplify manual sales and payments? Join PayOva today and experience hassle-free transactions with full security and transparency!
      </motion.h2>

      <motion.button
        className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-primary-dark transition-colors"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Link to='/auth'>Get Started</Link>
      </motion.button>
    </motion.div>
  )
}

export default CallToAction
