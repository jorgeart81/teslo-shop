export default function Page({ params }: { params: { id: string } }) {
  return <div>Category: {params.id}</div>;
}
