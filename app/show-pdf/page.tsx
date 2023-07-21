import PdfViewer from "@/rootComp/PdfViewer/PdfViewer";

export default function ShowPdfPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-violet-600 underline">
        Some basic components using tailwind, typescript, next13{" "}
      </h1>

      <PdfViewer
        url="https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf"
        pdfHeader="Demo Annotated PDF"
        width="500px"
      />

      <PdfViewer
        url="https://africau.edu/images/default/sample.pdf"
        pdfHeader="A Simple PDF"
        width="500px"
        height="500px"
      />
    </main>
  );
}
