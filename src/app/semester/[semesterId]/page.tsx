// app/semester/[semesterId]/page.tsx
import Link from "next/link";

type Props = {
  params: {
    semesterId: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default async function SemesterPage({ params }: Props) {
  const { semesterId } = params;
  const subjects = Array.from({ length: 5 }, (_, i) => `Subject ${i + 1}`);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Semester {semesterId}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {subjects.map((subject, index) => (
          <Link
            key={index}
            href={`/semester/${semesterId}/subject/${index + 1}`}
            className="bg-green-500 text-white p-4 rounded text-center hover:bg-green-600 transition-colors"
          >
            {subject}
          </Link>
        ))}
        <Link
          href={`/semester/${semesterId}/misc`}
          className="bg-yellow-500 text-white p-4 rounded text-center hover:bg-yellow-600 transition-colors"
        >
          Misc
        </Link>
      </div>
    </div>
  );
}
