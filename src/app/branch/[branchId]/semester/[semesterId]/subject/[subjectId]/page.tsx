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
import { FileText } from "lucide-react";
import { BRANCH_NAMES, SUBJECTS } from "@/utils/constants";

type Params = Promise<{
  branchId: string;
  semesterId: string;
  subjectId: string;
}>;

export default function SubjectPage({ params }: { params: Params }) {
  const resolvedParams = use(params);
  const { branchId, semesterId, subjectId } = resolvedParams;

  const pdfs = [
    {
      name: "Chapter 1 Notes",
      url: `/pdfs/branch/${branchId}/semester${semesterId}/subject${subjectId}/chapter1.pdf`,
    },
    {
      name: "Lecture Notes 2",
      url: `/pdfs/branch/${branchId}/semester${semesterId}/subject${subjectId}/chapter2.pdf`,
    },
    {
      name: "Assignment 1",
      url: `/pdfs/branch/${branchId}/semester${semesterId}/subject${subjectId}/chapter3.pdf`,
    },
    {
      name: "Reference Material",
      url: `/pdfs/branch/${branchId}/semester${semesterId}/subject${subjectId}/chapter4.pdf`,
    },
  ];

  const branchName = BRANCH_NAMES[branchId as keyof typeof BRANCH_NAMES];
  const currentSubject = SUBJECTS[parseInt(subjectId) - 1];

  const breadcrumbItems = [
    {
      href: `/branch/${branchId}`,
      label: branchName,
    },
    {
      href: `/branch/${branchId}/semester/${semesterId}`,
      label: `Semester ${semesterId}`,
    },
    {
      label: currentSubject,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Navigation
        items={breadcrumbItems}
        backUrl={`/branch/${branchId}/semester/${semesterId}`}
        backLabel="Back to Semester"
      />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8"
      >
        {currentSubject} - Study Materials
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pdfs.map((pdf, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <FileText className="mr-2 h-5 w-5" />
                  {pdf.name}
                </CardTitle>
                <CardDescription>{currentSubject}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link
                    href={pdf.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View PDF
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
