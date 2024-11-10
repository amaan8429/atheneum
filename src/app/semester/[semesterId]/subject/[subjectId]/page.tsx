// app/semester/[semesterId]/subject/[subjectId]/page.tsx
import Link from "next/link";

type Props = {
  params: {
    semesterId: string;
    subjectId: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default async function SubjectPage({ params, searchParams }: Props) {
  const { semesterId, subjectId } = params;

  // In a real app, you'd fetch this data from an API or database
  const pdfs = [
    {
      name: "Chapter 1",
      url: `/pdfs/semester${semesterId}/subject${subjectId}/chapter1.pdf`,
    },
    {
      name: "Chapter 2",
      url: `/pdfs/semester${semesterId}/subject${subjectId}/chapter2.pdf`,
    },
    {
      name: "Practice Questions",
      url: `/pdfs/semester${semesterId}/subject${subjectId}/practice.pdf`,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">
        Semester {semesterId} - Subject {subjectId}
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
