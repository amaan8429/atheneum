"use client";

import Link from "next/link";
import { use } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Params = Promise<{ semesterId: string }>;

export default function SemesterPage({ params }: { params: Params }) {
  const resolvedParams = use(params);
  const { semesterId } = resolvedParams;
  const subjects = Array.from({ length: 5 }, (_, i) => `Subject ${i + 1}`);

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6">Semester {semesterId}</h1>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {subjects.map((subject, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{subject}</CardTitle>
                <CardDescription>Semester {semesterId}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href={`/semester/${semesterId}/subject/${index + 1}`}>
                    View Notes
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Card>
            <CardHeader>
              <CardTitle>Miscellaneous</CardTitle>
              <CardDescription>Additional resources</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href={`/semester/${semesterId}/misc`}>
                  View Resources
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
