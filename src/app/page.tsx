import Link from "next/link";

export default function Home() {
  const semesters = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Subject Notes Sharing</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {semesters.map((semester) => (
          <Link
            key={semester}
            href={`/semester/${semester}`}
            className="bg-blue-500 text-white p-4 rounded text-center hover:bg-blue-600 transition-colors"
          >
            Semester {semester}
          </Link>
        ))}
      </div>
    </div>
  );
}
