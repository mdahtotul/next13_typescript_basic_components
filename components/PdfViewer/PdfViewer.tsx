"use client";
import { FC, useEffect, useRef } from "react";

interface PdfViewerProps {
  url: string;
  pdfHeader: string;
  width?: string;
  height?: string;
}

const PdfViewer: FC<PdfViewerProps> = ({
  url,
  pdfHeader,
  width = "550px",
  height = "100vh",
}) => {
  const viewer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadViewer = async () => {
      const WebViewer = (await import("@pdftron/webviewer")).default;
      WebViewer(
        {
          path: "/lib",
          initialDoc: url,
        },
        viewer?.current!
      ).then(function (instance: any) {
        if (instance?.setTheme) instance?.setTheme("dark");
      });
    };
    loadViewer();
  }, [url]);

  return (
    <div className="MyComponent">
      <div className="header text-center">{pdfHeader}</div>
      <div
        className="webviewer"
        ref={viewer}
        style={{ height: height, width: width }}></div>
    </div>
  );
};

export default PdfViewer;

// PdfTron next.js docs https://docs.apryse.com/documentation/web/get-started/nextjs/

/**
 * @STEP_1 - Install the WebViewer package yarn add @pdftron/webviewer
 * @STEP_2 - Go to node_modules/@pdftron/webviewer/public and copy the core and ui folder to the public/lib folder in your project

*/
