import { WP_API } from "../lib/wp";

export async function getServerSideProps() {
  const res = await fetch(`${WP_API}/posts`);
  const posts = await res.json();

  return {
    props: { posts },
  };
}

export default function Home({ posts }) {
  return (
    <div>
      <h1>International Journal of Research</h1>

      {posts.map(post => (
        <div key={post.id} style={{ marginBottom: "30px" }}>
          <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          <a href={`/article/${post.id}`}>Read More</a>
        </div>
      ))}
    </div>
  );
}
