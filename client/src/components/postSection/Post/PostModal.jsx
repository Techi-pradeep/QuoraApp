
// ModalForm.jsx

import { useForm } from 'react-hook-form';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';

const PostModal = ({ isOpen, onClose }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission here
    onClose(); // Close the modal after form submission
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Post</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel>Post Content</FormLabel>
              <Input {...register('postContent')} />
            </FormControl>

            <FormControl>
              <FormLabel>Image URL</FormLabel>
              <Input {...register('imageUrl')} />
            </FormControl>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} type="submit">
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PostModal;
