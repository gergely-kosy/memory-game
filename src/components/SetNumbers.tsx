import { ChangeNumberContainer, DefaultButton, SetCustomNumbersButton, SubmitContainer } from '@/lib/styled';
import React, { Dispatch, FormEvent, SetStateAction, useEffect, useState } from 'react'
import { Icon, Input, Modal } from 'semantic-ui-react'

const SetNumbers = () => {
  const [open, setOpen] = useState(false);
  const [customNumbers, setCustomNumbers] = useState<number[]>([]);
  const [number01, setNumber01] = useState("");
  const [number02, setNumber02] = useState("");
  const [number03, setNumber03] = useState("");
  const [number04, setNumber04] = useState("");
  const [number05, setNumber05] = useState("");
  const [number06, setNumber06] = useState("");
  const [number07, setNumber07] = useState("");
  const [number08, setNumber08] = useState("");

  useEffect(() => {
    console.log(customNumbers)
  }, [customNumbers])

  const handleSetNumbers = (value: string, setNumber: Dispatch<SetStateAction<string>>) => {
      const tempValue = parseInt(value);
    if (tempValue > 9999) {
        setNumber("9999");
    } else {
        setNumber(value);
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log("ehh")
    e.preventDefault();
    setOpen(false);
  }

  return (
    <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size='small'
        trigger={<SetCustomNumbersButton>Set custom numbers</SetCustomNumbersButton>}
      >
        <Modal.Header>You can set your own custom numbers</Modal.Header>
        <Modal.Content>
            <form onSubmit={(e) => handleSubmit(e)}>
                <ChangeNumberContainer>
                    <Input placeholder="1" value={number01} type="number" onChange={e => handleSetNumbers(e.target.value, setNumber01)} required />
                    <Input placeholder="2" value={number02} type="number" onChange={e => handleSetNumbers(e.target.value, setNumber02)} required />
                    <Input placeholder="3" value={number03} type="number" onChange={e => handleSetNumbers(e.target.value, setNumber03)} required />
                    <Input placeholder="4" value={number04} type="number" onChange={e => handleSetNumbers(e.target.value, setNumber04)} required />
                    <Input placeholder="5" value={number05} type="number" onChange={e => handleSetNumbers(e.target.value, setNumber05)} required />
                    <Input placeholder="6" value={number06} type="number" onChange={e => handleSetNumbers(e.target.value, setNumber06)} required />
                    <Input placeholder="7" value={number07} type="number" onChange={e => handleSetNumbers(e.target.value, setNumber07)} required />
                    <Input placeholder="8" value={number08} type="number" onChange={e => handleSetNumbers(e.target.value, setNumber08)} required />
                </ChangeNumberContainer>
                <SubmitContainer>
                    <DefaultButton type="submit" >
                        <Icon name='checkmark' /> Submit
                    </DefaultButton>
                </SubmitContainer>
            </form>
        </Modal.Content>
      </Modal>
  )
}

export default SetNumbers