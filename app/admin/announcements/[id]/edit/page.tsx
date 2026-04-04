import { AnnouncementForm } from '@/components/admin/announcement-form'

type PageProps = {
  params: Promise<{ id: string }>
}

export default async function EditAnnouncementPage({ params }: PageProps) {
  const { id } = await params

  return <AnnouncementForm mode="edit" announcementId={id} />
}
