import { Box, Container } from '@hope-ui/solid'
import { ParentComponent } from 'solid-js'

export const FullLayout: ParentComponent = ({ children }) => {
  return (
    <Box d="flex" flexDirection={'column'} class="flex flex-col min-h-screen h-screen overflow-hidden bg-slate-50">
      <header class="text-slate-700 border-b border-slate-200">
        <Container p="$3">
          <h1 class="text-2xl font-bold">SolidJS</h1>
        </Container>
      </header>
      <main class="flex-1">{children}</main>
      <footer class="text-slate-700 border-t border-slate-200">
        <Container>
          <p>Footer</p>
        </Container>
      </footer>
    </Box>
  )
}
