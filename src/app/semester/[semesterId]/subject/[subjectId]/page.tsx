import Link from "next/link";

export default function SubjectPage({
  params,
}: {
  params: { semesterId: string; subjectId: string };
}) {
  // In a real app, you'd fetch this data from an API or database
  const pdfs = [
    { name: "Chapter 1", url: "/pdfs/semester1/subject1/chapter1.pdf" },
    { name: "Chapter 2", url: "/pdfs/semester1/subject1/chapter2.pdf" },
    {
      name: "Practice Questions",
      url: "/pdfs/semester1/subject1/practice.pdf",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">
        Semester {params.semesterId} - Subject {params.subjectId}
      </h1>
      <div className="space-y-4">
        {pdfs.map((pdf, index) => (
          <Link
            key={index}
            href={pdf.url}
            className="block bg-purple-500 text-white p-4 rounded hover:bg-purple-600 transition-colors"
          >
            {pdf.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
