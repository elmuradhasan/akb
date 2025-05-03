import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Input,
  Button,
  Stack,
  Field,
  InputGroup,
  HStack,
  Heading,
} from "@chakra-ui/react";
import { LuUser } from "react-icons/lu";
import { useMutation } from "@tanstack/react-query";
import { getUserByUsername } from "@services/userService";
import { useUserStore } from "../../store/userStore";
import { schema } from "../../schema/userValidationSchema";
import { useNavigate } from "react-router-dom";

const UserSearchForm = () => {
  const setUser = useUserStore((state) => state.setUser);
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: getUserByUsername,
    onSuccess: (data) => {
      setUser(data); // Zustand store-a yazırıq
      navigate("/detail");
      console.log("User fetched:", data);
    },
    onError: (error) => {
      navigate("/detail");
      console.error("User not found:", error);
    },
  });

  const onSubmit = (data: any) => {
    mutate(data.username);
  };

  return (
    <HStack
      display="flex"
      justifyContent="space"
      alignItems="center"
      padding={20}
      flexDirection="column"
      borderRadius={8}
      boxShadow="lg"
      bg="blue.100"
      width={"50%"}
    >
      <Heading color="teal.solid" marginBottom={4} fontSize={24}>Github istifadəçisi axtarışı</Heading>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
        <Stack gap={4} maxW="400px" mx="auto">
          <Controller
            name="username"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Field.Root invalid={!!errors.username}>
                <Field.Label>İstifadəçi adı:</Field.Label>
                <InputGroup startElement={<LuUser />}>
                  <Input {...field} placeholder="İstifadəçi adı" outline="none" border="1px solid gray" margin="10px 0px"/>
                </InputGroup>
                <Field.ErrorText>{errors.username?.message}</Field.ErrorText>
              </Field.Root>
            )}
          />
          <Button type="submit" colorScheme="blue" w="full" loading={isPending}>
            Axtar
          </Button>
        </Stack>
      </form>
    </HStack>
  );
};

export default UserSearchForm;
