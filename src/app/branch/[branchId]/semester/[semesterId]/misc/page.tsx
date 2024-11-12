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
import { BRANCH_NAMES } from "@/utils/constants";

type Params = Promise<{ branchId: string; semesterId: string }>;

export default function MiscPage({ params }: { params: Params }) {
  const resolvedParams = use(params);
  const { branchId, semesterId } = resolvedParams;

  const miscPdfs = [
    {
      name: "Semester Overview",
      url: `/pdfs/branch/${branchId}/semester${semesterId}/overview.pdf`,
    },
    { name: "Study Tips", url: "/pdfs/study_tips.pdf" },
    { name: "Exam Schedule", url: "/pdfs/exam_schedule.pdf" },
    { name: "Additional Resources", url: "/pdfs/additional_resources.pdf" },
  ];

  const branchName = BRANCH_NAMES[branchId as keyof typeof BRANCH_NAMES];

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
      label: "Miscellaneous",
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
        {branchName} - Semester {semesterId} - Resources
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {miscPdfs.map((pdf, index) => (
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
                <CardDescription>Additional Resource</CardDescription>
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
