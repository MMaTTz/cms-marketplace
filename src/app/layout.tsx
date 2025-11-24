// src/app/layout.tsx (versión actualizada con Sonner)
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";  // ← Cambio aquí

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WebCrafters PRO - Páginas web profesionales en 7 días",
  description: "Paquetes de diseño web para emprendedores en Latinoamérica",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-6">
                  <h1 className="text-2xl font-bold">WebCrafters PRO</h1>
                </div>
                <nav className="flex items-center gap-6 text-sm font-medium">
                  <a href="/servicios">Servicios</a>
                  <a href="/#precios">Precios</a>
                  <a href="/#garantias">Garantía</a>
                  <a href="/login">Login</a>
                </nav>
              </div>
            </header>

            <main className="flex-1">{children}</main>

            <footer className="border-t bg-muted/40 py-12">
              <div className="container px-4 text-center text-sm text-muted-foreground">
                © 2025 WebCrafters PRO • Todos los derechos reservados • México | Colombia | Perú | Argentina
              </div>
            </footer>
          </div>
          <Toaster />  // ← Asegúrate de que esté aquí
        </ThemeProvider>
      </body>
    </html>
  );
}