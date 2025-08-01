import { useState } from "react";
import { Button } from "./components/common/Button";
import { Search } from "./components/common/Search";
import { Modal } from "./components/ui/Modal";
import { Input } from "./components/common/Input";
import { Select } from "./components/common/Select";

export const App = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState<string | number>("");

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handleSelectChange = (value: string | number) => {
    setSelectedOption(value);
  };

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <>
      <Button variant="primary" onClick={handleOpenModal}>
        Click me
      </Button>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Input />
      <Select
        options={options}
        value={selectedOption}
        onChange={handleSelectChange}
      />

      <Modal modalTitle="Modal" isOpen={isOpenModal} onClose={handleCloseModal}>
        <p>Modal content goes here</p>
      </Modal>
    </>
  );
};
