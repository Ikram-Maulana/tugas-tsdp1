import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRef } from "react";
import { FaInfo, FaLightbulb, FaSave } from "react-icons/fa";
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
        {/* Top */}
        <Flex
          direction={{ base: "column", md: "row" }}
          mb={{ base: "4", md: "8" }}
        >
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
            mt={{ base: "2", md: "0" }}
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

        {/* Main Input */}
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          templateRows={{ base: "repeat(2, 1fr)", md: "repeat(1, 1fr)" }}
          gap={4}
        >
          <GridItem
            border={"1px"}
            borderColor={"gray.200"}
            width={"full"}
            padding={"0.75rem"}
            rounded={"12px"}
          >
            <Heading size="md" color={"#16173D"} as="h2">
              Grades Weight
            </Heading>
            <form>
              <FormControl mt={{ base: "2", md: "4" }}>
                <FormLabel>Kehadiran</FormLabel>
                <NumberInput max={100} min={0}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <FormControl mt={{ base: "2", md: "3" }}>
                <FormLabel>Tugas</FormLabel>
                <NumberInput max={100} min={0}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <FormControl mt={{ base: "2", md: "3" }}>
                <FormLabel>UTS</FormLabel>
                <NumberInput max={100} min={0}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <FormControl mt={{ base: "2", md: "3" }}>
                <FormLabel>UAS</FormLabel>
                <NumberInput max={100} min={0}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <FormControl mt={{ base: "2", md: "3" }}>
                <FormLabel>Project</FormLabel>
                <NumberInput max={100} min={0}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <Button
                leftIcon={<FaSave />}
                bgColor={"#242562"}
                color={"white"}
                _hover={{ bgColor: "#16173D" }}
                mt={{ base: "3", md: "4" }}
              >
                Save
              </Button>
            </form>
          </GridItem>

          <GridItem
            border={"1px"}
            borderColor={"gray.200"}
            width={"full"}
            padding={"0.75rem"}
            rounded={"12px"}
          >
            <Heading size="md" color={"#16173D"} as="h2">
              Grades Average
            </Heading>
            <form>
              <FormControl mt={{ base: "2", md: "4" }}>
                <FormLabel>Kehadiran</FormLabel>
                <NumberInput max={100} min={0}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <FormControl mt={{ base: "2", md: "3" }}>
                <FormLabel>Tugas</FormLabel>
                <NumberInput max={100} min={0}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <FormControl mt={{ base: "2", md: "3" }}>
                <FormLabel>UTS</FormLabel>
                <NumberInput max={100} min={0}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <FormControl mt={{ base: "2", md: "3" }}>
                <FormLabel>UAS</FormLabel>
                <NumberInput max={100} min={0}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <FormControl mt={{ base: "2", md: "3" }}>
                <FormLabel>Project</FormLabel>
                <NumberInput max={100} min={0}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <Button
                leftIcon={<FaLightbulb />}
                bgColor={"#242562"}
                color={"white"}
                _hover={{ bgColor: "#16173D" }}
                mt={{ base: "3", md: "4" }}
              >
                Predict
              </Button>
            </form>
          </GridItem>
        </Grid>
      </Container>

      {/* Modal */}
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
