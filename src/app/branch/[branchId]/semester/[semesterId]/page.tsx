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
import { BRANCH_NAMES, SUBJECTS } from "@/utils/constants";

type Params = Promise<{ branchId: string; semesterId: string }>;

export default function SemesterPage({ params }: { params: Params }) {
  const resolvedParams = use(params);
  const { branchId, semesterId } = resolvedParams;
  const branchName = BRANCH_NAMES[branchId as keyof typeof BRANCH_NAMES];

  return (
    <div className="container mx-auto px-4 py-8">
      <Navigation
        items={[
          { href: `/branch/${branchId}`, label: branchName },
          { label: `Semester ${semesterId}` },
        ]}
        backUrl={`/branch/${branchId}`}
        backLabel="Back to Branch"
      />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8"
      >
        {branchName} - Semester {semesterId}
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {SUBJECTS.map((subject, index) => (
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
                  <Link
                    href={`/branch/${branchId}/semester/${semesterId}/subject/${
                      index + 1
                    }`}
                  >
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
              <Button asChild variant="secondary" className="w-full">
                <Link href={`/branch/${branchId}/semester/${semesterId}/misc`}>
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
