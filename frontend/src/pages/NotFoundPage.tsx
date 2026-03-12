/* ============================================
 * 404 Not Found page
 * ============================================ */

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 | Page Not Found</title>
      </Helmet>

      <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Large 404 */}
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="text-[8rem] font-black leading-none md:text-[12rem]"
          >
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              404
            </span>
          </motion.h1>

          <h2 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">
            Page Not Found
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-slate-500 dark:text-slate-400">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has
            been moved.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/">
              <Button icon={<Home className="h-4 w-4" />}>
                Go Home
              </Button>
            </Link>
            <Button
              variant="outline"
              icon={<ArrowLeft className="h-4 w-4" />}
              onClick={() => window.history.back()}
            >
              Go Back
            </Button>
          </div>
        </motion.div>
      </div>
    </>
  );
}
