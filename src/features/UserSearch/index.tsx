import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input, Button } from '@chakra-ui/react';
import { schema } from '../../schema/userValidationSchema';
import { useQuery } from 'react-query';
import { getUserByUsername } from '@services/userService';

const UserSearchForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    // API sorğusu burada ediləcək
    try {
      const user = await getUserByUsername(data.username);
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    
      <Button mt={4} colorScheme="teal" type="submit">
        Search
      </Button>
    </form>
  );
};

export default UserSearchForm;
