import Counter from "@/app/components/Counter";

type Params = Promise<{ slug: string }>;

async function page({ params }: { params: Params }) {
  const { slug } = await params;
  return (
    <div>
      <h1 className="text-purple-500 text-3xl">Hello from 'slug':{slug}</h1>
      <Counter />
    </div>
  );
}

export default page;
