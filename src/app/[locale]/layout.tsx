import '@/styles/globals.css'
import 'material-symbols/rounded.css'

import { Metadata } from 'next'

import { siteConfig } from '@/config/site'
import { getDictionary } from '@/lib/dictionaries'
import { fontSans } from '@/lib/fonts'
import { createServerClient } from '@/lib/supabase-server'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/toaster'
import { DevToolbar } from '@/components/dev-toolbar'
import { I18nProvider } from '@/components/providers/dictionary-provider'
import { SupabaseAuthProvider } from '@/components/providers/supabase-auth-provider'
import { SupabaseProvider } from '@/components/providers/supabase-provider'
import { SwrProvider } from '@/components/providers/swr-provider'
import { ThemeProvider } from '@/components/providers/theme-provider'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const supabase = createServerClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()

  const { dict, defaultDict } = await getDictionary(params.locale)

  return (
    <html
      lang={params.locale}
      suppressHydrationWarning
      className={cn(fontSans.variable, 'antialiased')}
    >
      <head />
      <body className="min-h-screen bg-background font-sans text-body-md text-onSurface selection:bg-primary/30">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <I18nProvider dict={dict} defaultDict={defaultDict}>
            <SwrProvider>
              <SupabaseProvider>
                <SupabaseAuthProvider serverSession={session}>
                  {children}
                </SupabaseAuthProvider>
              </SupabaseProvider>
            </SwrProvider>
          </I18nProvider>
          <DevToolbar />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
