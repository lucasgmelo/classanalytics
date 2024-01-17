"use client";
import { Inter } from "next/font/google";
import {
  ConfigProvider as AntdProvider,
  Button,
  Layout,
  theme as antdTheme,
} from "antd";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import StyledComponentsRegistry from "lib/StyledComponentsRegistry";
import AntdRegistry from "lib/AntdRegistry";

import theme from "theme/antdThemeConfig";
import GlobalStyle from "theme/global";
import { PlusCircleOutlined, HomeOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

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
                <Layout>
                  <Header
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      background: "#fafafa",
                      position: "sticky",
                      top: 0,
                      zIndex: 1,
                      width: "100%",
                    }}
                  >
                    <h3
                      style={{
                        color: "#35005B",
                      }}
                    >
                      ClassAnalytics
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <Button
                        type="primary"
                        onClick={() => router.push("/criar")}
                        style={{
                          background: "rgba(53, 0, 91, 0.9)",
                        }}
                      >
                        <PlusCircleOutlined />
                      </Button>
                      <Button
                        type="primary"
                        onClick={() => router.push("/aulas")}
                        style={{
                          background: "rgba(53, 0, 91, 0.9)",
                        }}
                      >
                        <HomeOutlined />
                      </Button>
                    </div>
                  </Header>
                  <Content>{children}</Content>
                </Layout>
              </StyledComponentsRegistry>
            </AntdProvider>
          </AntdRegistry>
        </QueryClientProvider>
      </body>
    </html>
  );
}
