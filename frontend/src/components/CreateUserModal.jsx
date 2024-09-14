import { Button, Flex, FormControl, FormLabel, Modal, Input, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure, Textarea, RadioGroup, Radio, ModalFooter } from '@chakra-ui/react'
import { BiAddToQueue } from "react-icons/bi"
import React from 'react'

const CreateUserModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return <>
  <Button onClick={onOpen}>
    <BiAddToQueue size={20}/>
  </Button>
  <Modal
    isOpen={isOpen}
    onClose={onClose}
  >
    <ModalOverlay/>
    <ModalContent>
        <ModalHeader> My new BFF </ModalHeader>
        <ModalCloseButton/>
            <ModalBody pb={6}>
                <Flex alignItems={"center"} gap={4} flexDirection="column">
                    {/* Left */}
                    <FormControl>
                        <FormLabel>Full Name</FormLabel>
                        <Input placeholder='Sum Dude'/>
                    </FormControl>
                    {/* Right */}
                    <FormControl>
                        <FormLabel>Role</FormLabel>
                        <Input placeholder='Necromancer'/>
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Description</FormLabel>
                        <Textarea
                            resize={"none"}
                            overflowY={"hidden"}
                            placeholder='He violates the dead and subverts their will'
                        />
                    </FormControl>
                    <RadioGroup mt={4}>
                        <Flex gap={5}>
                            <Radio value='male'>Male</Radio>
                            <Radio value='male'>Female</Radio>
                        </Flex>
                    </RadioGroup>
                </Flex>
            </ModalBody>
            <ModalFooter>
                <Button colorScheme='blue' mr={3}>Add</Button>
                <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
    </ModalContent>
  </Modal>
  </>
}

export default CreateUserModal
