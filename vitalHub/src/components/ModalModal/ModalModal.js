import { Modal } from "react-native";
import { Subtitle, Title } from "../Title/Style";
import { ButtonModal, ButtonSecondary, ButtonSecondaryTitle, ButtonTitle } from "../Button/Style";
import { ModalContent, ModalText, ModalModal } from "./Style";
import { Input } from "../Input/Style";

export const ModalModal = ({
  visible,
  navigation,
  setShowModalCancel,
  ...rest }) => {
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
        <ModalModal>

          <Title>Clínica Natureh</Title>
          <Subtitle>São Paulo, SP</Subtitle>


          <InputInputGray placeholder="Rua Vicenso Silva, 987" />
          
          <InputInputGray placeholder="578" />

          <InputInputGray placeholder="Moema-SP" />
          
          <LinkBold onPress={() => navigation.replace("Cadastro")}>Voltar</LinkBold>
          
      </ModalModal>
    </Modal>
  );
};