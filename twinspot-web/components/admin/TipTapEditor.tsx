"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Heading from "@tiptap/extension-heading";

type Props = {
  content: string;
  onChange: (html: string) => void;
};

export default function TipTapEditor({ content, onChange }: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: false,
      }),
      Heading.configure({
        levels: [2, 3],
      }),
      Image,
    ],
    content,
    editorProps: {
      attributes: {
        class:
          "prose prose-lg max-w-none focus:outline-none",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  if (!editor) return null;

  return (
    <div className="editor-shell">
      <div className="toolbar">
        <button onClick={() => editor.chain().focus().toggleBold().run()}>
          Bold
        </button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()}>
          Italic
        </button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
          H2
        </button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
          H3
        </button>
      </div>

      <EditorContent editor={editor} />

      <style jsx>{`
        .editor-shell {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 1rem;
          background: white;
        }

        .toolbar {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }

        .toolbar button {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 0.3rem 0.6rem;
          border: 1px solid #ccc;
          background: #f9f9f9;
          cursor: pointer;
        }

        .toolbar button:hover {
          background: #eee;
        }
      `}</style>
    </div>
  );
}
