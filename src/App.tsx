import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Header from "./components/Header"; // Import your Header component

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* The fixed Header component stays at the top of the viewport */}
        <Header />

        {/* This div wraps all the content that should scroll under the header. */}
        {/* The top padding should match the height of your fixed header. */}
        {/* You may need to adjust 'pt-24' (96px) to get the spacing just right. */}
        <div className="pt-24">
          {/* The banner image, which will now appear below the header */}
          <img
            src="/pvpbanner.png"
            alt="PVP Banner"
            className="w-full h-auto object-cover"
          />

          {/* The main content area for your pages */}
          <main>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
