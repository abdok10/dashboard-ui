import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex items-center justify-center">
        <Link
          className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
          href="/dashboard"
        >
          <h3 className="text-2xl font-bold">Admin Dashboard →</h3>
        </Link>
      </div>
    </main>
  );
}
