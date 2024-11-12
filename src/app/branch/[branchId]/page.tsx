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
import { Navigation } from "@/components/Navigation";
import { BRANCH_NAMES } from "@/utils/constants";

type Params = Promise<{ branchId: string }>;

export default function BranchPage({ params }: { params: Params }) {
  const resolvedParams = use(params);
  const { branchId } = resolvedParams;
  const semesters = Array.from({ length: 8 }, (_, i) => i + 1);
  const branchName = BRANCH_NAMES[branchId as keyof typeof BRANCH_NAMES];

  return (
    <div className="container mx-auto px-4 py-8">
      <Navigation
        items={[{ label: branchName }]}
        backUrl="/"
        backLabel="Back to Home"
      />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8"
      >
        {branchName} - Semesters
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {semesters.map((semester) => (
          <motion.div
            key={semester}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Semester {semester}</CardTitle>
                <CardDescription>{branchName}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href={`/branch/${branchId}/semester/${semester}`}>
                    View Subjects
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
