import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import AnnouncementsModal from "./components/AnnouncementsModal"; // ✅ Import the popup

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Fixed Header */}
        <Header />

        {/* Page Content */}
        <div className="pt-24">
          {/* Banner */}
          <img
            src="/pvpbanner.png"
            alt="PVP Banner"
            className="w-full h-auto object-cover"
          />

          {/* ✅ Announcements popup */}
          <AnnouncementsModal />

          {/* Routes */}
          <main>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
