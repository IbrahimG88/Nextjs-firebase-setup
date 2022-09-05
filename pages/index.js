import Link from "next/link";

function Home() {
  return (
    <ul>
      <li>
        <Link href="/posts/">
          <a>POSTS</a>
        </Link>
      </li>
      <li>
        <Link href="/admin/post">
          <a>Write Post</a>
        </Link>
      </li>
      <li>
        <Link href="/admin/edit">
          <a>Edit Post</a>
        </Link>
      </li>
    </ul>
  );
}

export default Home;
