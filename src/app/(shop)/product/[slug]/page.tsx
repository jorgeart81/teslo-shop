export default function Page({ params }: { params: { slug: string } }) {
  return <div>Product slug: {params.slug}</div>;
}
