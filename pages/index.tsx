import {
  Box,
  Button,
  Code,
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
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRef } from "react";
import { FaCalculator, FaInfo, FaSave } from "react-icons/fa";
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

        <Stack gap="2">
          {/* Grades Result */}
          <Box
            border={"1px"}
            borderColor={"teal.400"}
            bgColor={"teal.100"}
            width={"full"}
            padding={"0.75rem"}
            rounded={"md"}
          >
            <Text>
              Your result grades is <Text as="b">A</Text> with a{" "}
              <Text as="b">90%</Text> average, <Text as="b">Sangat Baik</Text>.
            </Text>
          </Box>

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
                  leftIcon={<FaCalculator />}
                  bgColor={"#242562"}
                  color={"white"}
                  _hover={{ bgColor: "#16173D" }}
                  mt={{ base: "3", md: "4" }}
                >
                  Calculate
                </Button>
              </form>
            </GridItem>
          </Grid>

          {/* Grades Table */}
          <TableContainer
            border={"1px"}
            borderColor={"gray.200"}
            width={"full"}
            padding={"0.75rem"}
            rounded={"12px"}
          >
            <Table variant="simple">
              <TableCaption>Grades Table</TableCaption>
              <Thead>
                <Tr>
                  <Th>No</Th>
                  <Th>Predikat</Th>
                  <Th>Interval Nilai</Th>
                  <Th>Keterangan</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>1</Td>
                  <Td>A</Td>
                  <Td>70-100</Td>
                  <Td>Sangat Baik</Td>
                </Tr>
                <Tr>
                  <Td>2</Td>
                  <Td>B</Td>
                  <Td>60-69</Td>
                  <Td>Baik</Td>
                </Tr>
                <Tr>
                  <Td>3</Td>
                  <Td>C</Td>
                  <Td>50-59</Td>
                  <Td>Cukup</Td>
                </Tr>
                <Tr>
                  <Td>4</Td>
                  <Td>D</Td>
                  <Td>40-49</Td>
                  <Td>Kurang</Td>
                </Tr>
                <Tr>
                  <Td>5</Td>
                  <Td>E</Td>
                  <Td>0-39</Td>
                  <Td>Gagal</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Stack>
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
              Rumus yang digunakan dalam perhitungan adalah sebagai berikut:
            </Text>
            <Code colorScheme="yellow">
              Grades = (nilaiAverageMahasiswa / batasNilaiMax) x nilaiBobot
            </Code>
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
