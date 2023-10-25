import { fetchProjectRoles } from '@/lib/fetching/projects'
import { NewRoleDialog } from '@/components/dashboard/project/new-role-dialog'
import { RolesFeed } from '@/components/dashboard/project/roles-feed'
import { Error } from '@/components/error'

interface ProjectRolesProps {
  params: { locale: string; id: string }
}

export default async function Roles({ params: { id } }: ProjectRolesProps) {
  const { data, error } = await fetchProjectRoles(id)

  if (error)
    return (
      <div className="mx-auto w-full max-w-4xl">
        <Error error={error} />
      </div>
    )

  return (
    <>
      <div className="px-4 pb-6 sm:px-12">
        <RolesFeed projectId={id} data={data.roles} />
      </div>
      <div className="fixed bottom-4 right-4 mb-20 md:bottom-8 md:right-8 md:mb-0">
        <NewRoleDialog projectId={id} categories={data.categories} />
      </div>
    </>
  )
}
