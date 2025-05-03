import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Input,
  Button,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { schema } from '../../schema/userValidationSchema';
import { getUserByUsername } from '@services/userService';
import { LuUser } from 'react-icons/lu';

const UserSearchForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      const user = await getUserByUsername(data.username);
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
      <Stack spacing={4} maxW="400px" mx="auto">
        <Controller
          name="username"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl isInvalid={!!errors.username}>
              <FormLabel>İstifadəçi adı</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <LuUser color="gray" />
                </InputLeftElement>
                <Input {...field} placeholder="İstifadəçi adını daxil et" />
              </InputGroup>
              <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
            </FormControl>
          )}
        />
        <Button type="submit" colorScheme="blue" w="full">
          Axtar
        </Button>
      </Stack>
    </form>
  );
};

export default UserSearchForm;
