"use client";

import { Post } from "@/lib/types/post";
import TipTapEditor from "./TipTapEditor";
import ImagePicker from "./ImagePicker";

type Props = {
  post: Post;
  onChange: (post: Post) => void;
  onSave: (post: Post) => void;
  saving?: boolean;
};

export default function PostEditor({
  post,
  onChange,
  onSave,
  saving,
}: Props) {
  return (
    <div style={{ padding: "2rem", maxWidth: 900 }}>
      <input
        type="text"
        placeholder="Post title"
        value={post.title}
        onChange={(e) =>
          onChange({ ...post, title: e.target.value })
        }
        style={{
          width: "100%",
          fontSize: "1.4rem",
          marginBottom: "1rem",
        }}
      />

      <TipTapEditor
        content={post.content}
        onChange={(content) =>
          onChange({ ...post, content })
        }
      />

      <h3 style={{ marginTop: "2rem" }}>Publishing</h3>

      <label style={{ display: "block", marginBottom: "1rem" }}>
        <input
          type="checkbox"
          checked={post.published}
          onChange={(e) =>
            onChange({
              ...post,
              published: e.target.checked,
            })
          }
        />{" "}
        Published
      </label>

      <button
        onClick={() => onSave(post)}
        disabled={saving}
        style={{
          marginTop: "2rem",
          padding: "0.6rem 1.2rem",
        }}
      >
        {saving ? "Saving…" : "Save Post"}
      </button>
    </div>
  );
}
