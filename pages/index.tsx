import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRef } from "react";
import { FaInfo } from "react-icons/fa";
import Layout, { siteTitle } from "../components/Layout";

const Home: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <Layout>
      <Head>
        <title>Home | {siteTitle}</title>
      </Head>

      <Container as={Stack} maxW={"6xl"} py={{ base: "4", md: "8" }}>
        <Flex direction={{ base: "column", md: "row" }}>
          <Box flex="1">
            <Heading color={"#16173D"}>Calculate Student Grades 🧮</Heading>
            <Text color={"#818FA2"}>
              Estimate the grades of your students based on their current grades
              and the grades they need to achieve their desired grade.
            </Text>
          </Box>
          <Stack
            justifyContent={{ base: "start", md: "center" }}
            alignItems={{ base: "start", md: "center" }}
            mt={{ base: "3", md: "0" }}
          >
            <Button
              onClick={onOpen}
              colorScheme="teal"
              leftIcon={<FaInfo />}
              ref={btnRef}
            >
              Information
            </Button>
          </Stack>
        </Flex>
      </Container>

      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={"inside"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>How This App Works</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
              quidem aspernatur laborum illo cupiditate ea libero, dignissimos
              ut tenetur consequuntur quibusdam ratione, excepturi esse deleniti
              voluptas, numquam aliquam laboriosam ex inventore nesciunt!
              Voluptates explicabo dolor voluptatibus fugit ut optio non ea quas
              perferendis eveniet eum quidem velit quae consequatur nihil est,
              exercitationem vero harum molestias eaque, corrupti beatae
              architecto totam. Enim illo sapiente harum voluptas odio. Veniam
              facere temporibus corporis quasi eveniet sed corrupti fuga, id
              dicta animi illum ut, magni ullam modi dolores, error praesentium.
              Doloremque illum laborum modi provident eaque quae esse,
              praesentium, amet quaerat aliquam nihil tenetur eos vel odio
              velit, ipsa nobis explicabo ex consectetur officia? Cupiditate id
              unde inventore, deserunt fugit earum modi error libero illo eos
              eius ab asperiores sed natus facilis laudantium, aut rem dolorem
              perspiciatis quasi, eum animi qui magni? Eveniet id rem cum odio
              laudantium nihil dolorum. Voluptate ab officia, laborum
              exercitationem commodi autem possimus doloremque quisquam ut amet?
              Fuga veritatis officia sed sunt quae! Reiciendis vitae quam
              tempore vel beatae ea modi deleniti illum minus eveniet soluta
              ullam molestiae officia vero, tempora laborum est voluptate. Enim,
              modi possimus. Modi consequatur adipisci aspernatur totam amet eos
              corporis eius est minus magnam.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Layout>
  );
};

export default Home;
