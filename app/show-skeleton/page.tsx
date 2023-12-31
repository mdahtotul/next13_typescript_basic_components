import OtpField from "@/rootComp/OtpField/OtpField";

export default function ShowSkeleton() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-violet-600 underline">
        Some basic components using tailwind, typescript, next13{" "}
      </h1>
      <OtpField />
    </main>
  );
}
