import { Button, Flex, FormControl, FormLabel, Modal, Input, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure, Textarea, RadioGroup, Radio, ModalFooter, useToast } from '@chakra-ui/react'
import { BiAddToQueue } from "react-icons/bi"
import React, { useState } from 'react'
import { BASE_URL } from '../App'

const CreateUserModal = ({setUsers}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isLoading, setIsLoading] = useState(false);
    const [inputs, setInputs] = useState({
        name: "",
        role: "",
        description: "",
        gender: ""
    });
    const toast = useToast()

    const handleCreateUser = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const res = await fetch(BASE_URL + "/friends", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(inputs),
            })

            const data = await res.json();
            if(!res.ok) {
                throw new Error(data.error)
            }
            toast({
                status: 'success',
                title: 'Nice!',
                description: "friend was created successfully",
                duration: 2000,
                position: "top-center"
              });
              onClose();
              setUsers((prevUsers) => [...prevUsers, data]);

              setInputs({
                name:"",
                role:"",
                description: "",
                gender: "",
              })

        } catch (error) {
            toast({
                status: 'error',
                title: 'Whomp Whomp',
                description: "friend was NOT created",
                duration: 4000,
                
              });
        } finally {
            setIsLoading(false);
            // setInputs({
            //     name:"",
            //     role:"",
            //     description:"",
            //     gender:"",
            // }); // clear inputs
        }
    }

  return <>
  <Button onClick={onOpen}>
    <BiAddToQueue size={20}/>
  </Button>
  <Modal
    isOpen={isOpen}
    onClose={onClose}
  >
    <ModalOverlay/>
    <form onSubmit={handleCreateUser}>
    <ModalContent>
        <ModalHeader> My new BFF </ModalHeader>
        <ModalCloseButton/>
            <ModalBody pb={6}>
                <Flex alignItems={"center"} gap={4} flexDirection="column">
                    {/* Left */}
                    <FormControl>
                        <FormLabel>Full Name</FormLabel>
                        <Input placeholder='Sum Dude'
                            value={inputs.name}
                            onChange={(e) => setInputs({...inputs, name: e.target.value})}
                        />
                    </FormControl>
                    {/* Right */}
                    <FormControl>
                        <FormLabel>Role</FormLabel>
                        <Input placeholder='Necromancer'
                            value={inputs.role}
                            onChange={(e) => setInputs({...inputs, role: e.target.value})}
                        />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Description</FormLabel>
                        <Textarea
                            resize={"none"}
                            overflowY={"hidden"}
                            placeholder='He violates the dead and subverts their will'
                            value={inputs.description}
                            onChange={(e) => setInputs({...inputs, description: e.target.value})}
                        />
                    </FormControl>
                    <RadioGroup
                        onChange={(value) => setInputs({...inputs, gender: value})}
                        value={inputs.gender}
                    >
                        <Flex gap={5}>
                            <Radio value="male">Male</Radio>
                            <Radio value="female">Female</Radio>
                        </Flex>
                    </RadioGroup>
                </Flex>
            </ModalBody>
            <ModalFooter>
                <Button colorScheme='blue' mr={3} type='submit' isLoading={isLoading} >Add</Button>
                <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
    </ModalContent>
    </form>
  </Modal>
  </>
}

export default CreateUserModal
