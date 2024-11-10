"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const semesters = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-6 text-center">
          Welcome to Atheneum
        </h1>
        <p className="text-xl mb-8 text-center text-muted-foreground">
          Your one-stop platform for sharing and accessing subject notes
        </p>
      </motion.div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>About Atheneum</CardTitle>
          <CardDescription>
            Empowering students with knowledge sharing
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Atheneum is a comprehensive note-sharing platform designed to help
            students access and share academic resources across 8 semesters.
            With a wide range of subjects and easy-to-navigate interface, we aim
            to make learning collaborative and efficient.
          </p>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link href="#semesters">Explore Semesters</Link>
          </Button>
        </CardFooter>
      </Card>

      <h2 className="text-2xl font-semibold mb-4" id="semesters">
        Semesters
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {semesters.map((semester) => (
          <motion.div
            key={semester}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild className="w-full h-24 text-lg">
              <Link href={`/semester/${semester}`}>Semester {semester}</Link>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
