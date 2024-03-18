"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider as AntdProvider, Layout } from "antd";
import { Inter } from "next/font/google";

import AntdRegistry from "lib/AntdRegistry";
import StyledComponentsRegistry from "lib/StyledComponentsRegistry";

import { useRouter } from "next/navigation";
import theme from "theme/antdThemeConfig";
import GlobalStyle from "theme/global";

const inter = Inter({ subsets: ["latin"] });

const { Header, Content } = Layout;

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <html className={inter.className}>
      <body>
        <QueryClientProvider client={queryClient}>
          <AntdRegistry>
            <AntdProvider theme={theme}>
              <StyledComponentsRegistry>
                <GlobalStyle />
                {children}
              </StyledComponentsRegistry>
            </AntdProvider>
          </AntdRegistry>
        </QueryClientProvider>
      </body>
    </html>
  );
}
