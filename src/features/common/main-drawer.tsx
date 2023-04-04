import React from "react";
import {
  Button, Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input
} from "@chakra-ui/react";

interface MainDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  btnRef: React.RefObject<HTMLButtonElement>;
}

const MainDrawer = (props: MainDrawerProps): JSX.Element => {
  return (
    <React.Fragment>
      <Drawer
        isOpen={props.isOpen}
        placement='left'
        onClose={props.onClose}
        finalFocusRef={props.btnRef}
      >
        <DrawerOverlay/>
        <DrawerContent>
          <DrawerCloseButton/>
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...'/>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={props.onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </React.Fragment>
  )
};

export default MainDrawer;
