import { Box, Flex } from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode } from "react";
import Footer from "./Footer";

export const siteTitle = "Calculate Student Grades";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Calculate Student Grades with Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Flex direction={"column"} minHeight={"100vh"}>
        <Box flex="1">
          <main>{children}</main>
        </Box>
        <Footer />
      </Flex>
    </>
  );
};

export default Layout;
