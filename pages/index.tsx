import {
  Box,
  Button,
  Code,
  Container,
  Flex,
  FormControl,
  FormHelperText,
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
import { GetStaticProps } from "next";
import Head from "next/head";
import { useRef } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FaCalculator, FaInfo, FaSave } from "react-icons/fa";
import Layout, { siteTitle } from "../components/Layout";
import { gradesAverage, gradesRule } from "../utils/Data";

export const getStaticProps: GetStaticProps = async () => {
  const dataGradesAverage = await gradesAverage();
  const dataGradesRule = await gradesRule();

  return {
    props: {
      dataGradesAverage,
      dataGradesRule,
    },
  };
};

interface gradesProps {
  dataGradesAverage: {
    id: number;
    label: string;
    value: number;
    maxVal: number;
  }[];
  dataGradesRule: {
    id: number;
    predikat: string;
    interval: string;
    keterangan: string;
  }[];
}

const Home = ({ dataGradesAverage, dataGradesRule }: gradesProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

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
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl mt={{ base: "2", md: "4" }}>
                  <FormLabel>Kehadiran</FormLabel>
                  <NumberInput
                    max={dataGradesAverage[0].maxVal}
                    min={0}
                    defaultValue={dataGradesAverage[0].value}
                  >
                    <NumberInputField
                      {...register("kehadiran", {
                        max: dataGradesAverage[0].maxVal,
                        min: 0,
                      })}
                    />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  {errors.kehadiran && (
                    <FormHelperText color="red">
                      Max value is {dataGradesAverage[0].maxVal} and min value
                      is 0.
                    </FormHelperText>
                  )}
                </FormControl>
                <FormControl mt={{ base: "2", md: "3" }}>
                  <FormLabel>Tugas</FormLabel>
                  <NumberInput
                    max={dataGradesAverage[1].maxVal}
                    min={0}
                    defaultValue={dataGradesAverage[1].value}
                  >
                    <NumberInputField
                      {...register("tugas", {
                        max: dataGradesAverage[1].maxVal,
                        min: 0,
                      })}
                    />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  {errors.tugas && (
                    <FormHelperText color="red">
                      Max value is {dataGradesAverage[1].maxVal} and min value
                      is 0.
                    </FormHelperText>
                  )}
                </FormControl>
                <FormControl mt={{ base: "2", md: "3" }}>
                  <FormLabel>UTS</FormLabel>
                  <NumberInput
                    max={dataGradesAverage[2].maxVal}
                    min={0}
                    defaultValue={dataGradesAverage[2].value}
                  >
                    <NumberInputField
                      {...register("uts", {
                        max: dataGradesAverage[2].maxVal,
                        min: 0,
                      })}
                    />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  {errors.uts && (
                    <FormHelperText color="red">
                      Max value is {dataGradesAverage[2].maxVal} and min value
                      is 0.
                    </FormHelperText>
                  )}
                </FormControl>
                <FormControl mt={{ base: "2", md: "3" }}>
                  <FormLabel>UAS</FormLabel>
                  <NumberInput
                    max={dataGradesAverage[3].maxVal}
                    min={0}
                    defaultValue={dataGradesAverage[3].value}
                  >
                    <NumberInputField
                      {...register("uas", {
                        max: dataGradesAverage[3].maxVal,
                        min: 0,
                      })}
                    />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  {errors.uas && (
                    <FormHelperText color="red">
                      Max value is {dataGradesAverage[3].maxVal} and min value
                      is 0.
                    </FormHelperText>
                  )}
                </FormControl>
                <FormControl mt={{ base: "2", md: "3" }}>
                  <FormLabel>Project</FormLabel>
                  <NumberInput
                    max={dataGradesAverage[4].maxVal}
                    min={0}
                    defaultValue={dataGradesAverage[4].value}
                  >
                    <NumberInputField
                      {...register("project", {
                        max: dataGradesAverage[4].maxVal,
                        min: 0,
                      })}
                    />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  {errors.project && (
                    <FormHelperText color="red">
                      Max value is {dataGradesAverage[4].maxVal} and min value
                      is 0.
                    </FormHelperText>
                  )}
                </FormControl>
                <Button
                  leftIcon={<FaCalculator />}
                  bgColor={"#242562"}
                  color={"white"}
                  _hover={{ bgColor: "#16173D" }}
                  mt={{ base: "3", md: "4" }}
                  type="submit"
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
                {dataGradesRule.map((item, index) => (
                  <Tr key={index}>
                    <Td>{index + 1}</Td>
                    <Td>{item.predikat}</Td>
                    <Td>{item.interval}</Td>
                    <Td>{item.keterangan}</Td>
                  </Tr>
                ))}
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
