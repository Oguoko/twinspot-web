import ImagePicker from "@/components/admin/ImagePicker";

export default function AdminHome() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        <li><a href="/admin/posts">Posts</a></li>
        <li><a href="/admin/destinations">Destinations</a></li>
        <li><a href="/admin/images">Images</a></li>
      </ul>
    </div>
  );
}
