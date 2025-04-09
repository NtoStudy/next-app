import { Card } from 'antd'
import { data } from '@/app/data'

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps){
  const { id } = await params;
  return {
    title: `博客详情：${id}`,
  }
}



export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const item = data.find(item => item.id === +id)!

  return (
    <Card title={item.title}>
      <p>{item.body}</p>
    </Card>
  )
}
