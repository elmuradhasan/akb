import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Input,
  Button,
  Stack,
  Field,
  InputGroup,
  Heading,
  Box,
} from "@chakra-ui/react";
import { LuUser } from "react-icons/lu";
import { useMutation } from "@tanstack/react-query";
import { getUserByUsername } from "@services/userService";
import { useUserStore } from "../../store/userStore";
import { schema } from "../../schema/userValidationSchema";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
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
      setUser(data);
      navigate("/detail");
    },
    onError: (error) => {
      toast.error(
        "İstifadəçi tapılmadı. Zəhmət olmasa düzgün username daxil edin."
      );
      console.error("User not found:", error);
    },
  });

  const onSubmit = (data: {username:string}) => {
    console.log(data,"Salam");
    
    mutate(data.username);
  };

  return (
    <Box
      width={{ base: "100%", sm: "80%", md: "60%", lg: "40%" }}
      padding={{ base: 6, md: 10 }}
      borderRadius="md"
      boxShadow="lg"
      bg="green.200"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Heading
        color="teal.600"
        mb={6}
        fontSize={{ base: "lg", md: "2xl" }}
        textAlign="center"
      >
        Github istifadəçisi axtarışı
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "320px" }}>
        <Stack gap={4}>
          <Controller
            name="username"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Field.Root invalid={!!errors.username}>
                <Field.Label color="teal.600">İstifadəçi adı:</Field.Label>
                <InputGroup startElement={<LuUser />}>
                  <Input
                    {...field}
                    placeholder="İstifadəçi adı"
                    border="1px solid gray"
                    margin="10px 0"
                  />
                </InputGroup>
                <Field.ErrorText>{errors.username?.message}</Field.ErrorText>
              </Field.Root>
            )}
          />
          <Button type="submit"  w="full" loading={isPending}>
            Axtar
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default UserSearchForm;
