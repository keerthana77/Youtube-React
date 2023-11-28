import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateString, generator } from '../utils/helper';

export default function LiveChat() {
    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();
    const chatMessages = useSelector(store => store.chat.messages);

    useEffect(() => {
        const i = setInterval(() => {
            dispatch(addMessage({
                name: generator(),
                message: generateString(20)
            }))
        }, 1500)

        return () => clearInterval(i);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <div className='w-full h-[600px] p-3 border border-black bg-slate-100 rounded mb-2 overflow-hidden overflow-y-scroll flex flex-col-reverse'>
                {chatMessages.map((d, index) =>
                    <ChatMessage key={index} name={d.name} message={d.message} />
                )}
            </div>
            <form className='w-full border border-black p-2 flex' onSubmit={(e) => { e.preventDefault(); dispatch(addMessage({ name: 'keerthana', message: liveMessage })); setLiveMessage('') }}>
                <input type="text" className='w-72 px-3 border border-black' value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)} />
                <button className='px-4 py-2 bg-green-100'>Submit</button>
            </form>
        </div>
    )
}
