import { WP_API } from "../../lib/wp";

export async function getServerSideProps({ params }) {
  const res = await fetch(`${WP_API}/posts/${params.id}`);
  const post = await res.json();

  return { props: { post } };
}

export default function Article({ post }) {
  return (
    <div>
      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
}
