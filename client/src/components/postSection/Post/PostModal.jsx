import { useState, useEffect } from "react";
// react-hook-form
import { useForm } from "react-hook-form";
// ChakraUI
import { useDisclosure } from "@chakra-ui/hooks";
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
  // FormErrorMessage,
} from "@chakra-ui/react";

import { PostContext } from "./PostContext";
import { useContext } from "react";

// import "PostModal" component from where you want to show the modal with inbuilt Post Button
const PostModal = () => {
  // inbuilt feature of closing and opening modal
  const { isOpen, onOpen, onClose } = useDisclosure();
  // useForm --react-hook-form
  const {
    register,
    handleSubmit,
    // formState: { errors },
    reset,
  } = useForm();
  //
  const { setPostBoxes } = useContext(PostContext);

  const [imageUrl, setImageUrl] = useState(null);

  const onImageUpload = (image) => {
    const url = URL.createObjectURL(image);
    setImageUrl(url);
  };

  const onSubmitData = (data) => {
    // image upload logic
    if (data.imageUrl) {
      setImageUrl(data.imageUrl);  
    } else {
      onImageUpload(data.image[0]);
    }
    // setPostBoxes({
    //   ...data,
    //   imageUrl,
    // });
    onClose();
    reset();
  };

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(imageUrl);
    };
  }, [imageUrl]);
  return (
    <>
      <Button onClick={onOpen}>Post</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmitData)}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input {...register("Name")} />
              </FormControl>

              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input {...register("Title")} />
              </FormControl>

              <FormControl>
                <FormLabel>Description</FormLabel>
                <Input {...register("Description")} />
              </FormControl>

              <FormControl>
                <FormLabel>Image URL</FormLabel>
                <Input {...register("imageUrl")} />
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
    </>
  );
};

export { PostModal };
