// 带table的markdown组件
import React from "react";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import { ComponentProps } from "./props-type";

import "./index.less";

const MarkDownTableParse: React.FC<ComponentProps> = (props) => {
  const { markdownContent, cursorDom = "" } = props || {};

  return (
    <div className="MarkDownTableParse-container">
      <Markdown
        transformLinkUri={(url) => url}
        linkTarget="_blank"
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          [
            rehypeRaw,
            { passThrough: ["element", "doctype", "comment", "text"] },
          ],
        ]}
      >
        {markdownContent + cursorDom}
      </Markdown>
    </div>
  );
};

export default MarkDownTableParse;
