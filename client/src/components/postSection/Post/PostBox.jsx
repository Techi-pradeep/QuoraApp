// react-icons
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMessage } from "react-icons/ai";
import { TbArrowBigUp, TbArrowBigDown } from "react-icons/tb";
import { BsThreeDots, BsShare } from "react-icons/bs";
// Chakra UI --Modal
import { Avatar } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
//   FormControl,
//   FormLabel,
//   Input,
//   FormErrorMessage,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";

const PostBox = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { register, handleSubmit } = useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const onSubmit = (data) => {
      console.log(data); // Handle the form data here
      setIsModalOpen(false); // Close the modal after form submission
    };
    console.log("PostBox started");
  return (
    <>
    <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
        
    {/* <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
     */}
     <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Post</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-between mx-2">
              <div className="flex">
                <Avatar />
                <div>
                  <div className="flex">
                    <div className="flex pl-4">
                      <h4>Pradeep kumar</h4>
                      <a href="#" className="pl-2 text-blue-500">
                        follow
                      </a>
                    </div>
                  </div>
                  <div className="flex pl-4">
                    <p>Wealth comes form Health</p>
                    <small>Timestamp</small>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="p-2 text-justify">
                <input {...register('postContent')} placeholder="Enter post content" />
              </p>
              <input {...register('imageUrl')} placeholder="Enter image URL" />
            </div>

            <div className="flex justify-between pb-2 m-2">
              <div className="flex">
                <div className="pl-0">
                  <button type="submit" className="focus:text-green-500 hover:cursor-pointer">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setIsModalOpen(false)}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
  )
}

export default PostBox