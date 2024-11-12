"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { BRANCH_NAMES } from "@/utils/constants";

export default function Home() {
  const branches = Object.entries(BRANCH_NAMES).map(([slug, name]) => ({
    name,
    slug,
  }));

  return (
    <div className="container mx-auto px-4 py-8">
      <Navigation items={[{ label: "Home" }]} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to Atheneum</h1>
        <p className="text-lg text-gray-600">
          Your one-stop platform for sharing and accessing subject notes across
          all engineering branches
        </p>
      </motion.div>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle>About Atheneum</CardTitle>
          <CardDescription>
            Empowering students with knowledge sharing
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Atheneum is a comprehensive note-sharing platform designed to help
            students access and share academic resources across various
            engineering branches and semesters. With a wide range of subjects
            and an easy-to-navigate interface, we aim to make learning
            collaborative and efficient.
          </p>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-bold mb-6">Engineering Branches</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {branches.map((branch) => (
          <motion.div
            key={branch.slug}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">{branch.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href={`/branch/${branch.slug}`}>Explore Subjects</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
