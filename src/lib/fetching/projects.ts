'use server'

import { RoleStatus } from '@/types/collections'
import { PostgressError } from '@/lib/errors'
import { createServerClient } from '@/lib/supabase-server'

export const fetchProjects = async () => {
  const supabase = createServerClient()

  const { data: projects, error } = await supabase
    .from('projects')
    .select(
      `id, updated_at, name, summary, categories, icon_url,
      roles(name, exp_level, rewards, work_mode, status)`
    )
    .eq('roles.status', RoleStatus.Open)
    .order('updated_at', { ascending: false })

  if (error) {
    return {
      data: null,
      error: new PostgressError('Has been an error retrieving projects.', {
        details: error.message,
      }),
    }
  }

  return {
    data: projects?.filter((project) => project.roles.length > 0),
    error: null,
  }
}

export const fetchProject = async (id: string) => {
  const supabase = createServerClient()

  const { data, error } = await supabase
    .from('projects')
    .select(
      `id, updated_at, name, summary, categories, icon_url, 
      roles(name, exp_level, rewards, work_mode, status)`
    )
    .eq('id', id)
    .single()

  if (error) {
    return {
      data: null,
      error: new PostgressError('Has been an error retrieving the project.', {
        details: error.message,
      }),
    }
  }

  return { data, error: null }
}

export const fetchUserProject = async () => {
  const supabase = createServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error('Unauthorized')
  }

  const { data, error } = await supabase
    .from('projects')
    .select(
      `id, updated_at, name, public,
      roles(status)`
    )
    .eq('created_by', user.id)
    .order('created_at', { ascending: false })

  if (error) {
    return {
      data: null,
      error: new PostgressError('Has been an error retrieving the project.', {
        details: error.message,
      }),
    }
  }

  return { data, error: null }
}
