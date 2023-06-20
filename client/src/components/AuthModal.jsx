// AuthModal = ChakraUi.Modal + react-hook-form(pattern,error) + firbase(frontend login method)

import { useState } from "react";
// Chakra UI --Modal
import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";

// implementation for react-hook-form
import { useForm, Controller } from "react-hook-form";

// implementation of firbase
import {auth, app} from "../firebase"

const AuthModal = () => {
  // Chakra UI --Modal
  const { isOpen, onOpen, onClose } = useDisclosure();
  //  react-hook-form
  const {
    control /**NO need of state variables like name, email, password */,
    handleSubmit /**onSubmit of forms runs handleSubmit */,
    formState: { errors } /**handle errors */,
  } = useForm();

  const [showLogin, setShowLogin] = useState(true);

  // firebase
  const [user, setUser] = useState(null);

  // error state variable for error messages
  const [error, setError] = useState("");

  const handleFormSubmit = async (data) => {
    try {
      if (showLogin) {
        const userCredential = await auth.signInWithEmailAndPassword(
          data.email,
          data.password
        );
        setUser(userCredential.user);
      } else {
        const userCredential = await auth.createUserWithEmailAndPassword(
          data.email,
          data.password
        );
        setUser(userCredential.user);
      }
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };
  
  
  
  /**   data parmeters is an custom object ---containing the form field values.
   The data.email property in the handleLoginSubmit function will contain the value entered by the user in the email field. */
   const handleLoginSubmit = (data) => {
     if (!data.email) {
       setError("Please enter your email.");
      } else if (!data.password) {
        setError("Please enter your password.");
      } else {
        // Perform login logic
        handleFormSubmit(data);
        setError("");
      }
    };
    
    const handleSignupSubmit = (data) => {
      if (!data.name) {
        setError("Please enter your name.");
      } else if (!data.email) {
        setError("Please enter your email.");
      } else if (!data.password) {
        setError("Please enter your password.");
      } else if (!data.confirmPassword) {
        setError("Please confirm your password.");
      } else if (data.password !== data.confirmPassword) {
        /**password and confirm passwrord should match */
        setError("Passwords do not match.");
      } else {
        // Perform signup logic
        handleFormSubmit(data);
        setError("");
      }
    };
    
    const handleToggle = () => {
      setShowLogin(!showLogin);
      setError(""); // Reset the error message when toggling
    };

    
  return (
    <>
      <Button onClick={onOpen}>{showLogin ? "Login" : "Sign Up"}</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="text-center">
            {showLogin ? "Login" : "Sign Up"}
          </ModalHeader>
          <ModalBody>
            <form
              onSubmit={handleSubmit(
                showLogin ? handleLoginSubmit : handleSignupSubmit
              )}
            >
              {/* Name input field shows--->showLogin=false */}
              {!showLogin && (
                <FormControl isInvalid={!!errors.name} className="mb-4">
                  <FormLabel>Name</FormLabel>
                  <Controller
                    control={control}
                    name="name"
                    defaultValue=""
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="text"
                        placeholder="Name"
                        pattern="[A-Za-z ]+"
                        title="Only letters and spaces are allowed"
                        borderColor={errors.name ? "red.500" : "gray.300"}
                        className="rounded-md"
                      />
                    )}
                  />
                  <FormErrorMessage>
                    {errors.name && errors.name.message}
                  </FormErrorMessage>
                </FormControl>
              )}

              {/* this field show for both login and singup */}
              <FormControl isInvalid={!!errors.email} className="mb-4">
                <FormLabel>Email</FormLabel>
                <Controller
                  control={control}
                  name="email"
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="email"
                      placeholder="Email"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      title="Please enter a valid email address"
                      borderColor={errors.email? "red.500" : "gray.300"}
                      className="rounded-md"
                    />
                  )}
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              {/* this field show for both login and singup */}
              <FormControl isInvalid={!!errors.password} className="mb-4">
                <FormLabel>Password</FormLabel>
                <Controller
                  control={control}
                  name="password"
                  defaultValue=""
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="password"
                      placeholder="Password"
                      pattern="(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,}"
                      // title represents the tooltip
                      title="Password must contain at least one number, one uppercase letter, one lowercase letter, one special character, and be at least 8 characters long"
                      borderColor={errors.password? "red.500" : "gray.300"}
                      className="rounded-md"
                    />
                  )}
                />
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
              {/* Name input field shows--->showLogin=false */}
              {!showLogin && (
                <FormControl
                  isInvalid={!!errors.confirmPassword}
                  className="mb-4"
                >
                  <FormLabel>Confirm Password</FormLabel>
                  <Controller
                    control={control}
                    name="confirmPassword"
                    defaultValue=""
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="password"
                        placeholder="Confirm Password"
                        borderColor={errors.confirmPassword? "red.500" : "gray.300"}
                        className="rounded-md"
                      />
                    )}
                  />
                  <FormErrorMessage>
                    {errors.confirmPassword && errors.confirmPassword.message}
                  </FormErrorMessage>
                </FormControl>
              )}

              <Button type="submit" mt={4} className="w-full">
                {showLogin ? "Login" : "Sign Up"}
              </Button>
            </form>
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Button onClick={handleToggle} variant="link">
              {showLogin ? "Switch to Sign Up" : "Switch to Login"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthModal;

/**notes:
 ======== state variables for storing data================================
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
 ----------------------------------------------------------------
 When using react-hook-form, the state variables for input values (e.g., name, email, etc.) are not necessary.
Instead, you can directly access form values and errors through the form instance provided by useForm.
The Controller component from react-hook-form manages input values and registers them with the form.
By utilizing react-hook-form, you can simplify input handling and form validation.



=============render============================================================
//  onchange 
  const handleInputChange = (event) => event.target.value;
----------------------------------------------------------------
The render function receives the field object as an argument and passes it down as props to the Input component. This enables the Input component to handle the----- ""onChange""----, onBlur, ----value----, and ----name ----properties correctly.

  

=============formState:{errors}================================
When using react-hook-form library, the formState object provides built-in error handling and validation capabilities. You don't need to use the setError state function to manually handle errors in most cases.

The formState object contains the errors property, which is automatically updated by react-hook-form based on the validation rules you define for each form field. You can directly access the errors for each field using errors.fieldName within your JSX code.
 */
