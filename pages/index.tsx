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
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
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
  useToast,
} from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FaCalculator, FaEdit, FaInfo, FaSave } from "react-icons/fa";
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
    valueWeight: number;
  }[];
  dataGradesRule: {
    id: number;
    predikat: string;
    interval: string;
    keterangan: string;
    borderColor: string;
    bgColor: string;
  }[];
}

interface gradesFormProps {
  [key: string]: number;
}

const Home = ({ dataGradesAverage, dataGradesRule }: gradesProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [weights, setWeights] = useState<gradesFormProps>({
    kehadiranWeight: dataGradesAverage[0].valueWeight,
    tugasWeight: dataGradesAverage[1].valueWeight,
    utsWeight: dataGradesAverage[2].valueWeight,
    uasWeight: dataGradesAverage[3].valueWeight,
    projectWeight: dataGradesAverage[4].valueWeight,
  });
  const [average, setAverage] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      kehadiran: dataGradesAverage[0].value,
      tugas: dataGradesAverage[1].value,
      uts: dataGradesAverage[2].value,
      uas: dataGradesAverage[3].value,
      project: dataGradesAverage[4].value,
    },
  });
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm({
    defaultValues: {
      kehadiranWeight: weights.kehadiranWeight,
      tugasWeight: weights.tugasWeight,
      utsWeight: weights.utsWeight,
      uasWeight: weights.uasWeight,
      projectWeight: weights.projectWeight,
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const kehadiranAverage =
      (data.kehadiran / dataGradesAverage[0].maxVal) * weights.kehadiranWeight;
    const tugasAverage =
      (data.tugas / dataGradesAverage[1].maxVal) * weights.tugasWeight;
    const utsAverage =
      (data.uts / dataGradesAverage[2].maxVal) * weights.utsWeight;
    const uasAverage =
      (data.uas / dataGradesAverage[3].maxVal) * weights.uasWeight;
    const projectAverage =
      (data.project / dataGradesAverage[4].maxVal) * weights.projectWeight;

    const totalAverage =
      kehadiranAverage +
      tugasAverage +
      utsAverage +
      uasAverage +
      projectAverage;

    setAverage(totalAverage);
  };
  const onSubmitWeight: SubmitHandler<FieldValues> = (data) => {
    const kehadiranWeight = Number(data.kehadiranWeight);
    const tugasWeight = Number(data.tugasWeight);
    const utsWeight = Number(data.utsWeight);
    const uasWeight = Number(data.uasWeight);
    const projectWeight = Number(data.projectWeight);

    const totalWeight =
      kehadiranWeight + tugasWeight + utsWeight + uasWeight + projectWeight;

    if (totalWeight === 100) {
      setIsEdit(false);
      setWeights({
        kehadiranWeight,
        tugasWeight,
        utsWeight,
        uasWeight,
        projectWeight,
      });
      return toast({
        title: "Success change the total weighted value.",
        position: "top-right",
        isClosable: true,
        variant: "left-accent",
        status: "success",
      });
    }

    return toast({
      title: `The total weighted value does not match, over/under ${
        totalWeight - 100
      }%.`,
      position: "top-right",
      isClosable: true,
      variant: "left-accent",
      status: "warning",
    });
  };

  useEffect(() => {
    const kehadiranAverage =
      (dataGradesAverage[0].value / dataGradesAverage[0].maxVal) *
      weights.kehadiranWeight;
    const tugasAverage =
      (dataGradesAverage[1].value / dataGradesAverage[1].maxVal) *
      weights.tugasWeight;
    const utsAverage =
      (dataGradesAverage[2].value / dataGradesAverage[2].maxVal) *
      weights.utsWeight;
    const uasAverage =
      (dataGradesAverage[3].value / dataGradesAverage[3].maxVal) *
      weights.uasWeight;
    const projectAverage =
      (dataGradesAverage[4].value / dataGradesAverage[4].maxVal) *
      weights.projectWeight;

    const totalAverage =
      kehadiranAverage +
      tugasAverage +
      utsAverage +
      uasAverage +
      projectAverage;

    setAverage(totalAverage);
  }, [dataGradesAverage, weights]);

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
          {Math.round(average) >= 70 ? (
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
                <Text as="b">
                  ({average}% == {Math.round(average)}%)
                </Text>{" "}
                average, <Text as="b">Sangat Baik</Text>.
              </Text>
            </Box>
          ) : Math.round(average) >= 60 && Math.round(average) < 70 ? (
            <Box
              border={"1px"}
              borderColor={"green.400"}
              bgColor={"green.100"}
              width={"full"}
              padding={"0.75rem"}
              rounded={"md"}
            >
              <Text>
                Your result grades is <Text as="b">B</Text> with a{" "}
                <Text as="b">
                  ({average}% == {Math.round(average)}%)
                </Text>{" "}
                average, <Text as="b">Baik</Text>.
              </Text>
            </Box>
          ) : Math.round(average) >= 50 && Math.round(average) < 60 ? (
            <Box
              border={"1px"}
              borderColor={"yellow.400"}
              bgColor={"yellow.100"}
              width={"full"}
              padding={"0.75rem"}
              rounded={"md"}
            >
              <Text>
                Your result grades is <Text as="b">C</Text> with a{" "}
                <Text as="b">
                  ({average}% == {Math.round(average)}%)
                </Text>{" "}
                average, <Text as="b">Cukup</Text>.
              </Text>
            </Box>
          ) : Math.round(average) >= 40 && Math.round(average) < 50 ? (
            <Box
              border={"1px"}
              borderColor={"pink.400"}
              bgColor={"pink.100"}
              width={"full"}
              padding={"0.75rem"}
              rounded={"md"}
            >
              <Text>
                Your result grades is <Text as="b">D</Text> with a{" "}
                <Text as="b">
                  ({average}% == {Math.round(average)}%)
                </Text>{" "}
                average, <Text as="b">Kurang</Text>.
              </Text>
            </Box>
          ) : (
            <Box
              border={"1px"}
              borderColor={"red.400"}
              bgColor={"red.100"}
              width={"full"}
              padding={"0.75rem"}
              rounded={"md"}
            >
              <Text>
                Your result grades is <Text as="b">E</Text> with a{" "}
                <Text as="b">
                  ({average}% == {Math.round(average)}%)
                </Text>{" "}
                average, <Text as="b">Sangat Kurang</Text>.
              </Text>
            </Box>
          )}

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
              <Flex justifyContent="start" alignItems="center" gap="2">
                <Heading size="md" color={"#16173D"} as="h2">
                  Grades Weight
                </Heading>
                <Popover placement="top-start">
                  <PopoverTrigger>
                    <Button size={"xs"}>
                      <FaInfo />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverHeader fontWeight="semibold">
                      Grades Weight Rules
                    </PopoverHeader>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                      the grand total of the{" "}
                      <Code colorScheme="yellow">
                        Kehadiran + Tugas + UTS + UAS + Project
                      </Code>{" "}
                      sums must be 100%, if the grand total exceeds 100% it will
                      fail.
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Flex>
              <form onSubmit={handleSubmit2(onSubmitWeight)}>
                <FormControl
                  mt={{ base: "2", md: "4" }}
                  isDisabled={!isEdit && true}
                  isReadOnly={!isEdit && true}
                  cursor={!isEdit ? "not-allowed" : "auto"}
                >
                  <FormLabel>Kehadiran (%)</FormLabel>
                  <NumberInput max={100} min={0}>
                    <NumberInputField
                      {...register2("kehadiranWeight", {
                        max: 100,
                        min: 0,
                      })}
                    />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
                <FormControl
                  mt={{ base: "2", md: "3" }}
                  isDisabled={!isEdit && true}
                  isReadOnly={!isEdit && true}
                  cursor={!isEdit ? "not-allowed" : "auto"}
                >
                  <FormLabel>Tugas (%)</FormLabel>
                  <NumberInput max={100} min={0}>
                    <NumberInputField
                      {...register2("tugasWeight", {
                        max: 100,
                        min: 0,
                      })}
                    />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
                <FormControl
                  mt={{ base: "2", md: "3" }}
                  isDisabled={!isEdit && true}
                  isReadOnly={!isEdit && true}
                  cursor={!isEdit ? "not-allowed" : "auto"}
                >
                  <FormLabel>UTS (%)</FormLabel>
                  <NumberInput max={100} min={0}>
                    <NumberInputField
                      {...register2("utsWeight", {
                        max: 100,
                        min: 0,
                      })}
                    />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
                <FormControl
                  mt={{ base: "2", md: "3" }}
                  isDisabled={!isEdit && true}
                  isReadOnly={!isEdit && true}
                  cursor={!isEdit ? "not-allowed" : "auto"}
                >
                  <FormLabel>UAS (%)</FormLabel>
                  <NumberInput max={100} min={0}>
                    <NumberInputField
                      {...register2("uasWeight", {
                        max: 100,
                        min: 0,
                      })}
                    />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
                <FormControl
                  mt={{ base: "2", md: "3" }}
                  isDisabled={!isEdit && true}
                  isReadOnly={!isEdit && true}
                  cursor={!isEdit ? "not-allowed" : "auto"}
                >
                  <FormLabel>Project (%)</FormLabel>
                  <NumberInput max={100} min={0}>
                    <NumberInputField
                      {...register2("projectWeight", {
                        max: 100,
                        min: 0,
                      })}
                    />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
                {!isEdit ? (
                  <Button
                    leftIcon={<FaEdit />}
                    bgColor={"orange.500"}
                    color={"white"}
                    _hover={{ bgColor: "orange.600" }}
                    mt={{ base: "3", md: "4" }}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsEdit(true);
                    }}
                  >
                    Edit
                  </Button>
                ) : (
                  <Button
                    leftIcon={<FaSave />}
                    bgColor={"#242562"}
                    color={"white"}
                    _hover={{ bgColor: "#16173D" }}
                    mt={{ base: "3", md: "4" }}
                    type="submit"
                  >
                    Save
                  </Button>
                )}
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
                <FormControl
                  mt={{ base: "2", md: "4" }}
                  isDisabled={
                    isEdit || weights.kehadiranWeight === 0 ? true : false
                  }
                  isReadOnly={
                    isEdit || weights.kehadiranWeight === 0 ? true : false
                  }
                  cursor={
                    isEdit || weights.kehadiranWeight === 0
                      ? "not-allowed"
                      : "auto"
                  }
                >
                  <FormLabel>Kehadiran</FormLabel>
                  <NumberInput max={dataGradesAverage[0].maxVal} min={0}>
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
                <FormControl
                  mt={{ base: "2", md: "3" }}
                  isDisabled={
                    isEdit || weights.tugasWeight === 0 ? true : false
                  }
                  isReadOnly={
                    isEdit || weights.tugasWeight === 0 ? true : false
                  }
                  cursor={
                    isEdit || weights.tugasWeight === 0 ? "not-allowed" : "auto"
                  }
                >
                  <FormLabel>Tugas</FormLabel>
                  <NumberInput max={dataGradesAverage[1].maxVal} min={0}>
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
                <FormControl
                  mt={{ base: "2", md: "3" }}
                  isDisabled={isEdit || weights.utsWeight === 0 ? true : false}
                  isReadOnly={isEdit || weights.utsWeight === 0 ? true : false}
                  cursor={
                    isEdit || weights.utsWeight === 0 ? "not-allowed" : "auto"
                  }
                >
                  <FormLabel>UTS</FormLabel>
                  <NumberInput max={dataGradesAverage[2].maxVal} min={0}>
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
                <FormControl
                  mt={{ base: "2", md: "3" }}
                  isDisabled={isEdit || weights.uasWeight === 0 ? true : false}
                  isReadOnly={isEdit || weights.uasWeight === 0 ? true : false}
                  cursor={
                    isEdit || weights.uasWeight === 0 ? "not-allowed" : "auto"
                  }
                >
                  <FormLabel>UAS</FormLabel>
                  <NumberInput max={dataGradesAverage[3].maxVal} min={0}>
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
                <FormControl
                  mt={{ base: "2", md: "3" }}
                  isDisabled={
                    isEdit || weights.projectWeight === 0 ? true : false
                  }
                  isReadOnly={
                    isEdit || weights.projectWeight === 0 ? true : false
                  }
                  cursor={
                    isEdit || weights.projectWeight === 0
                      ? "not-allowed"
                      : "auto"
                  }
                >
                  <FormLabel>Project</FormLabel>
                  <NumberInput max={dataGradesAverage[4].maxVal} min={0}>
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
                {isEdit ? (
                  <Button
                    leftIcon={<FaCalculator />}
                    bgColor={"#242562"}
                    color={"white"}
                    _hover={{ bgColor: "#16173D" }}
                    mt={{ base: "3", md: "4" }}
                    disabled={true}
                  >
                    Calculate
                  </Button>
                ) : (
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
                )}
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
