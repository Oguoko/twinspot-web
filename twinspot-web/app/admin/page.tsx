import ImagePicker from "@/components/admin/ImagePicker";

export default function AdminHome() {
  return (
    <div>
      <h1>Admin Dashboard</h1>

      <h2>Select an image</h2>

      <ImagePicker
        onSelect={(img) => {
          console.log("Selected image:", img);
          alert(`Selected: ${img.alt || img.id}`);
        }}
      />
    </div>
  );
}
