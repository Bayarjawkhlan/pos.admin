import { create } from 'zustand'

type LayoutStore = {
  isSidebarOpen: boolean
  isMobileSidebarOpen: boolean
  selectedItem: string | null

  setIsSidebarOpen: (isSidebarOpen: boolean) => void
  setIsMobileSidebarOpen: (isMobileSidebarOpen: boolean) => void
  setSelectedItem: (selectedItem: string | null) => void
}

export const useLayoutStore = create<LayoutStore>()((set) => ({
  isSidebarOpen: true,
  isMobileSidebarOpen: false,
  selectedItem: null,

  setIsSidebarOpen: (isSidebarOpen) => set({ isSidebarOpen }),
  setIsMobileSidebarOpen: (isMobileSidebarOpen) => set({ isMobileSidebarOpen }),
  setSelectedItem: (selectedItem) => set({ selectedItem })
}))
