import { notFound } from 'next/navigation';

interface Props {
  params: { id: string };
}

export default function Page({ params }: Props) {

  if(params.id === 'kids'){
    notFound()
  }

  return <div>Category: {params.id}</div>;
}
