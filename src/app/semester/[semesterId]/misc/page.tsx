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
import { FileText } from "lucide-react";

type Params = Promise<{
  semesterId: string;
}>;

export default function MiscPage({ params }: { params: Params }) {
  const resolvedParams = use(params);
  const { semesterId } = resolvedParams;

  // In a real app, you'd fetch this data from an API or database
  const pdfs = [
    { name: "Syllabus", url: `/pdfs/semester${semesterId}/misc/syllabus.pdf` },
    {
      name: "Exam Schedule",
      url: `/pdfs/semester${semesterId}/misc/exam_schedule.pdf`,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6">
          Semester {semesterId} - Miscellaneous
        </h1>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pdfs.map((pdf, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2" />
                  {pdf.name}
                </CardTitle>
                <CardDescription>PDF Document</CardDescription>
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
