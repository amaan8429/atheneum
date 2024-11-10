import Link from "next/link";

type Props = {
  params: { semesterId: string };
};

export default function MiscPage({ params }: Props) {
  const { semesterId } = params;

  // In a real app, you'd fetch this data from an API or database
  const pdfs = [
    { name: "Syllabus", url: `/pdfs/semester${semesterId}/misc/syllabus.pdf` },
    {
      name: "Exam Schedule",
      url: `/pdfs/semester${semesterId}/misc/exam_schedule.pdf`,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Semester {semesterId} - Misc</h1>
      <div className="space-y-4">
        {pdfs.map((pdf, index) => (
          <Link
            key={index}
            href={pdf.url}
            className="block bg-orange-500 text-white p-4 rounded hover:bg-orange-600 transition-colors"
          >
            {pdf.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
