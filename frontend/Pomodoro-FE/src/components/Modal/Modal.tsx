import { Button } from '@nextui-org/react';
import React, { useState } from 'react';
import Modal from 'react-modal';
import { useAppSelector } from '../../redux-toolkit/hooks';
import cookieSet from '../../helpers/cookieSet';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        borderRadius: "30px",
        right: 'auto',
        backgroundColor: "gray",
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


interface ModalProps {
    modalIsOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
}
const ModalComponent = ({ modalIsOpen, setIsOpen }: ModalProps) => {

    const [value, setValue] = useState(0);
    const category = useAppSelector(state => state.category.name);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`New Duration: ${value} minutes`);
        if (category === "Pomodoro") {
            cookieSet("POMO_NUMBER", String(value * 60));
        } else if (category === "Short Break") {
            cookieSet("SB_NUMBER", String(value * 60));
        } else if (category === "Long Break") {
            cookieSet("LB_NUMBER", String(value * 60));
        }
        window.location.reload();
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newV = Number(event.target.value);
        setValue(newV);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
                contentLabel="Modal"
            >
                <div className='flex flex-col'>
                    <div className='flex justify-end mb-1'>
                        <Button onClick={closeModal} className='bg-black/10 w-3' ><span className="material-symbols-outlined">close</span></Button>
                    </div>
                    <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col'>
                        <label className='text-xl mb-1'>Enter Minutes:</label>
                        <input className='text-center rounded-full h-8 text-xl min-w-[15rem]' type='number' max={25} min={0} required onChange={(event) => handleChange(event)} />
                        <Button type="submit" className='w-fit p-2 mt-4'>Submit</Button>
                    </form>
                </div>
            </Modal>
        </div>
    );
}

export default ModalComponent;