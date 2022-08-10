import React from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

export default function DView() {
  const docs = [{ uri: require("./Resume.pdf") }];
  return (
    <div class="w-5/6">
      <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />
    </div>
  );
}
